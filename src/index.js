export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    if (url.pathname === "/api/test") {
      return Response.json({
        success: true,
        messaggio: "API funzionante"
      });
    }

    return env.ASSETS.fetch(request);
  }
};

