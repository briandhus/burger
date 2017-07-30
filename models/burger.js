var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cb) {
  	orm.create("burgers", ["burger_name", "devoured"], cb);
  }
  update: function(cb) {
  	var burgerId = burgers.id;
  	orm.update("burgers", devoured: true, burgerId);
  } 	
}
module.exports = burger;