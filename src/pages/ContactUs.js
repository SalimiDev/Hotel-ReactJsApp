import React from 'react';
import styles from '../styles/pages/ContactUs.module.scss';

const ContactUs = () => {
    return (
        <div className={styles.contactUsPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>CONTACT</h2>
                        <p>Do you want to hire me?Please do not hesitate to contact me.</p>
                    </div>
                </div>
            </header>

            <div className={styles.contact_container}>
                <div>
                    <h2>CONTACT</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                </div>
                <ul className={styles.contact}>
                    <li>Banafshe Street,Tehran,Iran</li>
                    <li>98-937-093-8781</li>
                    <li>Contact mail</li>
                </ul>

                <div className={styles.contactForm}>
                    <form action=''>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Your Message'></textarea> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
