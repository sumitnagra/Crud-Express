import mongoose from 'mongoose'

const Connectmongo = (URI) => {
    try {
        const result = mongoose.connect(URI, () => {
            console.log("Database Connected")
        })

    } catch (error) {
        console.log(error)
    }
}

export default Connectmongo;