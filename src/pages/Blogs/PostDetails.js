import React from 'react';
import styles from './Posts.module.scss';
//router
import { useParams } from 'react-router-dom';
//components
import ContactUsForm from '../../components/ContactUsForm';
import PagesSideBar from '../../components/PagesSideBar';
//data
import { blogData } from '../../data/blogData';

const PostDetails = () => {
    // get from url
    const { postTitle } = useParams();
    const urlAddress = postTitle.replaceAll('_', ' ');
    // get selected post data
    const post = blogData.find(post => post.title.toLowerCase() === urlAddress);
    //destructuring post data
    const {
        id,
        image,
        title,
        time,
        location,
        date,
        second_title,
        description,
        items,
        text_content_1,
        text_content_2,
        text_content_3,
    } = post || [];

    // show top of page
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);

    return (
        <div className={styles.posts}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>{urlAddress.toUpperCase()}</h2>
                        <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </header>

            <div className={styles.content_container}>
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
                            <h2 className={styles.post_title}>{title}</h2>

                            <p className={styles.location}>
                                <span>{time}</span> - <span>{location}</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.post_content}>
                        <p>{text_content_1}</p>

                        <section className={styles.details_container}>
                            <h2 className={styles.post_title}>{second_title}</h2>
                            <p>{description}</p>

                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <blockquote>
                                <p>{text_content_2}</p>
                            </blockquote>
                            <p>{text_content_3} </p>
                        </section>
                    </div>

                    <section className={styles.leave_comment}>
                        <h5 className={styles.form_title}>LEAVE COMMENT</h5>
                        <ContactUsForm />
                    </section>
                </article>

                <aside className={styles.sidebar}>
                    <PagesSideBar />
                </aside>
            </div>
        </div>
    );
};

export default PostDetails;
