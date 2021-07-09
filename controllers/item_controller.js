const { v4:uuidv4 } = require('uuid')
let items = require('../Items')

const getItems = (request, reply) => {
    reply.send(items)
}

const getItem = (request, reply) => {
    const {id} = request.params
    const item = items.find(i => i.id === id)
    reply.send(item)
}

const addItem = (request, reply) => {
    const {name} = request.body
    const item = {
        id: uuidv4(),
        name,
    }
    items = [...items, item]
    reply.code(201).send(item)
}

const deleteItem = (request, reply) => {
    const {id} = request.params
    items = items.filter(i => i.id !== id)
    reply.send({message: `Item ${id} has been removed`})
}

const updateItem = (request, reply) => {
    const {id} = request.params
    const {name} = request.body
    items = items.map(i => (i.id === id ? {id, name} : i))
    item = items.find(i => i.id === id)
    reply.send(item)
}

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
}
