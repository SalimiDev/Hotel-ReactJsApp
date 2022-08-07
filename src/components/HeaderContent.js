import React, { useState } from 'react';
import styles from '../styles/layout/HeaderContent.module.scss';
import logo from '../assets/logo/logo-small.png';
import { ArrowDropDown } from '@mui/icons-material';
import { roomsData } from '../data/roomsData';
import { Link } from 'react-router-dom';
import ActiveLink from '../helpers/ActiveLink';

const HeaderContent = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(0);

    //Toggle to open and close submenu
    const toggleSubMenu = x => {
        setSubMenu(subMenu === x ? 0 : x);
    };
    //Toggle to open and close menu
    const toggleMenuHandler = () => {
        setToggleMenu(!toggleMenu);
        setSubMenu(false);
    };

    return (
        <div className={styles.header_content}>
            <div className={styles.container}>
                <span className={styles.header_logo}>
                    <Link to='/hillter'>
                        <img src={logo} alt='Hotel Logo' />
                    </Link>
                </span>

                <nav className={`${styles.header_menu} ${toggleMenu && styles.header_menu_toggle}`}>
                    <ul className={styles.menu_list}>
                        <li className={styles.menu_list_item}>
                            <ActiveLink className={styles.listLink} to={'/'} bgcolor='#fff' color='#000'>
                                Home
                            </ActiveLink>
                        </li>

                        <li className={styles.menu_list_item}>
                            <ActiveLink className={styles.listLink} to='/hillter/rooms' bgcolor='#fff' color='#000'>
                                Rooms
                                <span onClick={() => toggleSubMenu(1)}>
                                    <ArrowDropDown />
                                </span>
                            </ActiveLink>

                            <ul className={`${styles.sub_menu} ${subMenu === 1 && styles.sub_menu_active}`}>
                                {roomsData.map(room => (
                                    <li key={room.id}>
                                        <ActiveLink to={`/hillter/rooms/room-${room.id}`}>Room {room.id}</ActiveLink>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className={styles.menu_list_item}>
                            <ActiveLink className={styles.listLink} to='/hillter/restaurant' bgcolor='#fff' color='#000'>
                                Restaurant
                            </ActiveLink>
                        </li>

                        <li className={styles.menu_list_item}>
                            <Link className={styles.listLink} to='/'>
                                Pages
                                <span onClick={() => toggleSubMenu(3)}>
                                    <ArrowDropDown />
                                </span>
                            </Link>
                            <ul className={`${styles.sub_menu} ${subMenu===3&& styles.sub_menu_active}`} >
                                        <li><ActiveLink to='/hillter/about'>About</ActiveLink></li>
                                        <li><ActiveLink to='/hillter/activities'>Activities</ActiveLink></li>
                                        <li><ActiveLink to='/hillter/event'>Event</ActiveLink></li>
                                        <li><ActiveLink to='/hillter/guest-book'>Guest Book</ActiveLink></li>
                                        <li><ActiveLink to='/hillter/404-page'>404 Page</ActiveLink></li>
                                        <li><ActiveLink to='/hillter/coming-soon'>Coming Soon</ActiveLink></li>
                                    </ul>
                        </li>

                        <li className={styles.menu_list_item}>
                            <ActiveLink className={styles.listLink} to='/hillter/gallery' bgcolor='#fff' color='#000'>
                                Galleries
                            </ActiveLink>
                        </li>
                        <li className={styles.menu_list_item}>
                            <ActiveLink className={styles.listLink} to='/hillter/blog/page-1' bgcolor='#fff' color='#000'>
                                Blog
                            </ActiveLink>
                        </li>
                        <li className={styles.menu_list_item}>
                            <ActiveLink className={styles.listLink} to='/hillter/contact' bgcolor='#fff' color='#000'>
                                Contact
                            </ActiveLink>
                        </li>
                    </ul>
                </nav>

                <div className={styles.hamburger} onClick={toggleMenuHandler}>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
