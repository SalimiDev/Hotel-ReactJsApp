import styled from 'styled-components';
import roomsCover from '../../assets/images/rooms-cover.jpg';

//**********Rooms Component Styles***********
export const RoomsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    & .banner {
        position: relative;
        top: -84px;
        width: 100%;
        height: 342px;
        display: flex;
        margin-bottom: -45px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 100px;
        background-image: url(${roomsCover});
        object-fit: contain;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        overflow: hidden;
        & h2 {
            color: white;
            font: 700 36px 'Montserrat';
        }
        & p {
            color: white;
            font: 16px 'Hind';
        }
    }

    & .rooms-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media (min-width: 768px) {
            width: 750px;
        }
        @media (min-width: 992px) {
            width: 970px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }
    }
`;

//**********Room Component Styles***********
export const RoomContainer = styled.div`
    padding: 0 15px;
    margin: 20px 0;

    & .room-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 14px;

        @media (min-width: 992px) {
            width: 455px;
        }
        @media (min-width: 1200px) {
            width: 570px;
        }
        & h2 {
            color: inherit;
            font: 700 26px 'Montserrat';
            text-transform: uppercase;

            & a {
                text-decoration: none;
            }
        }

        & .descrip {
            margin: 0;
        }

        & .priceContaienr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #e4e4e4;
            border-bottom: 1px solid #e4e4e4;

            & .price {
                color: #898989;
                font: 14px 'Montserrat';
                line-height: 30px;

                & span {
                    color: #333333;
                    font-size: 26px;
                    font-weight: 700;
                    font-family: 'Montserrat';
                }
            }
        }
    }
`;
