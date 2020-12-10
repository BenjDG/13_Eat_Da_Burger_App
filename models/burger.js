const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    insert:  function(cb) {
        orm.insertOne("burgers",)
    }
}


module.exports = burger;