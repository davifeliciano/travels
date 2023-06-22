import PassengerRepository from "../repositories/passengers.repository.js";

class PassengerServices {
  static async getTravelsCount(page) {
    let travelsCount;

    if (page) {
      travelsCount = await PassengerRepository.getTravelsCountPage(page);
    } else {
      travelsCount = await PassengerRepository.getTravelsCount();
    }

    return travelsCount;
  }
}

export default PassengerServices;
