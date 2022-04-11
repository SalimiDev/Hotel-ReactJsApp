import React from 'react';
import styles from '../styles/layout/HeaderContent.module.scss';
import logo from '../assets/logo/logo-small.png'
import {ArrowDropDown} from '@mui/icons-material';

const HeaderContent = () => {
    return (
        <div className={styles.header_content}>
            <div className={styles.container}>
                <span className={styles.header_logo}>
                    <a href='/#'>
                        <img src={logo} alt='Hotel Logo' />
                    </a>
                </span>
                <nav className={styles.header_menu}>
                    <ul>
                        <li> <a href="/#">Home </a> </li>
                        <li> <a href="/#">Rooms <span><ArrowDropDown/></span></a> </li>
                        <li> <a href="/#">Restaurant <span><ArrowDropDown/></span></a> </li>
                        <li> <a href="/#">Pages<span><ArrowDropDown/></span> </a> </li>
                        <li> <a href="/#">Galleries</a> </li>
                        <li> <a href="/#">Blog</a> </li>
                        <li> <a href="/#">Contact</a> </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderContent;
