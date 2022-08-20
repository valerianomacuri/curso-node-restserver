const { request, response } = require("express")
const bcryptjs = require("bcryptjs")
const Usuario = require("../models/usuarios")
const { validationResult } = require("express-validator")

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

const usuariosPost = async (req, res = response) => {


    const { nombre, correo, password, rol } = req.body
    const usuario = new Usuario({ nombre, correo, password, rol })

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    // Guardar en BD
    await usuario.save()
    res.json({
        msg: "post API - controlador",
        usuario
    })
}

const usuariosPut = async (req, res = response) => {
    const { id } = req.params
    const { _id, password, google, correo, ...resto } = req.body

    if (password) {
        const salt = bcryptjs.genSaltSync()
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.json({
        msg: "put API - controlador",
        usuario
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