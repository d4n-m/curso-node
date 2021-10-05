import moviesModel from '../../models/moviesModel.js';
import HttpError from 'http-errors';

const getAllMovies = (req, res, next) => {
    
    try {
        const movies = moviesModel.getMovies();
        res.json(movies);
    } catch {
        next(HttpError(404, {message: "Not found"}));
    }
}

// const getMovieById = (req, res) => {
const getMovieById = (req, res, next) => {
    // if(!req.params.id) {
    //     next(HttpError(400, {message: "No parameter found"}));
    // }

    const id = req.params.id;
    const movie = moviesModel.getMovieById(id);

    if (movie.length == 0) {
        next(HttpError(404, {message: `MovieID '${id}' not found`}));
    } else res.json(movie);
}


export default {
    getAllMovies,
    getMovieById
}