import React from 'react';
//styles
import styles from '../../styles/pages/Events.module.scss';
//components
import Event from './Event';
import PagesSideBar from '../../components/PagesSideBar';
//data
import { blogData } from '../../data/blogData';

const Events = () => {
    //map on blog data to show event on ui
    const eventPosts = blogData.slice(0, 4).map((post, i) => <Event key={i} postData={post} />);

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
                <section className={styles.events_container}>{eventPosts}</section>
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
        </div>
    );
};

export default Events;
