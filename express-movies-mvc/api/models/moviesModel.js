import movies from '../../data/movies.js'

class MoviesModel {
    getMovies() {
        return movies;
    }

    getMovieById(id) {
        const movie = movies.filter(element => element.id == id);
        return movie;
    }

    addMovie(movie) {
        try {
            movies.push(movie);
            return true;
        } catch {
            return false;
        }
    }

    modifyMovie(id, movie) {
        const idArray = movies.findIndex(element => element.id == id);
        if (idArray < 0) {
            return false;
        }
        else {
            movies.splice(idArray, 1, movie);
            return true;
        }
    }

    deleteMovie(id) {
        const idArray = movies.findIndex(element => element.id == id);
        if (idArray < 0) {
            return false;
        }
        else {
            movies.splice(idArray, 1,);
            return true;
        }
    }
}

export default new MoviesModel();