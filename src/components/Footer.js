import React from 'react';
import styles from '../styles/layout/Footer.module.scss';
import logo from '../assets/logo/logo-footer.png';
import tripImage from '../assets/logo/Trip.png';
import { CallOutlined, LocationOnOutlined, MailOutlined } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.container}>
                    <div className={styles.logo_container}>
                        <div className={styles.logo}>
                            <a href='/#'>
                                <img src={logo} alt='Hillter Logo' />
                            </a>
                        </div>
                        <div className={styles.address}>
                            <span>
                            <i><LocationOnOutlined/></i>
                            <p>225 Beach Street, Australian</p>
                            </span>
                            <span>
                            <i><CallOutlined/></i>
                            <p>1-548-854-8898</p>
                            </span>
                            <span>
                            <i><MailOutlined/></i>
                            <p>Contact mail</p>
                            </span>
                        </div>
                    </div>
                        <div className={styles.column}>
                            <h4>PAGE SITE</h4>
                            <ul>
                                <li>Guest Book</li>
                                <li>Gallery</li>
                                <li>Restaurant</li>
                                <li>Event</li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h4>ABOUT</h4>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Room</li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h4>TRIPADVISOR</h4>
                            <p>Now with hotel reviews by</p>
                            <img src={tripImage} alt='TRIPADVISOR' />
                        </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <span>Copyright by AweThemes.Com.</span>
            </div>
        </footer>
    );
};

export default Footer;
