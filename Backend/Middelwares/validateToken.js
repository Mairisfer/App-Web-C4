import jwt from "jsonwebtoken"

const ACCESS_TOKEN = "d598a01a32a72750581370261ef554a717d21a4dc4cf3f125edbe62cbb85f68388d6ad25f028035d6ff6b7e086ab0f81505e694045ce6ad94d88a96838658933"

export default (req, res, next) => {
    const { token } = req.headers
    
    const username = jwt.verify(token, ACCESS_TOKEN)

    if (username == null) {
        res.sendStatus(401)
        return
    } 

    req.username = username

    next()
}