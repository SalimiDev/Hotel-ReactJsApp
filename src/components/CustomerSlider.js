import React from 'react';
import styles from '../styles/layout/CustomerSlider.module.scss';
import { customerData } from '../data/customerData';

const CustomerSlider = () => {
    return (
        <section className={styles.customer_slider}>
            <div className={styles.container}>
                <div className={styles.customer_wrapper}>
                    {customerData.map(data => (
                        <div className={styles.customer_data} key={data.id}>
                            <img src={data.picture} alt={data.fullName} />
                            <div className={styles.textContainer}>
                                <p>{data.comment}</p>
                                <span>
                                    <strong>{data.fullName}</strong> {data.city}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerSlider;
