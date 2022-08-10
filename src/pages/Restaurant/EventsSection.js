import React from 'react';
import styles from './EventsSection.module.scss';
import { Link } from 'react-router-dom';
//Icon
import { CalendarMonthOutlined } from '@mui/icons-material';
//Data
import { blogData } from '../../data/blogData';

const EventsSection = () => {
    return (
        <div className={styles.events_banner}>
            <div className={styles.content_container}>
                <section className={styles.left_column}>
                    <span className={styles.date_icon}>
                        <CalendarMonthOutlined sx={{ fontSize: 55 }} />
                    </span>
                    <h2>event & deal</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s
                    </p>
                </section>
                <section className={styles.right_column}>
                    {blogData.slice(0, 3).map((event, i) => (
                        <div className={styles.event_item} key={i}>
                            <span className={styles.event_date}>
                                <strong>{event.date.day}</strong>
                                <span>{event.date.month}</span>
                            </span>
                            <div className={styles.title_container}>
                                <h2 className={styles.event_title}>{event.title}</h2>
                                <Link
                                    to={`/hillter/blog/posts/post-details/${event.title.toLowerCase().replace(/ /g, '_')}`}
                                    className={styles.read_more}>
                                    [read more]
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default EventsSection;
