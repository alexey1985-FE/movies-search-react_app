import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchDefaultMovies, fetchMovies} from "../store/actions/searchActions";
import {useLocation} from "react-router";
import {getQueryObject} from "../utils/query";

export const useMovies = () => {
    const dispatch = useDispatch()
    const {search} = useLocation()

    useEffect(() => {
        const queryObject = getQueryObject(search)
        if (queryObject.s) {
            dispatch(fetchMovies(search.replace('?', '&')))
        } else {
            dispatch(fetchDefaultMovies(queryObject.page))
        }
    }, [dispatch, search])
}