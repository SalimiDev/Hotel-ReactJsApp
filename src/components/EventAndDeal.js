import React from 'react';
import styles from '../styles/layout/EventAndDeal.module.scss';
import event1 from '../assets/images/event&deal-1.jpg';
import event2 from '../assets/images/event&deal-2.jpg';

const EventAndDeal = () => {
    return (
        <section className={styles.eventAndDeal}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2>EVENT & DEAL</h2>
                    <p>Lorem Ipsum is simply dummy text</p>
                </div>
                <figure>
                    <a href='/#'>
                        <img src={event1} alt='Event & Deal' />
                    </a>
                </figure>
                <figure>
                    <a href='/#'>
                        <img src={event2} alt='Event & Deal' />
                    </a>
                </figure>
            </div>
        </section>
    );
};

export default EventAndDeal;
