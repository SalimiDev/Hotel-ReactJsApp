import React, { useEffect, useState } from 'react';
//Styles
import styles from '../../styles/pages/Blogs.module.scss';
// Data
import { blogData } from '../../data/blogData';
//Components
import Posts from './Posts';
import PagesSideBar from '../../components/PagesSideBar';
import Pagination from '../../components/Pagination';
//Router
import {useParams} from 'react-router-dom';

const Blogs = () => {
    // States
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

    //Numbers of pages
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(blogData.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    //Change page
   const {pageUrlNumber}= useParams();
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    //Handle ability to change page with url and get current page number when page Rerender
    useEffect(()=>{
        setCurrentPage(pageUrlNumber);
    },[])

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
                            <Posts post={post} />
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
