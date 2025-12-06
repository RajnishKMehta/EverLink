export async function onRequest(context) {
  const target = context.env.TARGET_URL;
  
  // 1. Check if the environment variable is set
  if (!target) {
    return new Response(
      "❌ Setup Error: 'TARGET_URL' environment variable is missing in Cloudflare Pages settings.", 
      { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
  
  let finalUrl = target.trim();
  // 2. Smart Logic: If it doesn't look like a URL, treat it as a Discord Invite Code
  // Example: "abc1234" becomes "https://discord.gg/abc1234"
  if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
    finalUrl = `https://discord.gg/${finalUrl}`;
  }
  
  // 3. Redirect with Status 307 (Temporary Redirect)
  // This prevents browsers/social media from caching the old link.
  return Response.redirect(finalUrl, 307);
}
