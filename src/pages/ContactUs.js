import React from 'react';
import '../styles/utils/_components.scss';
import styles from '../styles/pages/ContactUs.module.scss';
//Icons
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { LocationOnOutlined, CallOutlined, EmailOutlined } from '@mui/icons-material';

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
                    <ul className={styles.contact}>
                        <li> <span><LocationOnOutlined/></span> <a href="https://goo.gl/maps/bYu6v3ebxxNPn4aH9">Banafshe Street,Tehran,Iran</a></li>
                        <li> <span><CallOutlined/></span><a href="tel:+989370938781">98-937-093-8781</a></li>
                        <li> <span><EmailOutlined/></span> <a href="mailto:Salimi.devop@gmail.com">Email</a></li>
                    </ul>
                </div>

                <div className={styles.contactForm}>
                    <form action=''>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                        <input type='text' placeholder='Subject' />
                        <textarea placeholder='Your Message'></textarea>
                    </form>
                    <button className='btn btn-orange btn-sm'>
                        <a href='/#'>SEND</a>
                    </button>
                </div>
            </div>

            <div className={styles.location_container}>
                <iframe
                    title='Hillter location'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2193.163914945862!2d51.0058393970025!3d35.785597974823524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d95e8f4134bd5%3A0xeab166ccf207cebb!2z2YXbjNiv2KfZhiDYqNmG2YHYtNmH!5e0!3m2!1sfa!2s!4v1656788145698!5m2!1sfa!2s'
                    aria-hidden='false'
                    tabIndex='0'
                    allowFullScreen=''
                    frameBorder='0'></iframe>
            </div>

            <div className={styles.social_container}>
                <ul className={styles.social_list}>
                    <li><a href="https://www.linkedin.com/in/mehdi-salimi-2050" target='blank'><span> <FaLinkedinIn /></span></a></li>
                    <li><a href="https://github.com/SalimiDev"><span><FaGithub /></span></a></li>
                    <li><a href="/"><span><FaTwitter /></span></a></li>
                    <li><a href="/"><span><FaInstagramSquare /></span></a></li>
                </ul>
               
            </div>
        </div>
    );
};

export default ContactUs;
