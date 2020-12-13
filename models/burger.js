const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        })
    },

    insert:  function(cb) {
        orm.insertOne("burgers", function(result) {
            cb(result);
        })
    },

    update: function(cb) {
        orm.insertOne("burgers", function(result) {
            cb(result);
        })
    }
}


module.exports = burger;