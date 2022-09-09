import React from 'react';
import styles from './CheckAvailabiltyPage.module.scss';

//components
import SearchBox from './SearchBox';
import FilterBox from './FilterBox';

const CheckAvailabiltyPage = () => {
    return (
        <div className={styles.checkAvailability_page}>
            <SearchBox />
            <FilterBox />
        </div>
    );
};

export default CheckAvailabiltyPage;
