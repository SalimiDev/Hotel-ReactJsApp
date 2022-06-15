import '../../styles/utils/_components.scss';

const Room = ({ data, roomNumber }) => {
    const { id, title, image, price, shortDescrip } = data;

    return (
        <>
            <div className='imgContainer'>
                <a href='/'>
                    <img src={image} alt='' />
                </a>
            </div>
            <div className='textSection'>
                <h2>
                    <a href='/'>{title}</a>
                </h2>
                <p className='price'>
                    starting <span>${price}</span>/day
                </p>
                <p className='descrip'>{shortDescrip}</p>

                <button className='btn btn-orange btn-sm'>VIEW DETAILS</button>
            </div>
        </>
    );
};

export default Room;
