import React from 'react';
import styles from '../styles/layout/Gallery.module.scss';
import { room, blog } from '../assets/images';

const Gallery = () => {
    const roomList = Object.values(room);
    const blogList = Object.values(blog);
    const gallery = [...roomList, ...blogList];

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <h2>GALLERY</h2>
                <ul className={styles.galleryMenu}>
                    <li>all</li>
                    <li>bathroom</li>
                    <li>dining</li>
                    <li>hotel & ground</li>
                    <li>room & suite</li>
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
