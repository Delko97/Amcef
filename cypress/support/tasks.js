const mysql = require('mysql');
const xlsx = require('node-xlsx');
const fs = require('fs-extra');

const queryTestDb = (query, db) => {
    const connection = mysql.createConnection(db);
    connection.connect();
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) reject(error);
            else {
                connection.end();
                return resolve(results);
            }
        });
    });
}

module.exports = {
    queryTestDb
}
