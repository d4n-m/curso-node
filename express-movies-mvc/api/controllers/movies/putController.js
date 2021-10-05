import moviesModel from '../../models/moviesModel.js';


const modifyMovie = (req, res) => {

    const id = req.params.id;
    const movie = req.body;
    const modified = moviesModel.modifyMovie(id, movie);
    
    if (modified) {
        res.status(200).json({ "message": "Updated succesfully" });
    } else {
        res.status(204).json({ "message": "No content" });
    }
    
}

export default {
    modifyMovie
}