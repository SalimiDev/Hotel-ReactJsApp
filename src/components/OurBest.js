import React from 'react';
import styles from '../styles/layout/OurBest.module.scss';
import ourBest from '../assets/images/ourBest.jpg';
import { CoffeeMaker, Mic, Call, PlayCircleOutline, AccessTime, HourglassTop } from '@mui/icons-material';

const OurBest = () => {
    return (
        <section className={styles.ourBest}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <div className={styles.textContent}>
                        <h2>OUR BEST</h2>
                        <p>
                            One of Catalina Island’s best-loved hotels, Hotel Vista Del Mar is recognized as one of Avalon’s
                            leading hotels with gracious island hospitality, thoughtful amenities and distinctive .
                        </p>
                    </div>
                    <div className={styles.amenities}>
                        <ul className={styles.leftList}>
                            <li>
                                <i><CoffeeMaker /></i>
                                <p> Coffee maker</p>
                            </li>
                            <li>
                                <i><Mic /></i>
                                <p>Cable/satellite TV channels</p>
                            </li>
                            <li>
                                <i><Call /></i>
                                <p>Oversized work desk</p>
                            </li>
                        </ul>
                        <ul className={styles.rightList}>
                            <li>
                                <i><PlayCircleOutline /></i>
                                <p>25 inch or larger TV</p>
                            </li>
                            <li>
                                <i><HourglassTop /></i>
                                <p>AM/FM clock radio</p>
                            </li>
                            <li>
                                <i><AccessTime /></i>
                                <p>24-hour Concierge service</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <figure className={styles.imageContainer}>
                    <img src={ourBest} alt='Our Best' />
                </figure>
            </div>
        </section>
    );
};

export default OurBest;
