
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', function (project) {
        project.increments() 
        project
            .string('name', 128)
            .notNullable() 
        project
            .string('description', 128)
            .notNullable()
        project
            .integer('completed')
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
