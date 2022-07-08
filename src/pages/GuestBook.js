import React from 'react';
import styles from '../styles/pages/GuestBook.module.scss';

const GuestBook = () => {
    return (
        <div className={styles.guestBookPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>Guest Book</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default GuestBook;
