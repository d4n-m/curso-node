import moviesModel from '../../models/moviesModel.js';


const getAllMovies = (req, res) => {
    const movies = moviesModel.getMovies();
    // console.log(movies);
    res.json(movies);
}

const getMovieById = (req, res) => {
    const id = req.params.id;
    const movie = moviesModel.getMovieById(id);
    res.json(movie);
}


export default {
    getAllMovies,
    getMovieById
}