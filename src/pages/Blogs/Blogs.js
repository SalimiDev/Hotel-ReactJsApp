import React, { useEffect, useState } from 'react';
//Styles
import styles from '../../styles/pages/Blogs.module.scss';
// Data
import { blogData } from '../../data/blogData';
//Components
import Posts from './Posts';
import PagesSideBar from '../../components/PagesSideBar';
import Pagination from '../../components/Pagination';
import SearchedItem, { searchError } from '../../components/SearchedItem';
//Router
import { useParams } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';

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
    const { pageUrlNumber } = useParams();
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    //Handle ability to change page with url and get current page number when page Rerender
    useEffect(() => {
        setCurrentPage(pageUrlNumber);
    }, []);

    //get search result form redux store
    const searchedData = useSelector(state => state?.searchedResult);
    //map on searched data to show search results
    const searchedResult = searchedData?.map((item, i) => <SearchedItem key={i} searchedResult={item} />);
    //map on blog data to show blog posts
    const posts = currentPosts.map((post, i) => <Posts post={post} />);

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
                {searchedData ? (
                    <section className={styles.searched_container}>
                        {searchedData.length !== 0 ? searchedResult : searchError}
                    </section>
                ) : (
                    <section className={styles.blogs_container}>{posts}</section>
                )}
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
            <Pagination pageNumbers={pageNumbers} paginate={paginate} />
        </div>
    );
};

export default Blogs;
