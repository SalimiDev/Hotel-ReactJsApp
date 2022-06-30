import React, { useState } from 'react';
import styles from '../../styles/pages/Activities.module.scss';
import '../../styles/utils/_components.scss';
//blog data
import { blogData } from '../../data/blogData';
//Import Activity card
import Activity from './Activity';

const Activities = () => {
    const [fillteredResult, setFillteredResult] = useState(blogData);
    //State to handle selected tab style
    const [activeTab, setActiveTab] = useState('All');

    //Handle to fillter blogs subjects based on their category(based on selected tab)
    const filteringHandler = selectedTab => {
        const result = blogData.filter(blog => blog && blog.category.includes(selectedTab));
        selectedTab !== 'All' ? setFillteredResult(result) : setFillteredResult(blogData);
        setActiveTab(selectedTab);
    };

    return (
        <div className={styles.activities}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>Activities</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </header>

            <div className={styles.mainContainer}>
                <ul className={styles.menu}>
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
                <div className={styles.activities_container}>
                    {fillteredResult?.map((blog,index) => (
                        <Activity data={blog} key={index} />
                    ))}
                </div>
               <div className={styles.bottom_btn}>
                    <button className='btn btn-orange btn-sm '><a href="/#">VIEW MORE</a></button>
               </div>

            </div>
        </div>
    );
};

export default Activities;
