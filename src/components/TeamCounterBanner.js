import React from 'react';
import styles from '../styles/layout/TeamCounterBanner.module.scss';

const TeamCounterBanner = () => {
    return (
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
    );
};

export default TeamCounterBanner;
