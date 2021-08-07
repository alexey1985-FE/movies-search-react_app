import React from 'react';
import ReactPaginate from 'react-paginate';
import {paginationCount} from "../../config/ui";
import {useHistory, useLocation} from "react-router-dom";
import {createQueryString, getQueryObject} from "../../utils/query";

export default function Pagination({count}) {
    const pageCount = Math.ceil(count / paginationCount)
    const {search} = useLocation()
    const history = useHistory()
    const queryObject = getQueryObject(search)
    const currentPage = +(queryObject.page) || 1


    const onChangePage = ({selected}) => {
        const next = selected + 1
        if (next !== currentPage) {
            history.push({search: createQueryString({...queryObject, page: next})})
        }
    };

    return (
        <>
            <ReactPaginate
                previousClassName="page-link"
                nextClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
                initialPage={currentPage - 1}
                pageCount={pageCount}
                onPageChange={onChangePage}
                containerClassName='pagination'
                pageClassName="page-item"
                pageLinkClassName="page-link"/>
        </>
    );
}
