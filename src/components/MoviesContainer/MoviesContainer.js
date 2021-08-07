import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import Spinner from '../layout/Spinner';
import { useMovies } from '../../hooks/useMovies';
import Pagination from '../Pagination/Pagination';

export function MoviesContainer() {
	const { loading, movies } = useSelector(state => state.movies);

	const totalResults = +movies.totalResults;

	useMovies();

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<div className="row">
				{movies.Response === 'True' && movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />)}
			</div>
			{!!totalResults && <Pagination count={totalResults} />}
		</>
	);
}

export default MoviesContainer;
