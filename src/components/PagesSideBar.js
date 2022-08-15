import React, { useState } from 'react';
//styles
import styled from 'styled-components';
//data
import allData from '../data/allData';
//redux
import { useDispatch } from 'react-redux';
import { searchAction, filterAction } from '../redux/actions/searchAction';

const PagesSideBar = () => {
    const dispatch = useDispatch();
    //input search value state
    const [searchedValue, setSearchedValue] = useState('');
    //input error message state
    const [inputError, setInputError] = useState('');

    //handle onClick search button
    const searchHandler = () => {
        searchedValue.trim() && dispatch(searchAction(allData, searchedValue));
        !searchedValue ? setInputError('Please fill out this field.') : setInputError('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <SidebarContainer>
            <div className='search-container'>
                <h4>SEARCH</h4>
                <form>
                    <input type='text' value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
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
                    <li onClick={() => dispatch(filterAction(allData, 'park'))}>Park</li>
                    <li onClick={() => dispatch(filterAction(allData, 'food'))}>Food</li>
                    <li onClick={() => dispatch(filterAction(allData, 'museum'))}>Museum</li>
                    <li onClick={() => dispatch(filterAction(allData, 'golf'))}>Golf</li>
                </ul>
            </div>
            <div className='tags'>
                <h4>TAGS</h4>
                <ul>
                    <li onClick={() => dispatch(filterAction(allData, 'fishing'))}>Fishing</li>
                    <li onClick={() => dispatch(filterAction(allData, 'golf'))}>Golf</li>
                    <li onClick={() => dispatch(filterAction(allData, 'mountain'))}>Mountain</li>
                    <li onClick={() => dispatch(filterAction(allData, 'park'))}>Park</li>
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
