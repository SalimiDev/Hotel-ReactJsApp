import React, { useState, useEffect } from 'react';
import styles from './SearchPage.module.scss';
//components
import PagesSideBar from '../../components/PagesSideBar';
import Pagination from '../../components/Pagination';
import SearchedItem, { searchError } from './SearchedItem';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { filterAction, searchAction } from '../../redux/actions/searchAction';
//router
import { useSearchParams, useNavigate } from 'react-router-dom';
//data
import allData from '../../data/allData';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const pageNumber = searchParams.get('page');
    const navigate = useNavigate();

    //dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        const query = searchParams.get('q');
        setQuery(query);
        dispatch(filterAction(allData, query));
        dispatch(searchAction(allData, query));
        navigate(`/hillter/search?q=${query}&page=${pageNumber || 1}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    //get searched data from redux store and map to show it on ui
    const searchedResultData = useSelector(state => state?.searchReducer.searchedResultData);
    const dataPerPage = useSelector(state => state?.paginatedReducer.dataPerPage);
    const searchedResult = dataPerPage.map((item, i) => <SearchedItem key={i} searchedResult={item} />);

    return (
        <div className={styles.searchPage}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>Search Result For:</h2>
                        <h3>"{query}"</h3>
                    </div>
                </div>
            </header>
            <div className={styles.content_container}>
                <section className={styles.searched_container}>
                    {searchedResultData.length !== 0 ? searchedResult : searchError}
                </section>
                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
            {searchedResultData.length && <Pagination data={searchedResultData} page={{ name: 'search' }} />}
        </div>
    );
};

export default SearchPage;
