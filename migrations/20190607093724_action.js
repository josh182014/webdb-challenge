
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function (action) {
        action.increments() 
        action
            .string('name', 128)
            .notNullable() 
        action
            .string('description', 128)
            .notNullable()
        action
            .string('notes', 128)
            .notNullable()
        action
            .integer('completed')
            .notNullable()
        action
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
