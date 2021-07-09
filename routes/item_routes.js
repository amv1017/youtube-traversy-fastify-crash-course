const {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
} = require('../controllers/item_controller')

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
    },
}

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getItems,
}

// Options for get single item
const getItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
    handler: getItem,
}

// Options for post an item
const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            },
        },
        response: {
            201: Item,
        },
    },
    handler: addItem,
}

// Options for delete an item
const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        },
    },
    handler: deleteItem,
}

// Options for update an item
const updateItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
    handler: updateItem,
}

function itemRoutes(fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)

    // Get single item
    fastify.get('/item/:id', getItemOpts)

    // Add item
    fastify.post('/items', postItemOpts)

    // Delete item
    fastify.delete('/item/:id', deleteItemOpts)

    // Update item
    fastify.put('/item/:id', updateItemOpts)

    done()
}

module.exports = itemRoutes
