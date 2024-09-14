import express from "express";
import Connection from "./db/conn.js";
import dotenv from "dotenv";
import foodRouter from "./routes/foodRoute.js";
const app = express();
import cors from "cors";
dotenv.config()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8000
app.use("/api/foods", foodRouter)

Connection()
app.listen(PORT, () =>{
    console.log("listening on port 8000");
    
})