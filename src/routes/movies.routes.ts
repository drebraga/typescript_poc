import { Router } from "express";
import moviesControllers from "../controllers/movies.controllers.js";

const movieRoutes = Router();

movieRoutes.get("/", moviesControllers.search);
movieRoutes.post("/", moviesControllers.create);
movieRoutes.put("/:id", moviesControllers.edit);
movieRoutes.delete("/:id", moviesControllers.remove);

export default movieRoutes;
