import Movies from '../models/movies.js'


//create 

export const createMovie = async (req, res) => {
    const newMovie = new Movies(req.body);
    try {
        const savedMovie = await newMovie.save()
        res.status(200).json(savedMovie);
    } catch (error) {
        res.status(500).json(error)
    }
}

//getall

export const getAllMovies = async(req, res) => {
    try {
        const movies = await Movies.find();
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get

export const getMovieById = async(req, res) => {
    try {
        const movies = await Movies.findById(req.params.id);
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json(error);
    }
}


//update 

export const updateMovies = async(req, res) => {
    try {
        const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json(error)
    }
}

//delete

export const deleteMovies = async(req, res) => {
    try {
        await Movies.findByIdAndDelete(req.params.id);
        res.status(200).json("movies successfully deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}
