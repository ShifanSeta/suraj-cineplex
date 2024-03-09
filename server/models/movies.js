import mongoose from 'mongoose'


const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    trailerLink: {
        type: String,
        required: true
    }
}
  )


export default mongoose.model('Movie', movieSchema )