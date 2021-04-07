const mysql = require('mysql')
const {database} = require('./keys')
const {promisify} = require('util')
const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('LA CONECCIÓN CON LA BASE DE DATOS SE PERDIO')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('LA BASE DE DATOS TIENE DEMASIADAS CONECCIONES')
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('LA CONECCION CON LA BASE DE DATOS FUE RECHAZADA')
        }
    }
    if(connection) connection.release()
    console.log('LA BASE DE DATOS ESTÁ CONECTADA')
    return
})

//Promisify Pool Querys

pool.query = promisify(pool.query)

module.exports = pool