import React from 'react';
import '../styles/utils/_components.scss';
import styles from '../styles/layout/AboutUsSection.module.scss';
import aboutUsImg from '../assets/images/aboutUs-image.jpg';

const AboutUsSection = () => {
    return (
        <section className={styles.AboutUsSection}>
            <div className={styles.container}>
                <img src={aboutUsImg} alt='About Us' />
                <div className={styles.textContentContainer}>
                    <div className={styles.textContent}>
                        <h2>ABOUT US</h2>
                        <p className={styles.subheading}>Lorem Ipsum is simply dummy text</p>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                            literature, discovered the undoubtable source
                        </p>
                    </div>
                    <button className='btn btn-sm btn-trans-black'>READ MORE</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
