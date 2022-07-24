import React from 'react';
import styles from './Blog.module.scss';

const Blog = ({ blogs }) => {
    const { id, image, title, time, text_content_1, location, date } = blogs;

    return (
        <div className={styles.blogs}>
            <article key={id} className={styles.blog_article}>
                <div className={styles.image_container}>
                    <a href={`/hillter/blog/${id}`}>
                        <img src={image} alt={title} />
                    </a>
                </div>

                <div className={styles.blog_header}>
                    <span className={styles.blog_date}>
                        <strong>{date.day}</strong>
                        <span>{date.month}</span>
                    </span>
                    <div className={styles.title_container}>
                        <h2>
                            <a href='/#'>{title}</a>
                        </h2>

                        <p>
                            <span>{time}</span> - <span>{location}</span>
                        </p>
                    </div>
                </div>

                <div className={styles.blog_textContent}>
                    <p>{text_content_1}</p>
                </div>
            </article>
        </div>
    );
};

export default Blog;
