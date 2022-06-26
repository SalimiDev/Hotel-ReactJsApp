import React from 'react';
import styles from '../styles/layout/Footer.module.scss';
import logo from '../assets/logo/logo-footer.png';
import tripImage from '../assets/logo/Trip.png';
import { CallOutlined, LocationOnOutlined, MailOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
                            <p>Banafshe Street,Tehran,Iran</p>
                            </span>
                            <span>
                            <i><CallOutlined/></i>
                            <p>98-937-093-8781</p>
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
                                <li><Link to={'/#' }>Guest Book</Link></li>
                                <li><Link to={'/#' }>Gallery</Link></li>
                                <li><Link to={'/#' }>Restaurant</Link></li>
                                <li><Link to={'/#' }>Event</Link></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h4>ABOUT</h4>
                            <ul>
                                <li><Link to={'/hillter/about' }>About</Link></li>
                                <li><Link to={'/#'}>Contact</Link></li>
                                <li><Link to={'/hillter/rooms/room-1' }>Room</Link></li>
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
