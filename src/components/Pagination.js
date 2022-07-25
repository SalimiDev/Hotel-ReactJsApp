import React from 'react';
import ActiveLink from '../helpers/ActiveLink';
import styled from 'styled-components';

const Pagination = ({ pageNumbers, paginate }) => {
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
