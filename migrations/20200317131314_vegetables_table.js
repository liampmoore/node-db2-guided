//"up" describes the changes that will be applied to the database
exports.up = function(knex) {
  // create the vegetables table
  return knex.schema.createTable('vegetables', tbl => {
      // a primary key, named id, type integer, autoincrement
      tbl.increments();
      tbl.string('name', 255).unique().index();
      tbl.boolean('favorite');


  })
};

//"Down" describes thow to undo the changes from the up function
exports.down = function(knex) {
  //remove (drop) the vegetables table
  return knex.schema.dropTableIfExists("vegetables")
};
