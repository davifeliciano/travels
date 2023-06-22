import PassengerRepository from "../repositories/passengers.repository.js";

class PassengerServices {
  static async countTravelsOfPassengers(page) {
    let travelsCount;

    if (page) {
      travelsCount = await PassengerRepository.getTravelsPage(page);
    } else {
      travelsCount = await PassengerRepository.countTravelsOfPassengers();
    }

    return travelsCount;
  }
}

export default PassengerServices;
