import { Router } from "express";

const movieRoutes = Router();

movieRoutes.get("/");
movieRoutes.post("/");
movieRoutes.put("/:id");
movieRoutes.delete("/:id");

export default movieRoutes;
