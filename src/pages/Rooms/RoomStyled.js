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

//**********Room Styles***********

export const styledContainer = roomNumber => {
    switch (roomNumber) {
        case 1:
            const room1 = styled.div``;
            return room1;
        case 2:
            const room2 = styled.div`
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
                            width: 40%;
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
            return room2;
        default:
            const roomDef = styled.div`
                background-color: green;
            `;
            return roomDef;
    }
};
