const express= require("express");

const app=express()
app.get('/',(req,res)=>{res.send("Hello")})
app.post('/',(req,res)=>{res.send("Hello post")})
app.put('/',(req,res)=>{res.send("Hello put")})
app.delete('/',(req,res)=>{res.send("Hello delete")})
app.listen(3000,()=>{console.log("server running")})