import React from 'react';
import styles from '../styles/pages/Event.module.scss';
import { eventData } from '../data/eventData';
import CountDownDate from '../components/CountDownDate';

const Event = () => {
    const targetDate = 14 * 24 * 60 * 60 * 1000;

    return (
        <div className={styles.event}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>EVENT</h2>
                        <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </header>
            <div className={styles.contents_container}>
                {eventData.map(event => (
                    <article key={event.id} className={styles.imagee}>
                        <a href={`/hillter/event/${event.id}`} className={styles.imagee}>
                            <img src={event.image} alt={event.title} />
                            <div className={styles.remain_date}>
                                <CountDownDate
                                    targetDate={targetDate}
                                    size={50}
                                    bgColor={'rgba(52, 74, 113, 0.85)'}
                                    color={'#fff'}
                                />
                            </div>
                        </a>
                    </article>
                ))}
            </div>
            <aside className={styles.sidebar}></aside>
        </div>
    );
};

export default Event;
