import moviesModel from '../../models/moviesModel.js';

const deleteMovie = (req, res) => {

    const id = req.params.id;
    const deleted = moviesModel.deleteMovie(id);
    
    if (deleted) {
        res.status(200).json({ "message": "Deleted succesfully" });
    } else {
        res.status(204).json({ "message": "No content" });
    }
    
}

export default {
    deleteMovie
};