import clientModel from "../models/clientModel.js";

export async function createClient(req, res) {

    const cliente = req.body;

    let documento = null;

    try {
        const documento = await clientModel.create(cliente)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)

}

export async function readClient(req, res) {
    const { username } = req.params
    let documento = null;

    try {
        documento = await clientModel.find({
            "username": username
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}


export async function updateClient(req, res) {
    const { id } = req.params
    let documento = null;

    try {
        documento = await clientModel.findOne({
            "_id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    documento.age = 999
    documento.save()

    res.status(200)
    res.json(documento)
}
export async function deleteClient(req, res) {
    const { id } = req.params
    let documento = null;

    try {
        documento = await clientModel.findOneAndDelete({
            "_id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    documento.age = 999
    documento.save()

    res.status(200)
    res.json(documento)
}
