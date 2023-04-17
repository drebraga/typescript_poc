import { Movie, Review } from "../protocols/movies.protocols.js";
import moviesRepositories from "../repositories/movies.repositories.js";

async function search(): Promise<Movie[]> {
  return await moviesRepositories.search();
}

async function create(newMovie: Movie) {
  await moviesRepositories.create(newMovie);
}

async function edit(id: number, review: Review) {
  await moviesRepositories.edit(id, review);
}

async function remove(id: number) {
  await moviesRepositories.remove(id);
}

export default {
  search,
  create,
  edit,
  remove,
};
