import React from 'react';
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';

const Post = ({ postData }) => {
    const { id, image, title, time, text_content_1, location, date } = postData || [];

    return (
        <div className={styles.posts}>
            <article key={id} className={styles.post_article}>
                <div className={styles.image_container}>
                    <a href={`/hillter/blog/${id}`}>
                        <img src={image} alt={title} />
                    </a>
                </div>

                <div className={styles.post_header}>
                    <span className={styles.post_date}>
                        <strong>{date?.day}</strong>
                        <span>{date?.month}</span>
                    </span>
                    <div className={styles.title_container}>
                        <h2 className={styles.post_title}>
                            <Link to={`/hillter/blog/posts/post-details/${title.toLowerCase().replace(/ /g, '_')}`}>
                                {title}
                            </Link>
                        </h2>

                        <p className={styles.location}>
                            <span>{time}</span> - <span>{location}</span>
                        </p>
                    </div>
                </div>

                <div className={styles.post_textContent}>
                    <p>{text_content_1}</p>
                </div>
            </article>
        </div>
    );
};

export default Post;
