import Joi from "joi";

const paramsSchema = Joi.object({
  page: Joi.number().integer().positive(),
});

export { paramsSchema };
