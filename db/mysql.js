var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456789',
    database : 'company'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});
module.exports=connection;
