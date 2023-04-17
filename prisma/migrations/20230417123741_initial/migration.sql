-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "plataform" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "review" TEXT NOT NULL DEFAULT 'No review yet',

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);
