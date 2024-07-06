var express=require("express");
var bodyParser=require("body-parser");
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project1');
var db=mongoose.connection;
db.on('error',function(){
    console.log("db error");
})
db.on('open',function(){
    console.log("connection succeeded");
})
var app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended:true
}));
app.get("/view",function(req,res){
    app.use(express.static('public'));
    res.sendFile('Home.js', { root: __dirname + '/public' }); 
})
app.post('/sign_up',function(req,res){
    var Month=req.body.Month;
    var username=req.body.username;
    var Id=req.body.Id;
    var Entrytime=req.body.Entrytime;
    var MIntervaltime=req.body.MIntervaltime;
    var Ltime=req.body.Ltime;
    var EIntervaltime=req.body.EIntervaltime;
    var Exittime=req.body.Exittime;
    
    

    var data=
    {
        "Month":Month,
        "username":username,
        "Id":Id,
        "Entrytime":Entrytime,
        "MIntervaltime":MIntervaltime,
        "Ltime":Ltime,
        "EIntervaltime":EIntervaltime,
        "Exittime":Exittime

        
        
    }
    db.collection('form').insertOne(data, function(req,res){});
    res.send("success");
})
app.get("/view",function(req,res){
    app.use(express.static('public'));
    res.sendFile('Salary.js', { root: __dirname + '/public' }); 
})
app.post('/sign_up1',function(req,res){
    var month=req.body.month;
    var ename=req.body.ename;
    var designation=req.body.designation;
    var cname=req.body.cname;
    var month=req.body.month;
    var basicpay=req.body.basicpay;
    var rent=req.body.rent;
    var callowance=req.body.callowance;
    var mallowance=req.body.mallowance;
    var sallowance=req.body.sallowance;
    var grosspay=req.body.grosspay;
    var pf=req.body.pf;
    var ptax=req.body.ptax;
    var dtax=req.body.dtax;
    var netpay=req.body.netpay;
    
    

    var data=
    {
        "month":month,
        "ename":ename,
        "designation":designation,
        "cname":cname,
        "month":month,
        "basicpay":basicpay,
        "rent":rent,
        "callowance":callowance,
        "mallowance":mallowance,
        "sallowance":sallowance,
        "grosspay":grosspay,
        "pf":pf,
        "ptax":ptax,
        "dtax":dtax,
        "netpay":netpay

        
        
    }
    db.collection('form').insertOne(data, function(req,res){});
    res.send("success");
})
app.get("/view",function(req,res){
    app.use(express.static('public'));
    res.sendFile('personalform.js', { root: __dirname + '/public' }); 
})
app.post('/sign_up2',function(req,res){
    var ename=req.body.ename;
    var eid=req.body.eid;
    var doj=req.body.doj;
    var address=req.body.address;
    var contact=req.body.contact;
    var parentdetail=req.body.parentdetail;
    var proof=req.body.proof;

    var data=
    {
        "ename":ename,
        "eid":eid,
        "doj":doj,
        "address":address,
        "contact":contact,
        "Parentdetail":parentdetail,
        "proof":proof,

        
        
    }
    db.collection('form').insertOne(data, function(req,res){});
    res.send("success");
})
app.listen(7500,function(){
    console.log("server listening at port 7500");
});