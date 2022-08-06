import React from 'react';
import styles from './FoodCard.module.scss';

const FoodCard = ({ foodData }) => {
    const { image, title, description, price } = foodData;

    return (
        <div className={styles.FoodCard}>
            <div className={styles.image_container}>
               <figure style={{ backgroundImage: `url(${image})` }}></figure>
            </div>
            <div className={styles.food_details}>
                <div className={styles.details}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <span className={styles.price}>${price}</span>
            </div>
        </div>
    );
};

export default FoodCard;
