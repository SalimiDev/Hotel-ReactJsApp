//Slider Images
import { slider } from '../assets/images';
const { slide1, slide2, slide3, Icon1, Icon2, Icon3, Icon4 } = slider;

//Slider captions data
const captions = {
    text_1: 
        <>
            <span><img src={Icon1} alt="Icon" /></span>
            <div>
                <h2>
                     <span><img src={Icon2} alt="Icon" /></span>
                     EACH HOTEL IS 
                     <span><img src={Icon3} alt="Icon" /></span>
                </h2>
            </div>
            <h1>UNIQUE 60%</h1>
            <h2>JUST LIKE YOU</h2>
            <span><img src={Icon4} alt="Icon" /></span>
        </>,
    text_2:
        <>
            <h2>EARLY BOOKING BONUS SALE</h2>
            <h1>SAVE<small>UP<br/>TO</small> 60%</h1>
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
        caption: captions.text_1,
    },
    {
        image: slide2,
        caption: captions.text_2,
    },
    {
        image: slide3,
        caption: captions.text_3,
    },
];
