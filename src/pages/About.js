import React from 'react';
import styles from '../styles/pages/About.module.scss';
import about1 from '../assets/images/about-1.jpg';
import about2 from '../assets/images/about-2.jpg';
import { teamMemberData } from '../data/teamMemberData';

const About = () => {
    return (
        <div className={styles.about}>
            <header>
                <div className={styles.topBanner}>
                    <div className={styles.title}>
                        <h2>ABOUT HILLTER</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.article_container}>
                    <article className={styles.article_1}>
                        <img src={about1} alt='ABOUT HILLTER' />
                        <div className={styles.text_container}>
                            <h2>ABOUT HILLTER</h2>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a
                                page when looking at its layout.
                                <b> The point of using Lorem Ipsum is that it has a more-or-less normal</b>
                                distribution of letters, as opposed to using ‘Content here, content here’, making it look
                                like readable English. Many desktop publishing packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites
                                still in their infancy.
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don’t look
                                even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                                sure there isn’t anything embarrassing hidden in the middle of text.
                            </p>
                        </div>
                    </article>
                    <article className={styles.article_2}>
                        <img src={about2} alt='GUEST CHOOSE' />
                        <div className={styles.text_container}>
                            <h2>WHY GUEST CHOOSE HILLTER HOTEL?</h2>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a
                                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using ‘Content here, content here’, making it
                                look like readable English. Many desktop publishing packages and web page editors now use
                                Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web
                                sites still in their infancy. Various versions have evolved over the years,
                                <b> sometimes by accident, sometimes on purpose </b> (injected humour and the like).
                            </p>
                        </div>
                    </article>
                </div>
                <div className={styles.counter_banner}>
                    <div className={styles.content}>
                        <div className={styles.heading}>
                            <h2>TEAM MEMBER</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        <div className={styles.counter_container}>
                            <div className={styles.counter}>
                                <span>800</span>
                                <span>SampleText</span>
                            </div>
                            <div className={styles.counter}>
                                <span>800</span>
                                <span>SampleText</span>
                            </div>
                            <div className={styles.counter}>
                                <span>800</span>
                                <span>SampleText</span>
                            </div>
                            <div className={styles.counter}>
                                <span>800</span>
                                <span>SampleText</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
