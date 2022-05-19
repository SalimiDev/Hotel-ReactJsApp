import React, { useEffect, useState } from 'react';
import styles from '../styles/layout/CustomerSlider.module.scss';
import { customerData } from '../data/customerData';

const CustomerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideNumber = 'slide_' + currentSlide;

    //variables for create auto scrolling slider
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 3500;

    //slider length is equal to 3
    const slideLength = customerData.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    //functionality of auto scroll slider
    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    };
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <section className={styles.customer_slider}>
            <div className={styles.container}>
                <div className={styles.items_wrapper}>
                    {customerData.map((data, index) => (
                        <div
                            id={`${ styles[slideNumber]}`}
                            className={styles.items}
                            key={data.id}>
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
