import React from 'react';
//Styles
import styles from '../../styles/pages/Blogs.module.scss';
// Data
import { blogData } from '../../data/blogData';
//Components
import Post from './Post';
import PagesSideBar from '../../components/PagesSideBar';
import Pagination from '../../components/Pagination';
//redux
import { useSelector } from 'react-redux';

const Blogs = () => {
    //get paginated data  (data per page) form redux store
    const dataPerPage = useSelector(state => state?.paginatedReducer.dataPerPage);
    //map on dataPerPage to show blog posts
    const blogPosts = dataPerPage?.map((post, i) => <Post key={i} postData={post} />);

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
                <section className={styles.blogs_container}>{blogPosts}</section>
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
            <Pagination data={blogData} page={{name:'blog'}} />
        </div>
    );
};

export default Blogs;
