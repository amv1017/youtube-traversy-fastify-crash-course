const fastify = require('fastify')({logger: true})
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    },
}) // GO TO: http://localhost:5000/docs/static/index.html

// NOTE: add routes only after registering fastify-swagger!

fastify.register(require('./routes/item_routes'))

const PORT = 5000

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.console(error)
        process.exit(1)
    }
}

start()
