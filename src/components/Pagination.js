import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//router
import { Link, useSearchParams, useLocation } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { paginatedAction } from '../redux/actions/paginatedAction';

const Pagination = ({ data, page }) => {
    // States
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    //Create current page posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPagePosts = data?.slice(indexOfFirstPost, indexOfLastPost);

    //Create numbers of pages list
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    //Handle to change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    //Send new page data(current page data) to the redux store
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(paginatedAction(currentPagePosts));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, data]);

    //Handle Link address
    const [searchParams] = useSearchParams();
    const SearchQuery = searchParams.get('q');
    const PageNumberQuery = Number(searchParams.get('page'));
    const location = useLocation().pathname;
    const linkAddress = pageNumber => {
        return location === '/hillter/search'
            ? `/hillter/${page.name}?q=${SearchQuery}&page=${pageNumber}`
            : `/hillter/${page.name}?page=${pageNumber}`;
    };

    //Get page number from url to set current page when page rendered
    useEffect(() => {
        setCurrentPage(PageNumberQuery || 1);
    }, [PageNumberQuery]);

    return (
        <Nav>
            <ul>
                {pageNumbers.map(pageNumber => (
                    <li key={pageNumber} className='page-number'>
                        <Link
                            className={pageNumber === PageNumberQuery ? 'activeTab' : ''}
                            to={linkAddress(pageNumber)}
                            onClick={() => paginate(pageNumber)}
                            bgcolor='#e7c130'>
                            {pageNumber}
                        </Link>
                    </li>
                ))}
            </ul>
        </Nav>
    );
};

export default Pagination;

//Pagination number styles
const Nav = styled.nav`
    margin: 20px 0;

    ul {
        display: flex;
        column-gap: 10px;
        list-style: none;

        & .page-number {
            transition: all 0.3s ease;
            cursor: pointer;

            & a {
                display: grid;
                place-content: center;
                color: white;
                text-decoration: none;
                width: 40px;
                height: 35px;
                background-color: #344a71;

                &:hover {
                    background-color: rgba(52, 74, 113, 0.85);
                }
            }
            & .activeTab {
                background-color: #e7c130;
            }
        }
    }
`;
