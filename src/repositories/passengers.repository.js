import connection from "../database/database.js";

class PassengerRepository {
  static async getTravelsCount() {
    const text = `
      SELECT
        p."fullName" AS passenger,
        (
          SELECT
            count(*)
          FROM passenger_travels
          WHERE "passengerId" = p.id
        ) AS travels
      FROM passengers p
      JOIN passenger_travels pt ON p.id = pt."passengerId"
      JOIN travels t ON pt."travelId" = t.id
      ORDER BY p."fullName";
    `;

    const { rows } = await connection.query(text);
    return rows;
  }

  static async getTravelsCountPage(page) {
    const limit = 25;
    const offset = (page - 1) * limit;

    const text = `
      SELECT
        p."fullName" AS passenger,
        (
          SELECT
            count(*)
          FROM passenger_travels
          WHERE "passengerId" = p.id
        ) AS travels
      FROM passengers p
      JOIN passenger_travels pt ON p.id = pt."passengerId"
      JOIN travels t ON pt."travelId" = t.id
      ORDER BY p."fullName"
      OFFSET $1
      LIMIT $2
    `;

    const { rows } = await connection.query(text, [offset, limit]);
    return rows;
  }
}

export default PassengerRepository;
