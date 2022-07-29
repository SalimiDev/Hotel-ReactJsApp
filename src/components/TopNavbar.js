import React from 'react';
import styles from '../styles/layout/TopNavbar.module.scss';
import { LocationOn, Call } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <div className={styles.header_top}>
            <div className={styles.container}>
                <div className={styles.address}>
                    <LocationOn sx={{ fontSize: 12 }} />
                    <span>
                        <a href='https://goo.gl/maps/bYu6v3ebxxNPn4aH9'>Banafshe Street,Tehran,Iran</a>
                    </span>
                    <Call sx={{ fontSize: 12 }} />
                    <span>
                        <a href='tel:+989370938781'>98-937-093-8781</a>
                    </span>
                </div>
                <nav className={styles.topMenu}>
                    <ul>
                        <li><Link to='/hillter/about'>About</Link></li>
                        <li><Link to='/hillter/event'>Event</Link></li>
                        <li><Link to='/hillter/blog/page-1/'>Blog</Link></li>
                        <li><Link to='/hillter/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TopNavbar;
