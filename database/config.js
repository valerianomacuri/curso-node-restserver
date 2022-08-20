const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        // en mongoose 6 viene esta configuración por defecto
        // await mongoose.connect(process.env.MONGODB_CNN, {
        //     useNewParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        //     useFindAndModify: false
        // })
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log("Base de datos online")
    } catch (error) {
        console.log(error)
        throw new Error("Error a la hora de iniciar la base de datos")
    }
}

module.exports = {
    dbConnection
}
