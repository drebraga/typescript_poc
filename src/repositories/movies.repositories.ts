import { db } from "../config/database.connection";
import { Movie, Review } from "../protocols/movies.protocols";

async function search() {
  return await db.query(
    `
    SELECT * FROM movies;
    `
  );
}

async function create(newMovie: Movie) {
  return await db.query(
    `
    INSERT INTO movies
      (title, genre, plataform)
    VALUES ($1, $2, $3);
    `,
    [newMovie.title, newMovie.genre, newMovie.plataform]
  );
}

async function edit(id: number, review: Review) {
  return await db.query(
    `
    UPDATE movies 
    SET status = $1, review = $2 
    WHERE "id"=$3;
    `,
    [true, review.review, id]
  );
}

async function remove(id: number) {
  return await db.query(
    `
    DELETE FROM movies 
    WHERE "id"=$1;
    `,
    [id]
  );
}

export default {
  search,
  create,
  edit,
  remove,
};
