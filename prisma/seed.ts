import db from "../src/config/database.connection.js";

async function main() {
  await db.movies.createMany({
    data: [
      {
        title: "Filme 1",
        genre: "Ação/Aventura",
        plataform: "Netflix",
      },
      {
        title: "Filme 2",
        genre: "Terror",
        plataform: "Prime Video",
      },
      {
        title: "Filme 3",
        genre: "Ação/Aventura",
        plataform: "Netflix",
      },
      {
        title: "Filme 4",
        genre: "Comédia",
        plataform: "Prime Video",
      },
      {
        title: "Filme 5",
        genre: "Terror",
        plataform: "Netflix",
      },
      {
        title: "Filme 6",
        genre: "Suspense",
        plataform: "Netflix",
      },
      {
        title: "Filme 7",
        genre: "Comédia",
        plataform: "Prime Video",
      },
      {
        title: "Filme 8",
        genre: "Documentário",
        plataform: "Prime Video",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Registrados com sucesso!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
