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

    update: function(cb) {
        orm.updateOne("burgers", function(result) {
            cb(result);
        })
    }
}


module.exports = burger;