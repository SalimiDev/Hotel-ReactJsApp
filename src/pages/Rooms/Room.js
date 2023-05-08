import '../../styles/utils/_components.scss';
import { useNavigate } from 'react-router-dom';

const Room = ({ data, roomNumber }) => {
    const { id, title, image, price, shortDescrip } = data;

    const navigate = useNavigate();

    return (
        <>
            {roomNumber === 1 && (
                <h2 id='room1TitleActive'>
                    <a href='/'>{title}</a>
                </h2>
            )}

            <div className='imgContainer'>
                <a href='/'>
                    <img src={image} alt='' />
                </a>
            </div>

            <div className='textSection'>
                {roomNumber !== 1 && (
                    <>
                        <h2>
                            <a href='/'>{title}</a>
                        </h2>
                        <p className='price'>
                            starting <span>${price}</span>/day
                        </p>
                    </>
                )}

                <p className='descrip'>{shortDescrip}</p>
                <div className='btnContainer'>
                    {roomNumber === 1 && (
                        <p className='room1Price'>
                            starting <span>${price}</span>/day
                        </p>
                    )}

                    <button
                        className='btn btn-orange btn-sm'
                        onClick={() => navigate(`/hillter/rooms/details/${title.toLowerCase().replace(/ /g, '_')}`)}>
                        VIEW DETAILS
                    </button>
                </div>
            </div>

            {roomNumber === 3 && (
                <a href='/#'>
                    <div className='imgSmall' style={{ backgroundImage: `url(${image})` }}></div>
                </a>
            )}
        </>
    );
};

export default Room;
