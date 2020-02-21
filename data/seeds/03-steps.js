
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {info: 'season eggs', recipes_id: 1},
        {info: 'cook eggs', recipes_id: 1},
        {info: 'put on bread', recipes_id: 2},
        {info: 'cook tomatos', recipes_id: 2},
        {info: 'cook spinash', recipes_id: 3},
        {info: 'salt', recipes_id: 3},
        {info: 'pepper', recipes_id: 3}
      ]);
    });
};
