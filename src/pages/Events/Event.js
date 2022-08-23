import React from 'react';
import styles from './Event.module.scss';
import CountDownDate from '../../components/CountDownDate';
import { Link } from 'react-router-dom';

const Event = ({ postData }) => {
    const { id, title, image, date, time, location, text_content_1, text_content_2 } = postData;

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
            <article className={styles.event_article}>
                <div className={styles.image_container}>
                    <a href={`/hillter/event/${id}`}>
                        <img src={image} alt={title} />
                    </a>
                    <div className={styles.remain_time}>{targetDateCreater(id)}</div>
                </div>

                <div className={styles.event_header}>
                    <span className={styles.event_date}>
                        <strong>{date.day}</strong>
                        <span>{date.month}</span>
                    </span>
                    <div className={styles.title_container}>
                        <h2>
                            <Link to={`/hillter/blog/posts/post-details/${title.toLowerCase().replace(/ /g, '_')}`}>
                                {title}
                            </Link>
                        </h2>

                        <p>
                            <span>{time}</span> - <span>{location}</span>
                        </p>
                    </div>
                </div>

                <div className={styles.event_textContent}>
                    <p>{text_content_1}</p>
                    <p>{text_content_2}</p>
                </div>
            </article>
        </div>
    );
};

export default Event;
