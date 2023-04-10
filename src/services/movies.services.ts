import { Movie, Review } from "../protocols/movies.protocols";
import moviesRepositories from "../repositories/movies.repositories";

async function search(): Promise<Movie[]> {
  const { rows: result } = await moviesRepositories.search();
  return result;
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
