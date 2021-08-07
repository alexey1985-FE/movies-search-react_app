import SearchForm from '../components/SearchForm/SearchForm';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';

function Landing() {

    return (
        <div className="container">
            <SearchForm/>
            <MoviesContainer/>
        </div>
    );
}

export default Landing;
