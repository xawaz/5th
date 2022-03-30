const express=require('express');
const app=express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "project",
});

app.post('/create',(req,res)=>{
    const name= req.body.name;
    const gender= req.body.gender;
    const aadhar= req.body.aadhar;
    const ownerId= req.body.ownerId;
    const phoneNumber= req.body.phoneNumber;

    db.query('INSERT INTO owner (name,gender,aadhar,ownerId,phoneNumber) VALUES(?,?,?,?,?)',[name,gender,aadhar,ownerId,phoneNumber],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Values Inserted");
        }
    });

})











app.post('/buy',(req,res)=>{
    const name= req.body.name;
    const gender= req.body.gender;
    const aadhar= req.body.aadhar;
    const buyerId= req.body.buyerId;
    const phoneNumber= req.body.phoneNumber;

    db.query('INSERT INTO buyer (name,gender,aadhar,buyerId,phoneNumber) VALUES(?,?,?,?,?)',[name,gender,aadhar,buyerId,phoneNumber],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Values Inserted");
        }
    });

})













app.get('/properties',(req,res)=>{
    db.query('SELECT p.*,o.phoneNumber,t.type FROM propertyDetails p,owner o,type t where p.ownerId=o.ownerId and t.typeId=p.typeId',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})


app.get('/trans',(req,res)=>{
    db.query('SELECT * from  billing',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

// app.post('/create',(req,res)=>{
//     console.log(req.body);
// })


app.listen(3001,()=>{
    console.log("server running on 3001")//to run type 'node index.js' in terminal
                                            //password of mysql is password
})