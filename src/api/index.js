import {paginationCount} from "../config/ui";
import movies_id from "../movies_id";
import {axios} from "../config/axios";

export const getDefaultMovies = async page => {
    const start = paginationCount * (page - 1);
    const end = start + paginationCount;

    const promises = movies_id.slice(start, end)

    const results = await Promise.allSettled(promises.map(id => axios.get(`&i=${id}`)))
    const movies = results.reduce((acc, curr) => {
        if (curr.status === 'rejected') {
            return acc
        }

        return [...acc, curr.value.data]
    }, [])

    return {
        Response: "True",
        Search: movies,
        totalResults: movies_id.length
    }
}