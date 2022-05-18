
    'use strict';

    const mysql= require('mysql');
    //Local mysql db Connection
    
    const dbConn= mysql.createConnection({
        host:  'localhost',
        user: 'root',
        password: '',
        database: 'tiendavirtual'
    });

    dbConn.connect(function(err){
        if(err) throw err;
        console.log("Database Connected!");
    });

    module.exports=dbConn;

    