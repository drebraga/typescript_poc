import { Request, Response, NextFunction } from "express";
import { Movie, Review } from "../protocols/movies.protocols";
import moviesServices from "../services/movies.services";
import httpStatus from "http-status";

async function search(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await moviesServices.search();
    return res.send(result);
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  const newMovie = req.body as Movie;
  try {
    await moviesServices.create(newMovie);
    return res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    next(err);
  }
}

async function edit(req: Request, res: Response, next: NextFunction) {
  const id: number = +req.params;
  const review = req.body as Review;
  try {
    await moviesServices.edit(id, review);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  const id: number = +req.params;
  try {
    await moviesServices.remove(id);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    next(err);
  }
}

export default {
  search,
  create,
  edit,
  remove,
};
