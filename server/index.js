const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FriendModel= require("./models/Friends")

//Database connection

mongoose.connect("mongodb://localhost:27017/mern-HO?readPreference=primary&appname=MongoDB%20Compass&ssl=false",{useNewUrlParser:true} ) 

//inserting data to mongoDB
app.get("/insert", async(req,res)=>{
    const friend = new FriendModel({name:"Jessi", age:98});
    await friend.save();
    res.send("Inserted DATA")
})

//reading data to page from mongoDB
app.get("/read", async (req, res) => {
    FriendModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, ()=>{console.log("you are connected!")});
