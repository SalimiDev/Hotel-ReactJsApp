import React, { useState } from 'react';
import styles from './FoodList.module.scss';
//Icon
import { DinnerDining } from '@mui/icons-material/';
//Restuarant Data
import { restaurantData } from '../../data/restaurantData';
//Hook
import useWindowSize from '../../hooks/useWindowSize';
// Components
import FoodCard from './FoodCard';

const FoodList = () => {
    const [selectedMeal, setSelectedMeal] = useState([...restaurantData.breakfast]);
    const [activeTab, setActiveTab] = useState('breakfast');
    //window size
    const size = useWindowSize();
    //list of foods
    const Foods = selectedMeal.map((foodData, i) => <FoodCard foodData={foodData} key={i} />);

    //handle active tab & set selectedData of meals
    const handleActiveTab = tab => {
        switch (tab) {
            case 'breakfast':
                setSelectedMeal(restaurantData.breakfast);
                setActiveTab(tab);
                break;
            case 'lunch':
                setSelectedMeal(restaurantData.lunch);
                size.width <= 768 && window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveTab(tab);
                break;
            case 'dinner':
                setSelectedMeal(restaurantData.dinner);
                size.width <= 768 && window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveTab(tab);
                break;
            case 'drink':
                setSelectedMeal(restaurantData.drink);
                size.width <= 768 && window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveTab(tab);

                break;

            default:
                setSelectedMeal(restaurantData.breakfast);
                setActiveTab('breakfast');
        }
    };

    return (
        <>
            <span className={styles.top_icon}>
                <DinnerDining sx={{ fontSize: 60 }} />
            </span>

            {size.width <= 768 && (
                <div className={styles.list_style_1}>
                    <ul className={styles.meal_list}>
                        <li
                            onClick={() => handleActiveTab('breakfast')}
                            className={activeTab === 'breakfast' ? styles.activeTab : ''}>
                            <span>BREAKFAST</span>
                            <span className={styles.time}>7:00am till 9:00am</span>
                        </li>
                        <div className={styles.foods_container}>{activeTab === 'breakfast' && Foods}</div>

                        <li
                            onClick={() => handleActiveTab('lunch')}
                            className={activeTab === 'lunch' ? styles.activeTab : ''}>
                            <span>LUNCH</span>
                            <span className={styles.time}>12:00am till 3:00am</span>
                        </li>
                        <div className={styles.foods_container}>{activeTab === 'lunch' && Foods}</div>

                        <li
                            onClick={() => handleActiveTab('dinner')}
                            className={activeTab === 'dinner' ? styles.activeTab : ''}>
                            <span>DINNER</span>
                            <span className={styles.time}>7:00pm till 11:00pm</span>
                        </li>
                        <div className={styles.foods_container}>{activeTab === 'dinner' && Foods}</div>

                        <li
                            onClick={() => handleActiveTab('drink')}
                            className={activeTab === 'drink' ? styles.activeTab : ''}>
                            <span>DRINK</span>
                            <span className={styles.time}>All time</span>
                        </li>
                        <div className={styles.foods_container}>{activeTab === 'drink' && Foods}</div>
                    </ul>
                </div>
            )}

            {size.width > 768 && (
                <div className={styles.list_style_2}>
                    <ul className={styles.meal_list}>
                        <li
                            onClick={() => handleActiveTab('breakfast')}
                            className={activeTab === 'breakfast' ? styles.activeTab : ''}>
                            <span>BREAKFAST</span>
                            <span className={styles.time}>7:00am till 9:00am</span>
                        </li>

                        <li
                            onClick={() => handleActiveTab('lunch')}
                            className={activeTab === 'lunch' ? styles.activeTab : ''}>
                            <span>LUNCH</span>
                            <span className={styles.time}>12:00am till 3:00am</span>
                        </li>

                        <li
                            onClick={() => handleActiveTab('dinner')}
                            className={activeTab === 'dinner' ? styles.activeTab : ''}>
                            <span>DINNER</span>
                            <span className={styles.time}>7:00pm till 11:00pm</span>
                        </li>

                        <li
                            onClick={() => handleActiveTab('drink')}
                            className={activeTab === 'drink' ? styles.activeTab : ''}>
                            <span>DRINK</span>
                            <span className={styles.time}>All time</span>
                        </li>
                    </ul>

                    <div className={styles.foods_container}>{Foods}</div>
                </div>
            )}
        </>
    );
};

export default FoodList;
