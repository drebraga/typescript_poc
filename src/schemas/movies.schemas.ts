import Joi from "joi";

const movie = Joi.object({
  title: Joi.string().required(),
  genre: Joi.string().required(),
  plataform: Joi.string().required(),
});

const review = Joi.object({
  review: Joi.string(),
});

export default {
  movie,
  review,
};
