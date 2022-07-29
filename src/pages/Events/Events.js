import React from 'react';
import styles from '../../styles/pages/Events.module.scss';
import Event from './Event';
import PagesSideBar from '../../components/PagesSideBar';
import { blogData } from '../../data/blogData';

const Events = () => {
    return (
        <div className={styles.eventPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>EVENT</h2>
                        <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </header>
            <div className={styles.content_container}>
                <section className={styles.events_container}>
                    {blogData.slice(0, 4).map(event => (
                        <Event event={event} key={event.id} />
                    ))}
                </section>
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
        </div>
    );
};

export default Events;
