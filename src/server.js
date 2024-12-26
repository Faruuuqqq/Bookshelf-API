const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes');

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.routes(routes);

    try {
        await server.start();
        console.log(`Server berjalan pada ${server.info.uri}`);
    } catch (err) {
        console.error('Error saat memulai server:', err);
    }
};

init();