CREATE TABLE movies (
    id integer NOT NULL DEFAULT nextval('movies_id_seq' :: regclass),
    title text COLLATE pg_catalog."default" NOT NULL,
    genre text COLLATE pg_catalog."default" NOT NULL,
    plataform text COLLATE pg_catalog."default" NOT NULL,
    status boolean NOT NULL DEFAULT false,
    review text COLLATE pg_catalog."default" NOT NULL DEFAULT 'No review yet' :: text,
    CONSTRAINT movies_pkey PRIMARY KEY (id) "createAt" TIMESTAMP DEFAULT NOW()
);

TABLESPACE pg_default;

ALTER TABLE
    IF EXISTS movies OWNER to postgres;

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 1', 'Ação/Aventura', 'Netflix');

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 2', 'Terror', 'Prime Video');

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 3', 'Ação/Aventura', 'Netflix');

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 4', 'Comédia', 'Prime Video');

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 5', 'Terror', 'Netflix');

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 6', 'Suspense', 'Netflix');

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 7', 'Comédia', 'Prime Video');

INSERT INTO
    cars (title, genre, plataform)
VALUES
    ('Filme 8', 'Documentário', 'Prime Video');