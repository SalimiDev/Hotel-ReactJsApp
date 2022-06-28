import { useState, useEffect } from 'react';
import styles from '../styles/layout/TeamCounterBanner.module.scss';
import CountUp from 'react-countup';

const TeamCounterBanner = () => {
    //Handle to get page vertical offset and counting in specific position
    const [offset, setOffset] = useState(0);
    let [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll, { passive: true });
        parseInt(offset) > 680 && setStartCount(true);
    }, [offset]);

    return (
        <div className={styles.counter_banner}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h2>TEAM MEMBER</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className={styles.counter_container}>
                    <div className={styles.counter}>
                        <span>{(startCount && <CountUp end={768} duration={4} />) || 768}</span>
                        <span>GUEST STAY</span>
                    </div>
                    <div className={styles.counter}>
                        <span>{(startCount && <CountUp end={632} duration={4} />) || 632}</span>
                        <span>BOOK ROOM</span>
                    </div>
                    <div className={styles.counter}>
                        <span>{(startCount && <CountUp end={1024} duration={4} />) || 1024}</span>
                        <span>MEMBER STAY</span>
                    </div>
                    <div className={styles.counter}>
                        <span>{(startCount && <CountUp end={256} duration={4} />) || 256}</span>
                        <span>MEMBER STAY</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCounterBanner;
