import React from 'react';
import styled from 'styled-components';

const SearchedItem = ({ searchedResult }) => {
    const { title, image, second_title, description, fullName, aboutMe, shortDescrip } = searchedResult || [];

    return (
        <SearchedContainer image={image}>
            <div className='container'>
                <figure className='image-container'>
                    <a href='/'>
                        <div className='image'></div>
                    </a>
                </figure>

                <div className='detail-container'>
                    <a href='/'>
                        <h2>{fullName || title}</h2>
                    </a>
                    <p>{description || second_title || aboutMe || shortDescrip}</p>
                </div>
            </div>
        </SearchedContainer>
    );
};

export default SearchedItem;

//search error message
export const searchError = (
    <div className='error-message' style={{ marginBottom: '50px' }}>
        <h2 style={{ borderBottom: '.5px solid #c2c9d6', paddingBottom: '20px' }}>Nothing Found!</h2>
        <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
    </div>
);

const SearchedContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;

    .container {
        width: 100%;
        @media (min-width: 768px) {
            display: flex;
        }

        & .image-container {
            width: 100%;
            height: 55vw;
            margin-bottom: 15px;
            @media (min-width: 768px) {
                width: 30%;
                height: 160px;
            }
            .image {
                width: 100%;
                height: 100%;
                background-image: url(${p => p.image});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            }
        }

        .detail-container {
            height: fit-content;
            display: flex;
            flex-direction: column;

            @media (min-width: 768px) {
                width: 70%;
                margin-left: 15px;
            }

            & h2,
            p {
                color: #333;
            }

            & h2 {
                font-size: 20px;
                text-transform: uppercase;
                transition: all 0.3s ease;

                &:hover {
                    color: #e7c130;
                }
            }

            a {
                text-decoration: none;
            }
        }
    }
`;
