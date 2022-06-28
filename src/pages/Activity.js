import React, { useState } from 'react';
import styles from '../styles/pages/Activity.module.scss';
import { blogData } from '../data/blogData';

const Activity = () => {
    const [fillteredResult, setFillteredResult] = useState([...blogData]);
    //State to handle selected tab style
    const [activeTab, setActiveTab] = useState('All');

    //Handle to fillter blogs subjects based on their category(based on selected tab)
    const filteringHandler = selectedTab => {
        const result = blogData.filter(blog => blog && blog.category.includes(selectedTab));
        selectedTab !== 'All' ? setFillteredResult(result) : setFillteredResult(...blogData);
        setActiveTab(selectedTab);
    };

    return (
        <div className={styles.activity}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>Activities</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <ul className={styles.galleryMenu}>
                    <li onClick={() => filteringHandler('All')} className={activeTab === 'All' ? styles.Active : ''}>
                        all
                    </li>
                    <li onClick={() => filteringHandler('Golf')} className={activeTab === 'Golf' ? styles.Active : ''}>
                        golf
                    </li>
                    <li
                        onClick={() => filteringHandler('Mountain')} className={activeTab === 'Mountain' ? styles.Active : ''}>
                        mountain
                    </li>
                    <li onClick={() => filteringHandler('Museum')} className={activeTab === 'Museum' ? styles.Active : ''}>
                        museum
                    </li>
                    <li onClick={() => filteringHandler('Park')} className={activeTab === 'Park' ? styles.Active : ''}>
                        park
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Activity;
