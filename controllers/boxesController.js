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

export async function readBox(req, res) {
    const { idBox } = req.params
    let documento;

    try {
        documento = await boxesModel.find({
            "idBox": idBox
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function updateBox(req, res) {
    const { idBox } = req.params
    const { changeBox } = req.body
    
    let documento;

    try {
        documento = await boxesModel.updateOne({"idBox": idBox}, changeBox)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteBox(req, res) {
    const { idBox } = req.params
    let documento;

    try {
        documento = await boxesModel.findOneAndDelete({
            "idBox": idBox
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}