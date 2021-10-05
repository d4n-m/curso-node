import moviesModel from '../../models/moviesModel.js';
import HttpError from 'http-errors';

const addMovie = (req, res, next) => {
    const movie = req.body;
    try {
        let parsedData = JSON.parse(movie);
        console.log(parsedData);
    } catch (e) {
        next(HttpError(400, { message: `Bad request` }));
    }
    const added = moviesModel.addMovie(movie);
    if (added) {
        res.status(201).json({ "message": "Created succesfully" });
    } else {
        next(HttpError(400, { message: `Bad request` }));
    }
}

export default {
    addMovie
}