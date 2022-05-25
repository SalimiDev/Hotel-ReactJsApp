import styles from '../styles/layout/News.module.scss';
import { blogData } from '../data/blogData';
import '../styles/utils/_components.scss';

const News = () => {
    return (
        <section className={styles.news_section}>
            <div className={styles.container}>
                <div className={styles.header_content}>
                    <h2>NEWS</h2>
                    <p>Lorem Ipsum is simply dummy</p>
                </div>

                {blogData.slice(0, 3).map((item, index) => (
                    <div className={styles.content} key={index}>
                        <figure className={styles.content_image}>
                            <a href='/#'>
                                <img src={item.image} alt={item.category} />
                            </a>
                        </figure>
                        <div className={styles.content_preview}>
                            <span>May 23,2022</span>
                            <h3>
                                <a href='/#'>{item.title}</a>
                            </h3>
                            <a href='/#'>[Read More]</a>
                        </div>
                    </div>
                ))}
                <button className='btn btn-sm btn-trans-black'>View More</button>
            </div>
        </section>
    );
};

export default News;
