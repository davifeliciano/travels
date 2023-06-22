import httpStatus from "http-status";

export default function validateParams(schema) {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.query);

    if (error) {
      return res.status(httpStatus.BAD_REQUEST).send("Invalid page value");
    }

    res.locals.query = value;
    next();
  };
}
