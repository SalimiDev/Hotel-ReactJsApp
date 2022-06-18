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
            & button {
                order: 5;
                width: fit-content;
            }
        }
    }
`;

export const styledContainer = roomNumber => {
    switch (roomNumber) {
        //?/***************ROOM-1*****************
        case 1:
            const room1 = styled(DefaultRoomStyle)``;
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
        default:
            const roomDef = styled(DefaultRoomStyle)`
                background-color: green;
            `;
            return roomDef;
    }
};
