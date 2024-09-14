import express from "express";
import { createFood, deleteFood, foodDetail, getFood, updateFood } from "../controllers/foodController.js";

const foodRouter = express.Router();
foodRouter.post("/create-food", createFood)
foodRouter.get("/get-food", getFood)
foodRouter.get("/food-detail/:id", foodDetail)
foodRouter.put("/update-food/:id", updateFood)
foodRouter.delete("/delete-food/:id", deleteFood)

export default foodRouter;