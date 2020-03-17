exports.seed = async function(knex) {
  const testData = [
    { name: "tomato", color: "red" },
    { name: "squash", color: "yellow" },
    { name: "cilantro", color: "green" },
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("vegetables").truncate();

  return knex("vegetables").insert(testData);
};
