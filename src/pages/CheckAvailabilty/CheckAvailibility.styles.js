import styled from 'styled-components';

//?top search box styles
export const SearchBoxContainer = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: center;

    .searchbox-form {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        user-select: none;
        z-index: 50;

        @media (min-width: 768px) {
            width: 720px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            column-gap: 10px;
        }
        @media (min-width: 992px) {
            width: 940px;
            column-gap: 0px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }

        .date-input_container,
        .customers-field {
            padding: 10px;
            border: solid 1px #dae1e7;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;

            @media (min-width: 768px) {
                width: 49%;
            }

            @media (min-width: 992px) {
                width: 33.33333%;
            }
            @media (min-width: 1200px) {
                width: 28.333333%;
            }

            //date-picker input container
            .rmdp-container {
                width: 100%;
            }

            .input-label {
                font-size: 12px;
                font-weight: 700;
                color: #989898;
                text-transform: uppercase;
            }

            input[type='text'] {
                border: none;
                padding: 0;
                font-weight: 400;
                font-size: 15px;
                cursor: pointer;
            }
        }

        .customers-field {
            position: relative;
            cursor: pointer;

            .customers {
                line-height: 40px;
                font-size: 15px;
            }
        }

        #popup-field {
            width: 80%;
            top: 90px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            background-color: white;
            border: solid 1px #ddd;
            box-shadow: 1px 2px 3px rgb(0 0 0 / 10%);
            z-index: 9999;

            .adults-field_container,
            .children-field_container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px;

                .counter {
                    transition: all 0.3s ease;
                    color: #e7c130;
                    opacity: 0;
                }

                &:hover {
                    .counter {
                        opacity: 1;
                    }
                }

                input {
                    font-size: 15px;
                    font-family: 'Montserrat';
                }
            }

            .adults-field_container {
                background-color: #f1f1f1;
            }
        }

        .button-container {
            @media (min-width: 768px) {
                width: 49%;
                margin: auto;
            }

            @media (min-width: 992px) {
                width: 33.33333%;
            }
            @media (min-width: 1200px) {
                width: 15%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: solid 1px #ddd;
                box-shadow: 1px 2px 3px rgb(0 0 0 / 10%);
            }

            button {
                width: 100%;
                border-radius: 3px;

                @media (min-width: 1200px) {
                    width: 80%;
                    height: fit-content;
                    display: flex;
                    justify-content: center;
                    font-size: 11px;
                }
            }
        }
    }
`;

//? filter box styles
export const FilterBoxContainer = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: center;
    .filterbox_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 1em;
        border-radius: 1px;
        background-color: #fff;
        border: solid 1px #dae1e7;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);

        @media (min-width: 768px) {
            width: 720px;
            flex-direction: row;
            justify-content: space-between;
        }
        @media (min-width: 992px) {
            width: 940px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }
    }

    .filterbox_box-wrap:not(:last-child) {
        margin-bottom: 1em;
        padding-bottom: 1em;
        border-bottom: solid 1px #eeeeee;

        @media (min-width: 768px) {
            border: none;
            margin: 0;
            padding: 0;
        }
    }

    .filterbox_box-wrap {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .filterbox_box-wrap .filterbox_label {
        flex-grow: 1;
        display: block;
        margin-right: 7px;
        line-height: 1.4;
        font-weight: 700;
    }

    .filterbox_box-wrap select {
        width: auto !important;
        font-size: 15px;
        font-family: 'Montserrat';
        color: #495057;
        border: none;
        line-height: 1.4;
        cursor: pointer;
    }

    .filterbox_showprice {
        display: flex;
        column-gap: 10px;
        list-style: none;

        @media (max-width: 450px) {
            flex-direction: column;
        }
    }

    .filterbox_showprice-item a {
        color: #888;
        font-size: 15px;
        cursor: pointer;
        text-decoration: none;
    }

    .filterbox_showprice-item a:hover,
    .filterbox_showprice-item a:focus {
        color: #1a1a1a;
    }
`;

//? filter box styles
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 992px) {
        flex-direction: row;
        column-gap: 30px;
        .main-content {
            width: 66.666666%;
            order: 0;
        }
        .sidebar-content {
            width: 33.33333%;
            order: 1;
        }
    }
`;
