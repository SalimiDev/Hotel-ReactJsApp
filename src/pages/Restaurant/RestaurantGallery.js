import React, { useState, useEffect } from 'react';
import styles from '../../styles/layout/Gallery.module.scss';
import '../../styles/utils/_components.scss';
//Images data
import { restaurant } from '../../assets/images';
//Components
import ImagePreview from '../../components/ImagePreview';

const RestaurantGallery = () => {
    //States to handle show and hidden ImagePreview
    const [toggleActive, setToggleActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState();
    const [activeTab, setActiveTab] = useState('all');

    //Convert images data object to array list
    const [gallery, setGallery] = useState([]);
    const breakfast = Object.values(restaurant.breakfast);
    const dinner = Object.values(restaurant.dinner);
    const drink = Object.values(restaurant.drink);
    const lunch = Object.values(restaurant.lunch);

    //Filtering result
    const filterGallery = menuTab => {
        setActiveTab(menuTab);
        switch (menuTab) {
            case 'breakfast':
                setGallery([...breakfast]);
                break;
            case 'dinner':
                setGallery([...dinner]);

                break;
            case 'drink':
                setGallery([...drink]);

                break;
            case 'lunch':
                setGallery([...lunch]);
                break;
            default:
                setGallery([...lunch, ...drink]);
        }
    };

    //Set default gallery value
    useEffect(() => {
        setGallery([...lunch, ...drink]);
    }, []);

    const previewHandler = index => {
        setToggleActive(true);
        setCurrentIndex(index);
    };

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <h2>GALLERY</h2>
                <ul className={styles.galleryMenu}>
                    <li className={activeTab === 'all' ? styles.Active : ''} onClick={() => filterGallery('all')}>
                        all
                    </li>
                    <li
                        className={activeTab === 'breakfast' ? styles.Active : ''}
                        onClick={() => filterGallery('breakfast')}>
                        breakfast
                    </li>
                    <li className={activeTab === 'dinner' ? styles.Active : ''} onClick={() => filterGallery('dinner')}>
                        dinner
                    </li>
                    <li className={activeTab === 'drink' ? styles.Active : ''} onClick={() => filterGallery('drink')}>
                        drink
                    </li>
                    <li className={activeTab === 'lunch' ? styles.Active : ''} onClick={() => filterGallery('lunch')}>
                        lunch
                    </li>
                </ul>
                <figure className={styles.gallery_container}>
                    {gallery.slice(0, 12).map((item, index) => (
                        <div key={index} className={styles.imgContainer} onClick={() => previewHandler(index)}>
                            <img key={index} src={item} alt='gallery' />
                            <h6>Foods</h6>
                        </div>
                    ))}
                </figure>
                <button className='btn btn-trans-black btn-lg'>BROWSE OUR GALLERY</button>
            </div>
            <ImagePreview data={{ toggleActive, setToggleActive, gallery, currentIndex, setCurrentIndex }} />
        </section>
    );
};

export default RestaurantGallery;
