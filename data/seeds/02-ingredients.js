
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: "Eggs", recipes_id: 1},
        {name: "Salt", recipes_id: 1},
        {name: "Pepper", recipes_id: 1},
        {name: "Bread", recipes_id: 2},
        {name: "Spinach", recipes_id: 3},
        {name: "Tomato", recipes_id: 4},
        {name: "Red Onion", recipes_id: 5},
      
      ]);
    });
};
