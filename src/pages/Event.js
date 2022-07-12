import React from 'react';
import styles from '../styles/pages/Event.module.scss';

const Event = () => {
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
        </div>
    );
};

export default Event;
