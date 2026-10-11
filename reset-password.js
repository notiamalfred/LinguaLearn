/* Lets someone who clicked the emailed reset link choose a new password. */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const form = $("reset-form");
  const newPw = $("new-password");
  const confirmPw = $("confirm-password");
  const showPws = $("show-passwords");
  const submit = $("reset-submit");
  const message = $("reset-message");

  function say(text, kind) {
    message.textContent = text;
    message.className = "fc-message" + (kind ? " fc-message--" + kind : "");
  }

  if (!window.LL) {
    say("Accounts aren't set up on this site yet.", "error");
    return;
  }
  const db = window.LL.db;

  let ready = false;
  say("Checking your reset link…");

  // The emailed link signs the visitor into a short-lived "recovery" session.
  db.auth.onAuthStateChange((event) => {
    if (event === "PASSWORD_RECOVERY") {
      ready = true;
      form.hidden = false;
      say("");
      newPw.focus();
    }
  });

  setTimeout(() => {
    if (!ready) say("This reset link is invalid or has expired. Request a new one from the sign-in page.", "error");
  }, 5000);

  showPws.addEventListener("change", () => {
    const type = showPws.checked ? "text" : "password";
    newPw.type = type;
    confirmPw.type = type;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const pw = newPw.value;

    if (pw.length < 12) return say("Use at least 12 characters.", "error");
    if (new TextEncoder().encode(pw).length > 72) return say("That password is too long (72 bytes maximum).", "error");
    if (pw !== confirmPw.value) return say("The two passwords don't match.", "error");

    submit.disabled = true;
    say("");
    try {
      const { error } = await db.auth.updateUser({ password: pw });
      if (error) {
        if (error.code === "same_password" || error.code === "weak_password") say(error.message, "error");
        else say("We couldn't change your password. The link may have expired; request a new one.", "error");
        submit.disabled = false;
        return;
      }
      await db.auth.signOut({ scope: "global" }); // end every other session too
      form.hidden = true;
      say("Password changed. Taking you to sign in…", "success");
      setTimeout(() => location.replace("login.html"), 2000);
    } catch (err) {
      console.error(err);
      say("Something went wrong. Please try again.", "error");
      submit.disabled = false;
    }
  });
})();
