import React from 'react';
import styles from '../../styles/pages/Restaurant.module.scss';
//Components
import FoodList from './FoodList';

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

            <section className={styles.foodList}>
                <FoodList />
            </section>
        </div>
    );
};

export default Restaurant;
