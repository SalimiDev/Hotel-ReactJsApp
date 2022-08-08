import React from 'react';
import styles from '../../styles/pages/Restaurant.module.scss';
//Components
import FoodList from './FoodList';
import Reservation from './Reservation';
import RestaurantGallery from './RestaurantGallery';

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

            <section className={styles.reservation}>
                <Reservation />
            </section>
            <section className={styles.gallery}>
                <RestaurantGallery />
            </section>
        </div>
    );
};

export default Restaurant;
