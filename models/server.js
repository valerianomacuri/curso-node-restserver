const express = require("express")
const cors = require("cors")
const { dbConnection } = require("../database/config")

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios"

        // db connection
        this.conectarDB()
        // Middlewares
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static("public"))
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuarios"))
    }

    async conectarDB() {
        await dbConnection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port)
        })
    }
}

module.exports = Server