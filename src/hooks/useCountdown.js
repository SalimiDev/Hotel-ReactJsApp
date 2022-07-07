import { useEffect, useState } from 'react';

const useCountdown = targetDate => {
    //counting down from this time
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = countDown => {
    // calculate time left
    const day = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hour = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((countDown % (1000 * 60)) / 1000);

    const days = day < 10 ? '0' + day : day;
    const hours = hour < 10 ? '0' + hour : hour;
    const minutes = minute < 10 ? '0' + minute : minute;
    const seconds = second < 10 ? '0' + second : second;

    return [days, hours, minutes, seconds];
};

export { useCountdown };
