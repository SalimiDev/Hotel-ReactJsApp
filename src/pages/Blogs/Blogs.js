import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Styles
import styles from '../../styles/pages/Blogs.module.scss';
// Data
import { blogData } from '../../data/blogData';
//components
import Blog from './Blog';
import PagesSideBar from '../../components/PagesSideBar';
import Pagination from '../../components/Pagination';

const Blogs = () => {
    const { pageParams } = useParams();

    // States
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    //Numbers of pages
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(blogData.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    //Change page using URL
    useEffect(() => {
        pageNumbers.includes(Number(pageParams)) && setCurrentPage(pageParams);
    }, [pageParams]);

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
                    {currentPosts.map((post, i) => (
                        <div key={i}>
                            <Blog post={post} />
                        </div>
                    ))}
                </section>
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
            <Pagination pageNumbers={pageNumbers} paginate={paginate} />
        </div>
    );
};

export default Blogs;
