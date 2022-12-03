import clientModel from "../models/clientModel.js";

export async function createClient(req, res) {

    const cliente = req.body;

    let documento;

    try {
        documento = await clientModel.create(cliente)
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
    let documento;

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
    const {username} = req.params
    const { cambios } = req.body
    
    let documento;

    try {
        documento = await clientModel.updateOne({
            "username": username
        }, cambios)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}
export async function deleteClient(req, res) {
    const { username } = req.params
    let documento;

    try {
        documento = await clientModel.findOneAndDelete({
            "username": username
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
