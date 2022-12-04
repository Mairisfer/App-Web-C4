import boxesModel from "../models/boxesModel.js";

export async function createBox(req, res) {

    const box = req.body;

    let documento;

    try {
        documento = await boxesModel.create(box)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)

}