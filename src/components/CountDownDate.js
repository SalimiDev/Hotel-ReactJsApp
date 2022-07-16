import { useEffect } from 'react';
import styled from 'styled-components';
//import useCountDown custom hook
import { useCountdown } from '../hooks/useCountdown';

const CountDownDate = ({ targetDate, size, bgColor, color, border }) => {
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterTarget = NOW_IN_MS + targetDate;
    //Get target time from localStorage
    const getTargetTime = localStorage.getItem('setTargetTime');
    //Check localStorage and if target time does'nt exist , add it to storage
    useEffect(() => {
        !getTargetTime && localStorage.setItem('setTargetTime', dateTimeAfterTarget);
    }, []);

    const [days, hours, minutes, seconds] = useCountdown(Number(getTargetTime));

    return (
        <TimerContainer size={size} bgColor={bgColor} color={color} border={border}>
            <div className='container'>
                <div className='items-container'>
                    <span>{days}</span>
                    <p>Days</p>
                </div>
                <span id='dots'>:</span>
                <div className='items-container'>
                    <span>{hours}</span>
                    <p>Hours</p>
                </div>
                <span id='dots'>:</span>
                <div className='items-container'>
                    <span>{minutes}</span>
                    <p>Minutes</p>
                </div>
                <span id='dots'>:</span>
                <div className='items-container'>
                    <span>{seconds}</span>
                    <p>Seconds</p>
                </div>
            </div>
        </TimerContainer>
    );
};

export default CountDownDate;

//Styles
const TimerContainer = styled.div`
    background-color: ${props => props.bgColor};
    border: ${props => props.border};
    width: fit-content;
    padding: 5px 5px;

    @media (max-width: 320px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .container {
        width: ${props => props.size * 4.5}px;
        height: ${props => props.size * 0.8}px;
        column-gap: ${props => props.size / 10}px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;

        @media (min-width: 482px) {
            width: ${props => props.size * 6.5}px;
            height: ${props => props.size * 1.2}px;
        }
        @media (min-width: 768px) {
            width: ${props => props.size * 8}px;
            height: ${props => props.size * 1.3}px;
        }

        .items-container {
            color: ${props => props.color};
            row-gap: ${props => props.size / 6}px;
            width: 25%;
            display: flex;
            flex-direction: column;
            text-transform: uppercase;

            & span {
                font-size: ${props => props.size / 2.5}px;
                font-family: 'Montserrat';

                @media (min-width: 482px) {
                    font-size: ${props => props.size / 2}px;
                }
                @media (min-width: 768px) {
                    font-size: ${props => props.size / 1.5}px;
                }
            }

            & p {
                font-size: ${props => props.size / 5}px;
                font-family: 'Hind';
                margin: 0;
                @media (min-width: 482px) {
                    font-size: ${props => props.size / 4}px;
                }
                @media (min-width: 768px) {
                    font-size: ${props => props.size / 3.5}px;
                }
            }
        }
        #dots {
            font-size: ${props => props.size / 3}px;
            color: ${props => props.color};
            @media (min-width: 482px) {
                font-size: ${props => props.size / 2}px;
            }
        }
    }
`;
