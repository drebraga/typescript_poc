import db from "../config/database.connection.js";
import { Movie, Review } from "../protocols/movies.protocols.js";

async function search() {
  return await db.movies.findMany();
}

async function create(newMovie: Movie) {
  return await db.movies.create({
    data: {
      ...newMovie,
    },
  });
}

async function edit(id: number, review: Review) {
  return await db.movies.update({
    data: {
      status: true,
      review: review.review,
    },
    where: { id },
  });
}

async function remove(id: number) {
  return await db.movies.delete({
    where: { id },
  });
}

export default {
  search,
  create,
  edit,
  remove,
};
