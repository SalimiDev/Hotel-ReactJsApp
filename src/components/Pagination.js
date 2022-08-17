import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActiveLink from '../helpers/ActiveLink';
import { useParams } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { paginatedAction } from '../redux/actions/paginatedAction';

const Pagination = ({ data }) => {
    // States
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    //Create current page posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPagePosts = data?.slice(indexOfFirstPost, indexOfLastPost);

    //create numbers of pages list
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    //Handle to change page of post
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    //Get page mumber from url to set current page when page rendered
    const { pageUrlNumber } = useParams();
    useEffect(() => {
        setCurrentPage(pageUrlNumber);
    }, []);

    //Send new page data(current page data) to the store
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(paginatedAction(currentPagePosts));
    }, [currentPage, data]);

    return (
        <Nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className='page-number'>
                        <ActiveLink onClick={() => paginate(number)} to={`/hillter/blog/page-${number}`} bgcolor='#e7c130'>
                            {number}
                        </ActiveLink>
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
        }
    }
`;
