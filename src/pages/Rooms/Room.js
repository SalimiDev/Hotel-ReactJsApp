import React from 'react';

const Room = ({ data }) => {
    const { id, title, image, price, shortDescrip } = data;

    return (
        <div className='room'>
            <div className='container'>
                <h2>{title}</h2>
                <div className='imgContainer'>
                    <a href='/'>
                        <img src={image} alt='' />
                    </a>
                </div>
                <p className='descrip'>{shortDescrip}</p>
                <div className='priceContaienr'>
                    <p className='price'>
                        starting <span>{price}</span>/day
                    </p>
                    <button>VIEW DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default Room;
