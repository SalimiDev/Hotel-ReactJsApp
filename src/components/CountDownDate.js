import styled from 'styled-components';
//import useCountDown custom hook
import { useCountdown } from '../hooks/useCountdown';

const CountDownDate = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <TimerContainer className='show-counter'>
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
        </TimerContainer>
    );
};

export default CountDownDate;

//Styles
const TimerContainer = styled.div`
    position: relative;
    width: 368px;
    height: 89px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    border: 2px solid white;

    @media (min-width: 482px) {
        width: 456px;
        height: 112px;
    }
    @media (min-width: 768px) {
        width: 730px;
        height: 127.5px;
    }

    .items-container {
        width: 25%;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        color: white;
        text-transform: uppercase;

        & span {
            font-family: 'Montserrat';
            font-size: 30px;
            line-height: 30px;

            @media (min-width: 768px) {
                font-size: 50px;
            }
        }

        & p {
            font-family: 'Hind';
            font-size: 14px;
            margin: 0;
            @media (min-width: 768px) {
                font-size: 20px;
            }
        }
    }

    #dots {
        font-size: 30px;
    }
`;
