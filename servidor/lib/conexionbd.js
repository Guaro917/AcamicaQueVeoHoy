
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'preterito917',
  database : 'que_veo_hoy'
});

module.exports = connection;

