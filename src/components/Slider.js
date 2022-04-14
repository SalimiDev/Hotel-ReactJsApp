import { useState } from 'react';
//Styles
import '../styles/utils/_components.scss';
import styles from '../styles/layout/Slider.module.scss';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
//Slider data
import { sliderData } from '../data/sliderData';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    //create dynamic class
    const current = 'current_' + currentSlide;

    return (
        <div className={styles.container}>
            <span id={styles.next}>
                <ArrowForwardIos />
            </span>
            <span id={styles.prev}>
                <ArrowBackIosNew />
            </span>
            {sliderData.map((slide, index) => (
                <div key={index}>
                    {index === currentSlide && (
                        <div className={styles[current]} style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className={styles.caption}>
                                {slide.caption}
                                <button className={`btn btn-xl btn-trans-${(index === 1 ? 'black' : 'white')}`}>
                                    VIEW NOW
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Slider;
