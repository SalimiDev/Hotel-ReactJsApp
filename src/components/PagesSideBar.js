import React from 'react';
import styled from 'styled-components';

const PagesSideBar = () => {
    return (
        <SidebarContainer>
            <div className='search'>
                <h4>SEARCH</h4>
                <form>
                    <input type='text' />
                    <button>SEARCH</button>
                </form>
            </div>
            <div className='categories'>
                <h4>CATEGORIES</h4>
                <ul>
                    <li>Sport</li>
                    <li>Food</li>
                    <li>Hiking</li>
                    <li>Golf</li>
                </ul>
            </div>
            <div className='tags'>
                <h4>TAGS</h4>
                <ul>
                    <li>Sport</li>
                    <li>Food</li>
                    <li>Hiking</li>
                    <li>Golf</li>
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
    .search {
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
                    background-color: #d5af00;
                }

                @media (max-width: 280px) {
                    font-size: 4vw;
                }
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
