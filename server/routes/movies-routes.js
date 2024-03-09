import express from 'express';
import { createMovie, deleteMovies, getAllMovies, getMovieById, updateMovies } from '../controllers/movies-controller.js'
const router = express.Router();


//insert

router.post("/", createMovie)

//get

router.get("/:id", getMovieById)

//getall

router.get("/", getAllMovies)

//update

router.put('/:id', updateMovies)

//delete

router.delete("/:id", deleteMovies)

export default router