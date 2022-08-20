const Role = require("../models/rol")
const Usuario = require("../models/usuarios")

const esRoleValido = async (rol = "") => {
    const existeRol = await Role.findOne({ rol })
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
}

const emailExiste = async (correo = "") => {
    const existeEmail = await Usuario.findOne({ correo })
    if (existeEmail) {
        throw new Error("Ese correo ya está registrado")
    }
}

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id)
    if (!existeUsuario) {
        throw new Error("El id no existe " + id)
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}