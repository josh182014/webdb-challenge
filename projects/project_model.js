const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    addProject,
    getProjectById
}

function addProject(project) {
    return db('project')
    .insert(project)
}

function getProjectById(id) {
    return db('project')
    .where({id})
}