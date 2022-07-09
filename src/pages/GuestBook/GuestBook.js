import React from 'react';
import styles from '../../styles/pages/GuestBook.module.scss';
//Components
import GuestCard from './GuestCard';
//Customer GuestBook data
import { GuestBookData } from '../../data/GuestBookData';
import { Link } from 'react-router-dom';

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
            <div className={styles.title_container}>
                <h2>
                    OUR GUEST BOOK FORM <br /> CUSTOMER
                </h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout.
                </p>
                <button className='btn btn-lg btn-orange'>
                    <Link to='/hillter/contact'>WRITE IN GUEST BOOK</Link>
                </button>
            </div>
            <div className={styles.guest_container}>
                {GuestBookData.map((geustItem, index) => (
                    <div className={styles.guestItem} key={index}>
                        <GuestCard guestData={geustItem} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuestBook;
