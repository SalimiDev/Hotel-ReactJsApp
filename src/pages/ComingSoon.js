import styled from 'styled-components';
import bg_comingsoon from '../assets/images/bg-comingsoon.jpg';
import logo from '../assets/logo/logo-footer.png';
import { Link } from 'react-router-dom';
import '../styles/utils/_components.scss';
//components
import CountDownDate from '../components/CountDownDate';
import SocialIcons from '../components/SocialIcons';

const ComingSoon = () => {
    //Set times to left
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

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
                <div className='timer-count'>
                    <CountDownDate targetDate={dateTimeAfterThreeDays} />
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
        & .timer-count {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 10px;
            padding: 0 15px;
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
