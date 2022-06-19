import styled from 'styled-components';
import roomsCover from '../../assets/images/rooms-cover.jpg';

//**********Rooms Top Banner Styles***********

export const TopBanner = styled.div`
    position: relative;
    width: 100%;
    height: 342px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: -84px;
    margin-bottom: -45px;
    padding-top: 100px;
    background-image: url(${roomsCover});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    overflow: hidden;
    & h2 {
        color: white;
        font: 700 36px 'Montserrat';
    }
    & p {
        color: white;
        font: 16px 'Hind';
    }
`;

//?/***************Room Styles*****************
const DefaultRoomStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0 15px;

    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1200px;
    }

    .room-wrapper {
        display: flex;
        flex-direction: column;
        column-gap: 30px;
        margin-bottom: 50px;

        @media (min-width: 992px) {
            flex-direction: row;
            &:nth-child(even) {
                flex-direction: row-reverse;
            }
        }
        @media (min-width: 1200px) {
            align-items: center;
        }

        & .imgContainer {
            margin-bottom: 40px;

            @media (min-width: 992px) {
                width: 56.6667%;
            }
            @media (min-width: 1200px) {
                width: 66.6667%;
            }
        }

        & .textSection {
            display: flex;
            flex-direction: column;
            row-gap: 10px;

            @media (min-width: 992px) {
                width: calc(43.3333% - 1px);
            }
            @media (min-width: 1200px) {
                width: calc(33.3333% - 1px);
            }
            & h2 {
                order: 2;
                color: inherit;
                font: 700 26px 'Montserrat';
                text-transform: uppercase;
                @media (min-width: 992px) {
                    font-size: 30px;
                }
                @media (min-width: 1200px) {
                    font-size: 36px;
                }

                & a {
                    text-decoration: none;
                }
            }

            & .price {
                order: 3;
                color: #333333;
                font: 14px 'Montserrat';
                line-height: 20px;
                text-transform: uppercase;
                margin: 0;
            }

            & .descrip {
                margin-bottom: 30px;
                margin-top: 0;
                order: 4;
            }
            .btnContainer {
                order: 5;
                & button {
                    width: fit-content;
                }
            }
        }
    }
`;

export const styledContainer = roomNumber => {
    switch (roomNumber) {
        //?/***************ROOM-1*****************
        case 1:
            const room1 = styled.div`
                padding: 0 15px;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                justify-content: center;
                margin: auto;
                @media (min-width: 768px) {
                    width: 750px;
                }
                @media (min-width: 992px) {
                    width: 970px;
                }
                @media (min-width: 1200px) {
                    width: 1200px;
                }
                .room-wrapper {
                    display: flex;
                    flex-direction: column;
                    row-gap: 14px;
                    margin-bottom: 60px;
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
                    & .btnContainer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-top: 1px solid #e4e4e4;
                        border-bottom: 1px solid #e4e4e4;
                        & .room1Price {
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
            return room1;

        //?/***************ROOM-2*****************
        case 2:
            const room2 = styled(DefaultRoomStyle)``;
            return room2;

        //?/***************ROOM-3*****************
        case 3:
            const room3 = styled(DefaultRoomStyle)`
                .room-wrapper {
                    position: relative;

                    @media (min-width: 482px) {
                        margin-bottom: 0;
                        flex-direction: column;
                    }

                    @media (min-width: 992px) {
                        margin-bottom: 50px;
                        &:nth-child(even) {
                            flex-direction: column;
                        }
                        @media (min-width: 1200px) {
                            align-items: flex-start;
                        }
                        .imgSmall {
                            position: absolute;
                            height: 256px;
                            width: 230px;
                            bottom: 23px;
                            right: 75px;
                            border: 4px solid rgb(231, 193, 48);
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                    }
                    & .imgContainer {
                        width: 100%;

                        img {
                            width: 100%;
                            height: 39vw;
                            @media (min-width: 768px) {
                                height: 297px;
                            }

                            @media (min-width: 992px) {
                                height: 388px;
                            }
                            @media (min-width: 1200px) {
                                width: 1170px;
                                height: 388px;
                            }
                        }
                    }

                    & .textSection {
                        @media (min-width: 482px) {
                            position: relative;
                            width: 85%;
                            top: -90px;
                            background-color: white;
                            margin: auto;
                            padding: 20px 30px 0 30px;
                        }

                        @media (min-width: 768px) {
                            width: 640px;
                            height: 257px;
                        }
                        @media (min-width: 992px) {
                            width: 500px;
                            height: 288px;
                            margin: 0;
                            left: 60px;
                        }
                        @media (min-width: 1200px) {
                            width: 730px;
                            height: 264px;
                            margin: 0;
                        }
                        .descrip {
                            margin-bottom: 0;
                        }
                    }
                }

                @media (min-width: 992px) {
                    button {
                        position: relative;
                        margin-top: 10px;
                        &::after {
                            position: absolute;
                            content: '';
                            width: 90px;
                            height: 2px;
                            top: 130px;
                            left: 0;
                            background-color: black;
                        }
                    }
                }
            `;
            return room3;

        //?/***************ROOM-4*****************
        case 4:
            const room4 = styled(DefaultRoomStyle)``;
            return room4;
        //?/***************ROOM-5*****************
        case 5:
            const room5 = styled.div`
                display: flex;
                flex-direction: column;
                row-gap: 30px;
                padding: 0 15px;
                margin: auto;
                .room-wrapper {
                    position: relative;
                    & .textSection {
                        position: absolute;
                        bottom: 0px;
                        left: 10px;
                        color: white;

                        & .descrip,
                        button {
                            display: none;
                        }
                        & .imgContainer {
                        }
                        & h2 {
                            font: 700 15px 'Montserrat';
                            text-transform: uppercase;
                            color: white;
                            & a {
                                text-decoration: none;
                            }
                        }
                        & .price {
                            font: 12px;
                            text-transform: uppercase;
                        }
                    }
                }

                @media (min-width: 482px) {
                    width: 482px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    .room-wrapper {
                        width: 45%;
                        margin: auto;
                        & .textSection {
                            & h2 {
                                font-size: 16px;
                            }
                            & .price {
                                font-size: 13px;
                            }
                        }
                    }
                }
                @media (min-width: 768px) {
                    width: 750px;
                    .room-wrapper {
                        & .textSection {
                            & h2 {
                                font-size: 22px;
                            }
                            & .price {
                                font-size: 16px;
                            }
                        }
                    }
                }
                @media (min-width: 992px) {
                    width: 970px;
                    .room-wrapper:hover {
                        & .textSection {
                            color: inherit;
                            background-color: rgba(255, 255, 255, 0.95);
                            border: 2px solid black;
                            inset: 0 0 0 0;
                            padding: 10px 20px;
                            .descrip,
                            button {
                                display: block;
                            }
                            & h2 {
                                font-size: 30px;
                                color: #333;
                            }
                            & .price {
                                font-size: 18px;
                            }
                        }
                    }
                }
                @media (min-width: 1200px) {
                    width: 1200px;
                    .room-wrapper:hover {
                        & .textSection {
                            padding: 45px;
                            .descrip,
                            button {
                                display: block;
                            }
                            & h2 {
                                font-size: 36px;
                                color: #333;
                            }
                            & .price {
                                font-size: 22px;
                            }
                        }
                    }
                }
            `;
            return room5;
        default:
            const roomDef = styled(DefaultRoomStyle)`
                background-color: green;
            `;
            return roomDef;
    }
};
