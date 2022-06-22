import styled from 'styled-components';
import bg_404 from '../assets/images/bg-404.jpg';
import logo from '../assets/logo/logo-footer.png';
import { Link } from 'react-router-dom';
import '../styles/utils/_components.scss';

const NotFound = () => {
    return (
        <Section className='notFound'>
            <div className='overlay'></div>
            <div className='container'>
                <Link to='/hillter'>
                    <img className='logo' src={logo} alt='Hillter Logo' />
                </Link>
                <h1 className='title'>404 ERROR</h1>
                <h6>Look like it's empty here!</h6>
                <p>We’re sorry, but the page you were looking for doesn’t exist.</p>
                <div className='search'>
                    <input type='search' placeholder='Search page' />
                    <button className='btn btn-orange btn-md '>SEARCH</button>
                </div>
                <p className='homeLink'>
                    or go back to <Link to='/hillter'>Home Page</Link>
                </p>
            </div>
        </Section>
    );
};

export default NotFound;

const Section = styled.section`
    position: relative;
    background-image: url(${bg_404});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: contain;
    height: 85%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
    z-index: 1;

    & .overlay {
        position: absolute;
        inset: 0 0 0 0;
        background-color: rgba(72, 72, 72, 0.5);
        z-index: 2;
    }
    & .container {
        width: 100%;
        position: absolute;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 10px;

        & .logo {
            max-width: 100%;
            height: auto;
            margin-bottom: 30px;
        }

        & .title {
            color: #fff;
            font-size: 30px;
            font-weight: 700;
            font-family: 'Montserrat';
            margin-bottom: 10px;
            text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
            @media (min-width: 600px) {
                font-size: 60px;
            }
            @media (min-width: 768px) {
                font-size: 80px;
            }
        }

        & h6 {
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            font-family: 'Hind';
            @media (min-width: 600px) {
                font-size: 20px;
            }
            @media (min-width: 768px) {
                font-size: 27px;
            }
        }
        & p {
            color: #fff;
            font-size: 13px;
            font-weight: 400;
            font-family: 'Hind';
            @media (min-width: 600px) {
                font-size: 16px;
            }
            @media (min-width: 768px) {
                font-size: 18px;
            }
        }
        & .search {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            column-gap: 15px;
            margin-top: 10px;
            padding: 0 15px;

            @media (min-width: 600px) {
                flex-direction: row;
            }

            & input {
                width: 100%;
                height: 40px;
                line-height: 40px;
                padding: 0 12px;
                font-size: 12px;
                font-weight: 400;
                font-family: 'Montserrat';
                border: 2px solid #fff;
                vertical-align: middle;
                color: #fff;
                background-color: transparent;
                transition: all 0.3s ease;
                box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

                &::placeholder,
                ::-webkit-input-placeholder {
                    color: #fff;
                }
                &:focus {
                    border-color: #e7c130;
                }

                @media (min-width: 600px) {
                    width: 370px;
                }
            }

            & button {
                width: 120px;
                height: 40px;
                margin-top: 30px;
                box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

                @media (min-width: 600px) {
                    margin-top: 0px;
                }
            }
        }

        & .homeLink {
            font-size: 14px;

            @media (min-width: 600px) {
                font-size: 16px;
            }
            @media (min-width: 768px) {
                font-size: 18px;
            }

            a {
                text-decoration: none;
                color: white;
                font-weight: 700;

                &:hover {
                    color: #e7c130;
                    text-decoration: underline;
                }
            }
        }
    }
`;
