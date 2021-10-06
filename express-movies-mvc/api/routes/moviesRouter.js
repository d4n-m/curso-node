// import express from "express";
import Router from "express";
import postController from "../controllers/movies/postController.js";
import getController from "../controllers/movies/getController.js";
import putController from "../controllers/movies/putController.js";
import deleteController from "../controllers/movies/deleteController.js";
import authUser from '../../middlewares/authHandler.js';

// const moviesRoutes = express.Router();
const router = Router();

router.use(authUser);

router.route('/')
    .get(getController.getAllMovies)
    .post(postController.addMovie)

router.route('/:id')
    .get(getController.getMovieById)
    .put(putController.modifyMovie)
    .delete(deleteController.deleteMovie)

// moviesRoutes.get('/', getController.getAllMovies);
// moviesRoutes.get('/:id', getController.getMovieById);
// moviesRoutes.post('/', postController.addMovie);
// moviesRoutes.put('/:id', putController.modifyMovie);
// moviesRoutes.delete('/:id', deleteController.deleteMovie);
// export default moviesRoutes;

export default router;

