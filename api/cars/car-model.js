const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("cars");
  },
  getById(id) {
    return db("cars").where({ id }).first();
  },
  create(account) {
    return db("cars")
      .insert(account)
      .then(([id]) => {
        return db("cars").where("id", id);
      });
  },
  update(id, changes) {
    return db("cars").where("id", id).update(changes);
  },
  delete(id) {
    return db("cars").where("id", id).del();
  },
};
