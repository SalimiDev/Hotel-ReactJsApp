import React from 'react';
import styles from './Posts.module.scss';
import ContactUsForm from '../../components/ContactUsForm';

const PostDetails = ({ post }) => {
    const {
        id,
        image,
        title,
        time,
        text_content_1,
        location,
        date,
        second_title,
        description,
        items,
        text_content_2,
        text_content_3,
    } = post;
    console.log(items);

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
                        <strong>{date.day}</strong>
                        <span>{date.month}</span>
                    </span>
                    <div className={styles.title_container}>
                        <h2 className={styles.post_title}>
                            <a href='/#'>{title}</a>
                        </h2>

                        <p className={styles.location}>
                            <span>{time}</span> - <span>{location}</span>
                        </p>
                    </div>
                </div>

                <div className={styles.post_content}>
                    <p>{text_content_1}</p>

                    <section className={styles.details_container}>
                        <h2 className={styles.post_title}>
                            <a href='/#'>{second_title}</a>
                        </h2>
                        <p>{description}</p>

                        <ul>
                            {items.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>

                        <blockquote>
                            <p>{text_content_2}</p>
                        </blockquote>
                        <p>{text_content_3} </p>
                    </section>
                </div>
            </article>
            
            <section className={styles.leave_comment}>
                <h5 className={styles.form_title}>LEAVE COMMENT</h5>
                <ContactUsForm />
            </section>
        </div>
    );
};

export default PostDetails;
