import React, { useState } from 'react';
import styles from '../styles/layout/HeaderContent.module.scss';
import logo from '../assets/logo/logo-small.png'
import {ArrowDropDown} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const HeaderContent = () => {
    const [toggleMenu ,setToggleMenu]=useState(false);
    const [subMenu ,setSubMenu]=useState(0);

    //Toggle to open and close submenu
    const toggleSubMenu =(x)=>{
        setSubMenu(subMenu===x?0:x);
    }
    //Toggle to open and close menu
    const toggleMenuHandler=()=>{
        setToggleMenu(!toggleMenu);
        setSubMenu(false);
    }

    return (
        <div className={styles.header_content}>
            <div className={styles.container}>
                <span className={styles.header_logo}>
                    <a href='/#'>
                        <img src={logo} alt='Hotel Logo' />
                    </a>
                </span>
                <nav className={`${styles.header_menu} ${toggleMenu&& styles.header_menu_toggle}`}>
                    <ul className={styles.menu_list}>
                        <li className={styles.menu_list_item}> <a className={styles.listLink} href="/#">Home </a> </li>
                        <li className={styles.menu_list_item}>
                              <a className={styles.listLink} href="/#">
                                  Rooms 
                                  <span  onClick={()=>toggleSubMenu(1)}>
                                      <ArrowDropDown/>
                                  </span>
                            </a>
                              <ul className={`${styles.sub_menu} ${subMenu===1&& styles.sub_menu_active}`}  >
                            <li><Link to={'/hillter/rooms' }>Room 1</Link></li>
                            <li><Link to={'/hillter/rooms' }>Room 2</Link></li>
                            <li><Link to={'/hillter/rooms' }>Room 3</Link></li>
                            <li><Link to={'/hillter/rooms' }>Room 4</Link></li>
                            <li><Link to={'/hillter/rooms' }>Room 5</Link></li>
                            <li><Link to={'/hillter/rooms' }>Room 6</Link></li>
                             </ul>
                              </li>
                        <li className={styles.menu_list_item} > 
                        <a className={styles.listLink} href="/#">
                            Restaurant
                             <span onClick={()=>toggleSubMenu(2)}>
                                 <ArrowDropDown/>
                            </span>
                        </a>
                        <ul className={`${styles.sub_menu} ${subMenu===2&& styles.sub_menu_active}`}  >
                            <li><a href="/#">Restaurant 1</a></li>
                            <li><a href="/#">Restaurant 2</a></li>
                            <li><a href="/#">Restaurant 3</a></li>
                            <li><a href="/#">Restaurant 4</a></li>
                             </ul>
                         </li>
                        <li className={styles.menu_list_item} >
                             <a className={styles.listLink} href="/#">
                                 Pages
                                 <span onClick={()=>toggleSubMenu(3)}>
                                     <ArrowDropDown/>
                                 </span>
                             </a> 
                             <ul className={`${styles.sub_menu} ${subMenu===3&& styles.sub_menu_active}`} >
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
                <div className={styles.hamburger} onClick={toggleMenuHandler}>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
