import movies from '../../datos/movies.js'

class MoviesModel {
    getMovies(){
        return movies;
    }

    getMovieById(id){
        const movie = movies.filter(element => element.id == id);
        return movie;
    }

    addMovie(movie){
        try {
            movies.push(movie);
            return true;
        } catch {
            return false;
        }
    }
}

export default new MoviesModel();