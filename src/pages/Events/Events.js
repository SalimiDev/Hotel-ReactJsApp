import React from 'react';
//styles
import styles from '../../styles/pages/Events.module.scss';
//components
import Event from './Event';
import SearchedItem, { searchError } from '../../components/SearchedItem';
import PagesSideBar from '../../components/PagesSideBar';
//data
import { blogData } from '../../data/blogData';
//redux
import { useSelector } from 'react-redux';

const Events = () => {
    //get search result form redux store
    const searchedData = useSelector(state => state?.searchedResult);
    //map on searched data to show search results
    const searchedResult = searchedData?.map((item, i) => <SearchedItem key={i} searchedResult={item} />);
    //map on blog data to show events
    const event = blogData.slice(0, 4).map(event => <Event event={event} key={event.id} />);

    return (
        <div className={styles.eventPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>EVENT</h2>
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
                    <section className={styles.events_container}>{event}</section>
                )}
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
        </div>
    );
};

export default Events;
