import React from 'react';
//Styles
import styles from '../styles/pages/ContactUs.module.scss';
import '../styles/utils/_components.scss';
//Components
import SocialIcons from '../components/SocialIcons';
import ContactList from '../components/ContactList';
import ContactUsForm from '../components/ContactUsForm';
import HillterLocationMap from '../components/HillterLocationMap';

const ContactUs = () => {
    return (
        <div className={styles.contactUsPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>CONTACT</h2>
                        <p>Do you want to hire a developer? Please do not hesitate to contact me.</p>
                    </div>
                </div>
            </header>

            <div className={styles.contact_container}>
                <div className={styles.textContent}>
                    <h2>CONTACT</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>

                    <div className={styles.ContactList_container}>
                        <ContactList IconColor='#e7c130' hovercolor='#344a71' hoverweight='600' />
                    </div>
                </div>

                <section className={styles.contact_form}>
                    <ContactUsForm />
                </section>
            </div>

            <div className={styles.location_container}>
                <HillterLocationMap />
            </div>

            <div className={styles.social_container}>
                <SocialIcons color={'gray'} />
            </div>
        </div>
    );
};

export default ContactUs;
