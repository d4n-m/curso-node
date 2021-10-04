import moviesModel from '../../models/moviesModel.js';


const addMovie = (req, res) => {
    const movie = req.body;
    const added = moviesModel.addMovie(movie);
    
    if (added) {
        res.status(201).json({ "message": "created succesfully" });
    } else {
        res.status(400).json({ "message": "Bad Request" });
    }
    
}

export default {
    addMovie
}