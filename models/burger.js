const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        })
    },

    insert:  function(value, cb) {
        orm.insertOne("burgers","burger_name", value, function(result) {
            cb(result);
        })
    },

    //update devoured field of the record to true
    update: function(whereVal, cb) {
        //UPDATE burgers SET devoured = 'true' WHERE id = 1
        orm.updateOne("burgers", "devoured", "1", "id", whereVal, function(result) {
            cb(result);
        })
    }
}


module.exports = burger;