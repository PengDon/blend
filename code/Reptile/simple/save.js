const mysql = require('mysql');
const async = require('async');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'usbw',
  database: 'blend'
});

exports.videoSave = function (list, callback) {

  pool.getConnection(function (err, connection) {
    if (err) {
      return callback(err);
    }
    let findsql = 'select * from video where id=?';
    let updatesql = 'update video set title=?,url=?,name=?,duration=? where id=?';
    let insertsql = 'insert into video(id,title,url,name,duration) values(?,?,?,?,?)';
    async.eachSeries(list, function (item, next) {
      connection.query(findsql, [item.id], function (err, result) {
        if (err) {
          return next(err);
        }
        if (result.length >= 1) {
          connection.query(updatesql, [item.title, item.url, item.name, item.duration, item.id], next);
        } else {
          connection.query(insertsql, [item.id, item.title, item.url, item.name, item.duration], next);
        }
      });
    }, callback);
    connection.release();
  });
};