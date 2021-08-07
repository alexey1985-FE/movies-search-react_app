import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {fetchMovie, setLoading} from '../store/actions/searchActions';
import Spinner from '../components/layout/Spinner';

export const Movie = ({match}) => {
    const dispatch = useDispatch();
    const {movie, loading} = useSelector(state => state.movies);
    const history = useHistory()

    const goBack = (e) => {
        e.preventDefault()
        history.goBack()
    }

    useEffect(() => {
        dispatch(fetchMovie(match.params.id));
        dispatch(setLoading());
    }, []);

    return loading ? (
        <Spinner/>
    ) : (
        <div className="container">
            <div className="row">
                <div className="col-md-4 card card-body">
                    <img src={movie.Poster} className="thumbnail" alt="Poster"/>
                </div>
                <div className="col-md-8">
                    <h2 className="mb-4">{movie.Title}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Genre:</strong> {movie.Genre}
                        </li>
                        <li className="list-group-item">
                            <strong>Released:</strong> {movie.Released}
                        </li>
                        <li className="list-group-item">
                            <strong>Rated:</strong> {movie.Rated}
                        </li>
                        <li className="list-group-item">
                            <strong>IMDB Rating:</strong> {movie.imdbRating}
                        </li>
                        <li className="list-group-item">
                            <strong>Director:</strong> {movie.Director}
                        </li>
                        <li className="list-group-item">
                            <strong>Writer:</strong> {movie.Writer}
                        </li>
                        <li className="list-group-item">
                            <strong>Actors:</strong> {movie.Actors}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="card card-body bg-dark my-5 text-light">
                    <div className="col-md-12">
                        <h3>About </h3>
                        {movie.Plot}
                        <hr/>
                        <a
                            href={'https://www.imdb.com/title/' + movie.imdbID}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View on IMDB
                        </a>
                        <a onClick={goBack} className="btn btn-default text-light">
                            Go Back To Search
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
