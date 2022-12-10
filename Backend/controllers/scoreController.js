
/*
import scoreModel from "../scoreModel.js";

export async function createScore(req, res) {

    const score = req.body;

    let documento;

    try {
        documento = await scoreModel.create(score)
        res.status(201)
        res.json(documento)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }
}

export async function readScore(req, res) {
    const { idScore } = req.params
    let documento;

    try {
        documento = await scoreModel.find({
            "idScore": idScore
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function updateScore(req, res) {
    const { idScore } = req.params
    const { changeScore } = req.body
    
    let documento;

    try {
        documento = await scoreModel.updateOne({"idScore": idScore}, changeScore)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteScore(req, res) {
    const { idScore } = req.params
    let documento;

    try {
        documento = await scoreModel.findOneAndDelete({
            "idscore": idScore
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}
*/
