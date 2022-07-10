const { request, response } = require("express")

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = "No Name", apiKey, page = 1 } = req.query
    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apiKey,
        page
    })
}

const usuariosPost = (req, res = response) => {
    const body = req.body
    res.json({
        msg: "post API - controlador",
        body
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params
    res.json({
        msg: "get API - controlador",
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "get API - controlador"
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "get API - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}