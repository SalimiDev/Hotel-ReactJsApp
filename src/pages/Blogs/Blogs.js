import React from 'react';
import styles from '../../styles/pages/Blogs.module.scss';
// Data
import { blogData } from '../../data/blogData';
//components
import Blog from './Blog';
import PagesSideBar from '../../components/PagesSideBar';

const Blogs = () => {
    return (
        <div className={styles.blogPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>OUR BLOG</h2>
                        <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </header>
            <div className={styles.content_container}>
                <section className={styles.blogs_container}>
                    {blogData.map((blogs, i) => (
                        <div key={i}>
                            <Blog blogs={blogs} />
                        </div>
                    ))}
                </section>
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
        </div>
    );
};

export default Blogs;
