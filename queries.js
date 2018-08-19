const Photos = require("./database");

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(id, table) {
    return database(table)
      .where("id", id)
      .first();
  },
  createPhoto(photo) {
    return database("photo")
      .insert(photo)
      .returning("*")
      .then(record => record[0]);
  },
  updatePhoto(id, request) {
    return database("updatePhoto")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  deletePhoto(id) {
    return database("Photo")
      .delete()
      .where("id", id);
  },
};
