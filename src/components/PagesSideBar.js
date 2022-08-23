import React, { useState } from 'react';
//styles
import styled from 'styled-components';
//router
import { useNavigate, useLocation } from 'react-router-dom';

const PagesSideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    //input search value state
    const [searchedKeyWord, setSearchedKeyWord] = useState('');
    //input error message state
    const [inputError, setInputError] = useState('');

    //handle search button onClick
    const searchHandler = () => {
        searchedKeyWord.trim() && navigate(`/hillter/search?q=${searchedKeyWord}`);
        !searchedKeyWord ? setInputError('Please fill out this field.') : setInputError('');
        location === '/hillter/search/' && window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    //handle filtering data with category and tag
    const filterHandler = filterKeyWord => {
        navigate(`/hillter/search?q=${filterKeyWord}`);
    };

    return (
        <SidebarContainer>
            <div className='search-container'>
                <h4>SEARCH</h4>
                <form>
                    <input type='text' value={searchedKeyWord} onChange={e => setSearchedKeyWord(e.target.value)} />
                    <button type='button' onClick={searchHandler}>
                        SEARCH
                    </button>
                </form>
                <span className='error-message'>
                    <p>{inputError}</p>
                </span>
            </div>
            <div className='categories'>
                <h4>CATEGORIES</h4>
                <ul>
                    <li onClick={() => filterHandler('park')}>Park</li>
                    <li onClick={() => filterHandler('food')}>Food</li>
                    <li onClick={() => filterHandler('museum')}>Museum</li>
                    <li onClick={() => filterHandler('golf')}>Golf</li>
                </ul>
            </div>
            <div className='tags'>
                <h4>TAGS</h4>
                <ul>
                    <li onClick={() => filterHandler('fishing')}>Fishing</li>
                    <li onClick={() => filterHandler('golf')}>Golf</li>
                    <li onClick={() => filterHandler('mountain')}>Mountain</li>
                    <li onClick={() => filterHandler('park')}>Park</li>
                </ul>
            </div>
        </SidebarContainer>
    );
};

export default PagesSideBar;

const SidebarContainer = styled.div`
    & h4 {
        margin-bottom: 20px;
    }
    .search-container {
        height: 110px;
        margin-bottom: 30px;

        & form {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            & input {
                width: inherit;
            }

            & button {
                width: 25%;
                position: absolute;
                letter-spacing: 1px;
                color: #000;
                margin: 3px 4px;
                padding: 8px 0px;
                background-color: #e7c130;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                    background-color: #ffce14;
                }

                @media (max-width: 280px) {
                    font-size: 4vw;
                }
            }
        }
        & .error-message {
            p {
                font-family: 'Montserrat';
                margin-top: 4px;
                color: #d93025;
            }
        }
    }

    .categories {
        margin-bottom: 30px;

        & ul {
            list-style: none;
            & li {
                transition: all 0.3s ease;
                cursor: pointer;
                &:hover {
                    color: #e7c130;
                }
            }
        }
    }

    .tags {
        margin-bottom: 30px;

        & ul {
            display: flex;
            flex-wrap: wrap;
            column-gap: 10px;
            row-gap: 10px;
            list-style: none;

            & li {
                color: black;
                padding: 5px 10px;
                border: 2px solid black;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                    background-color: #344a71;
                    color: white;
                    border-color: #344a71;
                }
            }
        }
    }
`;
