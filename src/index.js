export default {

    async fetch(request, env) {

        const url = new URL(request.url);

        // API: lettura database D1
        if (url.pathname === "/api/numeri") {

            try {

                const risultato = await env.DB
                    .prepare(`
                        SELECT
                            id,
                            numero,
                            desrizione
                        FROM tb_ana_numeri
                        ORDER BY id ASC
                    `)
                    .all();

                return Response.json({
                    success: true,
                    dati: risultato.results
                });

            } catch (errore) {

                return Response.json(
                    {
                        success: false,
                        error: errore.message
                    },
                    {
                        status: 500
                    }
                );
            }
        }

        // Tutto il resto viene gestito dai file statici
        return env.ASSETS.fetch(request);
    }
};

