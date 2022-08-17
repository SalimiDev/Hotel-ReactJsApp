import React from 'react';
//Styles
import styles from '../../styles/pages/Blogs.module.scss';
// Data
import { blogData } from '../../data/blogData';
//Components
import Post from './Post';
import PagesSideBar from '../../components/PagesSideBar';
import Pagination from '../../components/Pagination';
import SearchedItem, { searchError } from '../../components/SearchedItem';
//redux
import { useSelector } from 'react-redux';

const Blogs = () => {
    //get searched data form redux store
    const searchedResultData = useSelector(state => state?.searchReducer.searchedResultData);
    //get paginated data  (data per page) form redux store
    const dataPerPage = useSelector(state => state?.paginatedReducer.dataPerPage);
    //map on dataPerPage to show search results
    const searchedResult = dataPerPage?.map((item, i) => <SearchedItem key={i} searchedResult={item} />);
    //map on dataPerPage to show blog posts
    const blogPosts = dataPerPage?.map((post, i) => <Post postData={post} />);

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
                {searchedResultData.length ? (
                    <section className={styles.searched_container}>
                        {searchedResultData.length !== 0 ? searchedResult : searchError}
                    </section>
                ) : (
                    <section className={styles.blogs_container}>{blogPosts}</section>
                )}
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
            {searchedResultData.length ? <Pagination data={searchedResultData} /> : <Pagination data={blogData} />}
        </div>
    );
};

export default Blogs;
