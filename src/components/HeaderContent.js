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
                    <ul className={styles.menu_list}>
                        <li className={styles.menu_list_item}> <a className={styles.listLink} href="/#">Home </a> </li>
                        <li className={styles.menu_list_item}>
                              <a className={styles.listLink} href="/#">Rooms <span><ArrowDropDown/></span></a>
                              <ul className={styles.sub_menu}>
                            <li><a href="/#">Room 1</a></li>
                            <li><a href="/#">Room 2</a></li>
                            <li><a href="/#">Room 3</a></li>
                            <li><a href="/#">Room 4</a></li>
                            <li><a href="/#">Room 5</a></li>
                            <li><a href="/#">Room 6</a></li>
                             </ul>
                              </li>
                        <li className={styles.menu_list_item}> 
                        <a className={styles.listLink} href="/#">Restaurant <span><ArrowDropDown/></span></a>
                        <ul className={styles.sub_menu}>
                            <li><a href="/#">Restaurant 1</a></li>
                            <li><a href="/#">Restaurant 2</a></li>
                            <li><a href="/#">Restaurant 3</a></li>
                            <li><a href="/#">Restaurant 4</a></li>
                             </ul>
                         </li>
                        <li className={styles.menu_list_item}>
                             <a className={styles.listLink} href="/#">Pages<span><ArrowDropDown/></span> </a> 
                             <ul className={styles.sub_menu}>
                            <li><a href="/#">About</a></li>
                            <li><a href="/#">Activities</a></li>
                            <li><a href="/#">Event</a></li>
                            <li><a href="/#">Guest Book 4</a></li>
                            <li><a href="/#">404 Page</a></li>
                            <li><a href="/#">Coming Soon</a></li>
                             </ul>
                             </li>
                        <li className={styles.menu_list_item}> <a className={styles.listLink} href="/#">Galleries</a> </li>
                        <li className={styles.menu_list_item}> <a className={styles.listLink} href="/#">Blog</a> </li>
                        <li className={styles.menu_list_item}> <a className={styles.listLink} href="/#">Contact</a> </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderContent;
