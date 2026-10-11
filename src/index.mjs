export default {
  async fetch(request, env, ctx) {
    const GITHUB_USER = "notiamalfred";
    const GITHUB_REPO = "LinguaLearn";
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits?per_page=30`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "LinguaLearn-Update-Log",
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${env.GITHUB_TOKEN}`
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=300",
      },
    });
  },
};
