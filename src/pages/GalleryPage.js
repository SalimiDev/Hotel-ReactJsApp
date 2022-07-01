import React from 'react';
import styled from 'styled-components';
import galleryBanner from '../assets/images/galleryPage-banner.jpg';
//Component
import Gallery from '../components/Gallery';

const GalleryPage = () => {
    return (
        <MainContainer className='galleryPage'>
            <header>
                <div className='topBanner'>
                    <div className='title'>
                        <h2>Gallery</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </header>

            <div className='galleryContainer'>
                <Gallery />
            </div>
        </MainContainer>
    );
};

export default GalleryPage;

//Styles

const MainContainer = styled.div`
    width: 100%;
    & .topBanner {
        position: relative;
        width: 100%;
        height: 342px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url(${galleryBanner});
        background-position: center center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: contain;
        top: -84px;
        margin-bottom: -45px;
        padding-top: 100px;
        overflow: hidden;
        overflow-anchor: none;
        z-index: 1;

        &::after {
            position: absolute;
            content: '';
            inset: 0;
            background-color: rgba(68, 68, 68, 0.5);
            z-index: 2;
        }

        & .title {
            position: absolute;
            text-align: center;
            z-index: 3;
            & h2 {
                color: #fff;
                font: 700 2.25rem 'Montserrat';
            }
            & p {
                color: #fff;
                font: 16px 'Hind';
            }
        }
    }
`;
