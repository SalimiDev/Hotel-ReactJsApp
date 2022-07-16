import styled from 'styled-components';
import bg_comingsoon from '../assets/images/bg-comingsoon.jpg';
import logo from '../assets/logo/logo-footer.png';
import { Link } from 'react-router-dom';
import '../styles/utils/_components.scss';
//components
import CountDownDate from '../components/CountDownDate';
import SocialIcons from '../components/SocialIcons';
const ComingSoon = () => {
    const targetDate = 20 * 24 * 60 * 60 * 1000;

    return (
        <Section>
            <div className='overlay'></div>
            <div className='container'>
                <Link to='/hillter'>
                    <img className='logo' src={logo} alt='Hillter Logo' />
                </Link>
                <h1 className='title'>COMING SOON</h1>
                <h6>We are working harder!</h6>
                <p>The website will be open</p>
                <div className='remain-date'>
                    <CountDownDate targetDate={targetDate} size={70} color={'#fff'} border={'2px solid white'} />
                </div>

                <div className='social-container'>
                    <h4>Follow Us</h4>
                    <SocialIcons color={'white'} />
                </div>
            </div>
        </Section>
    );
};

export default ComingSoon;

//Styles
const Section = styled.section`
    position: relative;
    background-image: url(${bg_comingsoon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: contain;
    height: 85%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    z-index: 1;

    & .overlay {
        position: absolute;
        inset: 0 0 0 0;
        background-color: rgba(72, 72, 72, 0.5);
        z-index: 2;
    }
    & .container {
        position: relative;
        z-index: 3;
        row-gap: 10px;

        @media (max-width: 320px) {
            width: 100%;
        }

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
                font-size: 32px;
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
                font-size: 22px;
            }
        }

        .remain-date {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 50px 0;
        }

        & .social-container {
            margin: 30px 0;

            & h4 {
                font-family: 'Hind';
                font-size: 20px;
                font-weight: 400;
                color: white;
                margin-bottom: 15px;
            }

            @media (min-width: 600px) {
                font-size: 16px;
            }
            @media (min-width: 768px) {
                font-size: 18px;
            }
        }
    }
`;
