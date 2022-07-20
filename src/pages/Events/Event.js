import React from 'react';
import styles from './Event.module.scss';
import { eventData } from '../../data/eventData';
import CountDownDate from '../../components/CountDownDate';

const Event = () => {
    const counterStyle = {
        bgColor: 'rgba(52, 74, 113, 0.85)',
        color: '#fff',
        size: 50,
    };

    const targetDateCreater = id => {
        switch (id) {
            case 1:
                return <CountDownDate counterStyle={counterStyle} targetKey={id} targetDate={25 * 24 * 60 * 60 * 1000} />;
            case 2:
                return <CountDownDate counterStyle={counterStyle} targetKey={id} targetDate={14 * 24 * 60 * 60 * 1000} />;
            case 3:
                return <CountDownDate counterStyle={counterStyle} targetKey={id} targetDate={50 * 24 * 60 * 60 * 1000} />;
            case 4:
                return <CountDownDate counterStyle={counterStyle} targetKey={id} targetDate={35 * 24 * 60 * 60 * 1000} />;
            default:
                return <CountDownDate counterStyle={counterStyle} targetDate={90 * 24 * 60 * 60 * 1000} />;
        }
    };

    return (
        <div className={styles.events}>
            {eventData.map(event => (
                <article key={event.id} className={styles.event_article}>
                    <div className={styles.image_container}>
                        <a href={`/hillter/event/${event.id}`}>
                            <img src={event.image} alt={event.title} />
                        </a>
                        <div className={styles.remain_time}>
                            {targetDateCreater(event.id)}
                        </div>
                    </div>

                    <div className={styles.event_header}>
                        <span className={styles.event_date}>
                            <strong>{event.date.day}</strong>
                            <span>{event.date.month}</span>
                        </span>
                        <div className={styles.title_container}>
                            <h2>
                                <a href='/#'>{event.title}</a>
                            </h2>

                            <p>
                                <span>{event.time}</span> - <span>{event.location}</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.event_textContent}>
                        <p>{event.text_content_1}</p>
                        <p>{event.text_content_2}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Event;
