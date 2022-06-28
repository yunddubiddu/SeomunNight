/////////////~~~공지사항 SQL 연결~~~/////////////
var express = require('express');
var router = express.Router();
var expressLayouts = require('express-ejs-layouts');
const { check , validationResult } = require('express-validator');

const db = require('./../db.js');


router.use(expressLayouts);
//route, routing
router.get('/', (req, res) => {
    res.render("main");
    //서문시장야시장의 메인페이지를 연결
});
router.get('/choice', (req, res) => {
    res.render("choice");
});
router.get('/index', (req, res) => {
    res.render("index");
});
router.get('/intro', (req, res) => {
    res.render("intro");
});
router.get('/join1', (req, res) => {
    res.render("join1");
});
router.get('/join2', (req, res) => {
    res.render("join2");
});
router.get('/login', (req, res) => {
    res.render("login");
}); 
/////////////공지사항 페이지/////////////
router.get('/noti' , function(req , res, next) {

    db.getAllList((rows) => {
        res.render('noti' , {rows : rows})
    })
})
/////////////공지사항 상세 페이지/////////////
router.get('/noti_wri', function(req, res) {
    let id = req.query.id;

    db.getpageByid(id, (row)=>{
        if(typeof id === 'undefined' || row.length <= 0){
            res.status(404).json({error:'undefind memo'});
        } else {
            res.render('noti_wri',{row:row[0]});
        }
    });
});
/////////////공지사항 작성 페이지/////////////
router.get('/manager',(req,res)=> {
    res.render('manager')
})
router.post('/store', 
    check('content').isLength({min: 1 , max: 3000}),
    function(req,res,next){
        let errs = validationResult(req);
        console.log(errs);//콘솔 에러 출력하기
        if (errs['errors'].length > 0){//화면에 에러 출력하기
            res.render('manager', {errs:errs['errors']});
        }else{
            let param = JSON.parse(JSON.stringify(req.body));
            let tittle = param['tittle'];
            let content = param['content'];
            db.insertList(tittle, content, () =>{
            res.redirect('/noti');
            });
        }
    }
        );
/////////////공지사항 수정 페이지/////////////
router.get('/managere', (req, res) => {
    let id = req.query.id;

    db.getListById(id, (row)=>{
        if(typeof id === 'undefinde' || row.length <= 0){
            res.status(404).json({error:'undefinde list'})
        } else {
            res.render(`managere`, {row: row[0]});
        }
    })
});
router.post('/managere', [check('content').isLength({ min: 1 , max: 3000})],
    (req,res) => {
        let errs = validationResult(req);

        let param = JSON.parse(JSON.stringify(req.body));
        let id = param['id'];
        let tittle = param['tittle'];
        let content = param['content'];

        if (errs['errors'].length>0){
            db.updateListById(id, (row)=>{ 
            res.render('managere',{row:row[0], errs:errs['errors']});
        });
        }else{
            db.updateListById(id,tittle, content, () =>{
            res.redirect('/noti');
            });
        }
    });
/////////////공지사항 삭제 페이지/////////////
router.get('/deletelist', (req, res) =>{
    let id = req.query.id;
    db.deleteListById(id, () =>{
      res.redirect('/noti');
    });
  });

module.exports = router;

