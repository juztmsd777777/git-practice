import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app= express();
app.use(cors());


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});


app.get("/api",(req,res)=>{
    res.json({message:"Hello from server"});
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

