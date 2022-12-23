import reservationModel from "../models/reservationsModel.js";

export async function createReservation(req, res) {
  const reservation = req.body;

  let documento;

  try {
    documento = await reservationModel.create(reservation);
    res.status(201);
    res.json(documento);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }
}

export async function readReservation(req, res) {
  //const { idReserv } = req.params
  let documento;

  try {
    documento = await reservationModel.find({});
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}

export async function updateReservation(req, res) {
  const { idReserv } = req.params;
  const changeReserv = req.body;

  let documento;

  try {
    documento = await reservationModel.updateOne(
      { idReserv: idReserv },
      changeReserv
    );
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}

export async function deleteReservation(req, res) {
  const { idReserv } = req.params;
  let documento;

  try {
    documento = await reservationModel.findOneAndDelete({
      idReserv: idReserv,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}
