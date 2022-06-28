var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1234',
  port: '3306',
  database : 'seomunlist',
  dateStrings: "date" //날짜 시간 출력
});

//리스트 전체를 불러오는 함수
function getAllList(callback){
    connection.query('select * from semunlist ORDER BY id DESC', 
    (err, rows, fields) =>{
        if(err) throw err;
        callback(rows);
    })
};

//리스트에 새로운 내용을 추가하는 함수
function insertList(tittle, content, callback){
    connection.query(`INSERT INTO semunlist(tittle, datetime, content) VALUES
    ('${tittle}', NOW(), '${content}') `, (err, Result) => {
        if(err) throw err;
        callback();
    })
};

//수정)) 리스트중 id값이 일치하는 row만 불러오는 방법
function getListById(id, callback){
    connection.query(`SELECT * from semunlist WHERE ID = ${id}`, (err, rows, fields) =>{
        if(err) throw err;
        callback(rows);
    })
};
//리스트를 수정하고 싶을때 id값이 일치하는 부분을 수정하는 함수

function updateListById(id, tittle, content, callback){
    connection.query(`UPDATE semunlist SET tittle ='${tittle}', content='${content}' , datetime=NOW() WHERE id='${id}'`, (err, result) => {
        if(err) throw err;
        callback();
    });
}
//리스트를 삭제하고 싶을때 id값이 일치하는 부분을 삭제하는 함수
function deleteListById(id, callback){
    connection.query(`DELETE from semunlist WHERE ID=${id}`, (err, result) =>{
        if(err) throw err;
        callback();
    })
};

//id값이 일치한 값의 모든 값을 가져오는 함수
function getpageByid(id, callback){
    connection.query(`SELECT * FROM semunlist WHERE id = '${id}'`, (err, row, fields) =>{
        if(err) throw err;
        callback(row);
    })
}

module.exports = {
    getAllList,
    insertList,
    getListById,
    updateListById,
    deleteListById,
    getpageByid
};