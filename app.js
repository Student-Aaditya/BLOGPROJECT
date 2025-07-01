
require("dotenv").config();

const express=require("express");
const app=express();
const port=8042;
const dotenv=require("dotenv");



app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`)
})