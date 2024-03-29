const { Router } = require("express")
const { check } = require("express-validator")
const {
    usuariosDelete,
    usuariosGet,
    usuariosPatch,
    usuariosPost,
    usuariosPut
} = require("../controllers/usuarios")
const { esRoleValido, emailExiste, existeUsuarioPorId } = require("../helpers/db-validators")
const { validarCampos } = require("../middlewares/validar-campos")
const router = Router()

router.get("/", usuariosGet)
router.put("/:id", [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(esRoleValido),
    validarCampos
], usuariosPut)
router.post("/", [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe de ser más de 6 letras").isLength({ min: 6 }),
    check("correo", "El correo no es válido").isEmail(),
    check("correo").custom(emailExiste),
    check("rol").custom(esRoleValido),
    validarCampos
], usuariosPost)
router.delete("/", usuariosDelete)
router.patch("/", usuariosPatch)

module.exports = router