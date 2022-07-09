import React from 'react';
import styles from './GuestCard.module.scss';

const GuestCard = ({ guestData }) => {
    const { fullName, title, picture, comment, address } = guestData;
    return (
        <div className={styles.questCard}>
            <h2>{title}</h2>
            <div className={styles.image}>
                <img src={`${picture}`} alt='profileImage' />
            </div>
            <p>{comment}</p>
            <span>
                <strong>{fullName} -</strong>
                {address}
            </span>
        </div>
    );
};

export default GuestCard;
