import { useState, useEffect } from 'react';
//Styles
import '../styles/utils/_components.scss';
import styles from '../styles/layout/Slider.module.scss';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
//Slider data
import { sliderData } from '../data/sliderData';

const Slider = () => {
    //initialize current slide state
    const [currentSlide, setCurrentSlide] = useState(0);

    //create dynamic class
    const current = 'current_' + currentSlide;

    //for now slider length is equal to 3
    const slideLength = sliderData.length;

    //variables for create auto scrolling slider
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    //set the current slide to zero when page rendered
    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    //add onClick event handler to the slide's next & prev
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    //functionality of auto scroll slider
    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    };
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className={styles.container}>
            <span id={styles.next}>
                <ArrowForwardIos onClick={nextSlide} />
            </span>
            <span id={styles.prev}>
                <ArrowBackIosNew onClick={prevSlide} />
            </span>
            {sliderData.map((slide, index) => (
                <div key={index}>
                    {index === currentSlide && (
                        <div className={styles[current]} style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className={styles.caption}>
                                {slide.caption}
                                <button className={`btn btn-xl btn-trans-${index === 1 ? 'black' : 'white'}`}>
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
