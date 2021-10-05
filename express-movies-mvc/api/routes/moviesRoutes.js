import express from "express";
import postController from "../controllers/movies/postController.js";
import getController from "../controllers/movies/getController.js";
import putController from "../controllers/movies/putController.js";
import deleteController from "../controllers/movies/deleteController.js";

const moviesRoutes = express.Router();

moviesRoutes.get('/', getController.getAllMovies);
moviesRoutes.get('/:id', getController.getMovieById);

moviesRoutes.post('/', postController.addMovie);

moviesRoutes.put('/:id', putController.modifyMovie);

moviesRoutes.delete('/:id', deleteController.deleteMovie);

export default moviesRoutes;

