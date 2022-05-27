import React, { useState, useEffect } from 'react';
import styles from '../styles/layout/Gallery.module.scss';
import { room, blog } from '../assets/images';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const roomList = Object.values(room);
    const blogList = Object.values(blog);

    //Filtering result
    const filterGallery = menuTab => {
        switch (menuTab) {
            case 'bathroom':
                setGallery([...roomList]);
                break;
            case 'dining':
                setGallery([...blogList]);
                break;
            case 'hotel':
                setGallery([...roomList]);
                break;
            case 'room':
                setGallery([...roomList]);
                break;
            default:
                setGallery([...roomList, ...blogList]);
        }
    };

    //Set default gallery value
    useEffect(() => {
        setGallery([...roomList, ...blogList]);
    }, []);

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <h2>GALLERY</h2>
                <ul className={styles.galleryMenu}>
                    <li onClick={() => filterGallery('all')}>all</li>
                    <li onClick={() => filterGallery('bathroom')}>bathroom</li>
                    <li onClick={() => filterGallery('dining')}>dining</li>
                    <li onClick={() => filterGallery('hotel')}>hotel & ground</li>
                    <li onClick={() => filterGallery('room')}>room & suite</li>
                </ul>
                <figure className={styles.gallery_container}>
                    {gallery.slice(0, 12).map((item, index) => (
                        <div className={styles.imgContainer}>
                            <img key={index} src={item} alt='gallery' />
                            <h6>Rooms</h6>
                        </div>
                    ))}
                </figure>
            </div>
        </section>
    );
};

export default Gallery;
