/* Shared Supabase client and auth helpers.
   Load order: supabase-js -> supabase-config.js -> auth.js -> (vocab-data.js) -> page script. */
(function () {
  "use strict";

  const cfg = window.LINGUALEARN_CONFIG || {};
  if (!window.supabase || !cfg.SUPABASE_URL || !cfg.apikey || /YOUR-/.test(cfg.SUPABASE_URL + cfg.apikey)) {
    console.error("LinguaLearn: Supabase isn't configured. Check supabase-config.js and the supabase-js <script> tag.");
    window.LL = null;
    return;
  }

  const db = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: {
      flowType: "pkce",          // no tokens in the URL
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,  // completes email-confirmation / password-reset links
    },
  });

  // Absolute URL of a page next to the current one (works on GitHub Pages and on localhost).
  function pageUrl(name) {
    return new URL(name, location.href).href;
  }

  // Asks the server who the user is, so a stale or revoked session is caught. Redirects if not signed in.
  async function requireUser() {
    const { data, error } = await db.auth.getUser();
    if (error || !data || !data.user) {
      location.replace("login.html");
      return null;
    }
    return data.user;
  }

  async function signOut() {
    await db.auth.signOut();
    location.replace("login.html");
  }

  window.LL = { db, pageUrl, requireUser, signOut };
})();
