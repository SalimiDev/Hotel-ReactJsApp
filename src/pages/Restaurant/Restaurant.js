import React from 'react';
import styles from '../../styles/pages/Restaurant.module.scss';

const Restaurant = () => {
    return (
        <div className={styles.restaurantPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>OUR RESTUARANT</h2>
                        <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Restaurant;
