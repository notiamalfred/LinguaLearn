/* Sign in / create account / forgot password, on one page. */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const form = $("auth-form");
  const title = $("auth-title");
  const subtitle = $("auth-subtitle");
  const emailInput = $("email");
  const pwField = $("password-field");
  const pwInput = $("password");
  const pwHint = $("password-hint");
  const showPw = $("show-password");
  const submit = $("auth-submit");
  const message = $("auth-message");
  const toSignup = $("to-signup");
  const toSignin = $("to-signin");

  function say(text, kind) {
    message.textContent = text;
    message.className = "fc-message" + (kind ? " fc-message--" + kind : "");
  }

  if (!window.LL) {
    form.hidden = true;
    say("Accounts aren't set up on this site yet.", "error");
    return;
  }
  const db = window.LL.db;

  // --- hCaptcha helpers ---
  function getCaptchaToken() {
    const el = document.querySelector('[name="h-captcha-response"]');
    return el ? el.value : "";
  }
  
  function resetCaptcha() {
    if (window.hcaptcha && window.hcaptcha.reset) {
      window.hcaptcha.reset();
    }
  }

  const MODES = {
    signin: { title: "Sign in", subtitle: "Pick up your daily vocabulary review.", submit: "Sign in", password: true, autocomplete: "current-password" },
    signup: { title: "Create an account", subtitle: "Your progress is saved so missed words come back in your next review.", submit: "Create account", password: true, autocomplete: "new-password" },  };

  let mode = "signin";
  let busy = false;

  function setMode(next) {
    mode = next;
    resetCaptcha();
    const m = MODES[next];
    title.textContent = m.title;
    subtitle.textContent = m.subtitle;
    submit.textContent = m.submit;
    pwField.hidden = !m.password;
    pwInput.required = m.password;
    if (m.password) pwInput.autocomplete = m.autocomplete;
    pwHint.hidden = next !== "signup";
    pwInput.value = "";
    pwInput.type = "password";
    showPw.checked = false;
    toSignup.hidden = next !== "signin";
    toSignin.hidden = next === "signin";
    say("");
  }

  function setBusy(state) {
    busy = state;
    submit.disabled = state;
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function passwordProblem(email, pw) {
    if (pw.length < 12) return "Use at least 12 characters.";
    if (new TextEncoder().encode(pw).length > 72) return "That password is too long (72 bytes maximum).";
    const local = email.split("@")[0].toLowerCase();
    if (local.length >= 4 && pw.toLowerCase().includes(local)) return "Don't include your email name in your password.";
    return "";
  }

  async function signIn(email, password) {
    const captchaToken = getCaptchaToken();
    if (!captchaToken) {
      say("Please complete the human verification first.", "error");
      return;
    }
    const { error } = await db.auth.signInWithPassword({
      email,
      password,
      options: { captchaToken: getCaptchaToken() },
    });
    resetCaptcha(); // always reset after the request
  
    if (error) {
      pwInput.value = "";
      if (error.name === "AuthRetryableFetchError") {
        say("We couldn't reach the server. Check your connection and try again.", "error");
        return;
      }
      say("We couldn't sign you in. Check your email and password, and make sure you've confirmed your email address.", "error");
      await sleep(1000);
      return;
    }
    location.replace("flashcards.html");
  }
  async function signUp(email, password) {
    const captchaToken = getCaptchaToken();
    if (!captchaToken) {
      say("Please complete the human verification first.", "error");
      return;
    }
    const { data, error } = await db.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.LL.pageUrl("login.html"),
        captchaToken: getCaptchaToken(),
      },
    });
    resetCaptcha(); // always reset after the request
  
    if (error) {
      if (error.code === "weak_password" || error.status === 429) say(error.message, "error");
      else say("We couldn't create the account. Please try again in a moment.", "error");
      return;
    }
    if (data.session) {
      location.replace("flashcards.html");
      return;
    }
    setMode("signin");
    emailInput.value = email;
    say("If that address can be used for a new account, a confirmation link is on its way. Open it, then sign in here.", "success");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy) return;

    const email = emailInput.value.trim();
    const password = pwInput.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      say("Enter a valid email address.", "error");
      return;
    }
    if (mode === "signin" && !password) {
      say("Enter your password.", "error");
      return;
    }
    if (mode === "signup") {
      const problem = passwordProblem(email, password);
      if (problem) {
        say(problem, "error");
        return;
      }
    }

    setBusy(true);
    say("");
    try {
      if (mode === "signin") await signIn(email, password);
      else if (mode === "signup") await signUp(email, password);
      else await forgot(email);
    } catch (err) {
      console.error(err);
      say("Something went wrong. Please try again.", "error");
    } finally {
      setBusy(false);
    }
  });

  toSignup.addEventListener("click", () => setMode("signup"));
  toSignin.addEventListener("click", () => setMode("signin"));
  showPw.addEventListener("change", () => {
    pwInput.type = showPw.checked ? "text" : "password";
  });

  // Already signed in (or just confirmed their email via the link)? Go straight to the review.
  db.auth.onAuthStateChange((event, session) => {
    if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) {
      location.replace("flashcards.html");
    }
  });

  // Expired or already-used email links come back with an error in the URL.
  if (/error_code=otp_expired|error=access_denied/.test(location.hash)) {
    say("That link has expired or was already used. Sign in, or request a new link.", "error");
  }
})();
