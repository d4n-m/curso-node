import express from "express";
import postController from "../controllers/movies/postController.js";
import getController from "../controllers/movies/getController.js";

const moviesRoutes = express.Router();

moviesRoutes.get('/', getController.getAllMovies);
moviesRoutes.get('/:id', getController.getMovieById);

moviesRoutes.post('/', postController.addMovie);

export default moviesRoutes;

