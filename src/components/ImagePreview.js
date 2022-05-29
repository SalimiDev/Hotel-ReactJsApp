import React, { useEffect } from 'react';
//Icons
import { ArrowForward, ArrowBack } from '@mui/icons-material';
//Styles
import styled, { css } from 'styled-components';

const ImagePreviewContainer = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    inset: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99999;
`;

const Figure = styled.figure`
    position: relative;
    margin: 0 10px;
    padding: 30px 30px 0px 30px;
    background-color: #1f232b;
    & figcaption {
        padding: 30px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        color: #fff;
    }
`;

const DirectionButton = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 99999;

    &:hover {
        color: #e7c130;
        border-color: #e7c130;
    }

    ${props =>
        props.right &&
        css`
            right: 15px;
        `}
    ${props =>
        props.left &&
        css`
            left: 15px;
        `}
`;

const CloseButton = styled(DirectionButton)`
    width: 20px;
    height: 20px;
    top: 7px;
    right: 7px;
    font-size: 20px;
    border: none;
    background-color: #7c7c7c;

    &:hover {
        color: #fff;
        background-color: #e7c130;
    }
`;

const ImagePreview = ({ data }) => {
    const { toggleActive, setToggleActive, gallery, currentIndex,setCurrentIndex } = data;

    //handle to set or remove scroll bar
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        toggleActive ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');
    }, [toggleActive]);

    //handle to move in slides
    const galleryLength = gallery.length;
    const nextSlide = () => {
        setCurrentIndex(currentIndex === galleryLength - 1 ? 0 : currentIndex + 1);
    };
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? galleryLength - 1 : currentIndex - 1);
    };

    return (
        toggleActive && (
            <ImagePreviewContainer>
                <Figure>
                    {gallery.map((src, index) => 
                        index === currentIndex && 
                    <>
                        <img key={index} src={src} alt='gallery' />
                        <figcaption>This Is Slide Number  {currentIndex+1}</figcaption>
                    </>
                    )}
                    <CloseButton onClick={() => setToggleActive(false)}>X</CloseButton>
                </Figure>
                <DirectionButton right onClick={nextSlide}>
                    <ArrowForward />
                </DirectionButton>
                <DirectionButton left onClick={prevSlide}>
                    <ArrowBack />
                </DirectionButton>
            </ImagePreviewContainer>
        )
    );
};

export default ImagePreview;
