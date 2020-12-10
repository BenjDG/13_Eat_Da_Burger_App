const { query } = require('express');
const connection = require('./connection.js');


const orm = {
    selectAll: function () {
        myProm = new Promise(function (resolve, reject) {
            const queryString = `SELECT * FROM ??`
            connection.query(query, [burgers], (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data)
            })
        })
        return myProm;
    },

    insertOne: function () { },

    updateOne: function () { }
}