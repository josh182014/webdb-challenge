const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    addAction,
    getActions,
}

function addAction(action) {
    return db('action')
    .insert(action)
}

function getActions(id) {
    return db('action')
    .where({project_id: id})
}