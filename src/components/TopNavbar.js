import React from 'react';
import styles from '../styles/layout/TopNavbar.module.scss';
import { LocationOn, Call } from '@mui/icons-material';

const TopNavbar = () => {
    return (
        <div className={styles.header_top}>
            <div className={styles.container}>
                <div className={styles.address}>
                    <LocationOn sx={{ fontSize: 12 }} />
                    <span>Banafshe Street,Tehran,Iran</span>
                    <Call sx={{ fontSize: 12 }} />
                    <span>98-937-093-8781</span>
                </div>
                <nav className={styles.topMenu}>
                    <ul>
                        <li>About</li>
                        <li>Event</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TopNavbar;
