import { RoomContainer } from './RoomStyled';
import '../../styles/utils/_components.scss';

const Room = ({ data }) => {
    const { id, title, image, price, shortDescrip } = data;

    return (
        <RoomContainer className='room'>
            <div className='room-wrapper'>
                <h2>
                    <a href='/'>{title}</a>
                </h2>
                <div className='imgContainer'>
                    <a href='/'>
                        <img src={image} alt='' />
                    </a>
                </div>
                <p className='descrip'>{shortDescrip}</p>
                <div className='priceContaienr'>
                    <p className='price'>
                        starting <span>${price}</span>/day
                    </p>
                    <button className='btn btn-orange btn-sm'>VIEW DETAILS</button>
                </div>
            </div>
        </RoomContainer>
    );
};

export default Room;
