//Slider Images
import slide1 from '../assets/images/Slide_1.jpg';
import slide2 from '../assets/images/Slide_2.jpg';
import slide3 from '../assets/images/Slide_3.jpg';

//Sliders Icon
import Icon1 from '../assets/images/icon-slider-1.png';
import Icon2 from '../assets/images/icon-slider-2.png';
import Icon3 from '../assets/images/icon-slider-3.png';
import Icon4 from '../assets/images/icon-slider-4.png';

//Slider captions data
const captions = {
    text_1: 
        <>
            <span><img src={Icon1} alt="Icon" /></span>
            <div>
                <span><img src={Icon2} alt="Icon" /></span>
                <h2>EACH HOTEL IS</h2>
                <span><img src={Icon3} alt="Icon" /></span>
            </div>
            <h1>UNIQUE 60%</h1>
            <span><img src={Icon4} alt="Icon" /></span>
        </>,
    text_2:
        <>
            <h2>EARLY BOOKING BONUS SALE</h2>
            <h1>SAVES <small>UP<br/>TO</small> 60%</h1>
        </>,
    text_3:
        <>
            <h2>NEW BAKERY</h2>
            <h1>BAKERY SALLAD</h1>
        </>
};

export const sliderData = [
    {
        image: slide1,
        caption:captions.text_1
    },
    {
        image: slide2,
        caption:captions.text_2
    },
    {
        image: slide3,
        caption:captions.text_3
    },
];
