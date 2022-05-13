import React from 'react';
import styles from '../styles/layout/RoomsAndRates.module.scss';
import { roomsData } from '../data/roomsData';

const RoomsAndRates = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h2>ROOMS & RATES</h2>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div className={styles.roomsContainer}>
                {roomsData.slice(0, 4).map(room => (
                    <div className={styles.roomItems}>
                        <img src={`${room.image}`} alt={`${room.title}`} />
                        <div className={styles.lable}>
                            <h2>{room.title}</h2>
                            <p>
                                <span>${room.price}</span>/days
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoomsAndRates;
