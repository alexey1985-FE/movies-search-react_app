import React, {useState} from 'react';
import {createQueryString} from "../../utils/query";
import {useHistory} from "react-router-dom";

export function SearchForm() {
    const [searchText, setSearchText] = useState()
    const history = useHistory()

    const onChange = e => {
        setSearchText(e.target.value)
    };

    const onSubmit = e => {
        e.preventDefault();
        const query = createQueryString({s: searchText})
        history.push({search: query})
    };

    return (
        <div className="mt-5 mb-10 text-center">
            <div className="container">
                <form id="searchForm" onSubmit={onSubmit} className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        name="searchText"
                        placeholder="Search movies ..."
                        onChange={onChange}
                    />
                    <button type="submit" className="btn btn-primary btn-bg mt-3 mb-10">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchForm;
