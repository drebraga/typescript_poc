import { Router } from "express";
import moviesRoutes from "./movies.routes.js";

const routes = Router();

routes.use("/movies", moviesRoutes);

export default routes;
