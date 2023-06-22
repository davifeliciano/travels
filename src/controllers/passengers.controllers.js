import httpStatus from "http-status";
import PassengerServices from "../services/passenger.services.js";

export async function getTravelsCountController(req, res) {
  const { page } = res.locals.query;

  try {
    const travelsCount = await PassengerServices.getTravelsCount(page);

    if (travelsCount.length > 100) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Too many results");
    }

    return res.send(travelsCount);
  } catch (err) {
    console.error(err);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
