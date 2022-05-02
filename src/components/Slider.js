import { useState, useEffect } from 'react';
//Styles
import '../styles/utils/_components.scss';
import '../styles/utils/_animations.scss';
import styles from '../styles/layout/Slider.module.scss';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
//Slider data
import { sliderData } from '../data/sliderData';

const Slider = () => {
    //initialize current slide state
    const [currentSlide, setCurrentSlide] = useState(0);

    //create dynamic class for captions
    const caption = 'caption_' + currentSlide;

    //slider length is equal to 3
    const slideLength = sliderData.length;

    //variables for create auto scrolling slider
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 6500;

    //create random class name that choose from an array to set randomize slider animations
    const animationName = [
        'crown-bottom-right',
        'swing-in-top-fwd',
        'poster-back-left',
        'scale-in-center',
        'puff-in-center',
        'poster-left',
    ];
    const randomEffect = animationName[Math.floor(Math.random() * animationName.length)];

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
        <div className={styles.slider}>
            {sliderData.map((data, index) => (
                <div
                    key={index}
                    className={`${currentSlide === index && styles.current} ${
                        currentSlide === index && `animate ${randomEffect}`
                    }  `}
                    style={{ backgroundImage: `url(${data.image})` }}>
                    <div
                        className={`${index - currentSlide - 1 && styles.prevSlide}`}
                        style={{ backgroundImage: `url(${data.image})` }}>
                        {index === currentSlide && (
                            <div className={`${currentSlide === index && styles[caption]} text-animate`}>
                                {data.caption}
                                <button className={`btn btn-trans-${index === 1 ? 'black' : 'white'}`}>VIEW NOW</button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <span id={styles.next}>
                <ArrowForwardIos onClick={nextSlide} />
            </span>
            <span id={styles.prev}>
                <ArrowBackIosNew onClick={prevSlide} />
            </span>
        </div>
    );
};

export default Slider;
