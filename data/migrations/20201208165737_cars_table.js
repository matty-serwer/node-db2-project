// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    // id: primary key
    table.increments();
    // VIN unique, required
    table.text('name', 17).unique().notNullable();
    // Make, required
    table.text('make', 128).notNullable();
    // Model, required
    table.text('model', 128).notNullable();
    // Mileage, required
    table.integer('mileage').notNullable();
    // Transmission type
    table.text('transmissionType', 9);
    // Title Status
    table.text('titleStatus', 128);
  })
};

exports.down = function(knex) {
  return knex.scheme.dropTableIfExists('cars')
};
