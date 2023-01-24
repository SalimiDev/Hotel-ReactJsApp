import React from 'react';
//styles
import styles from './RoomCard.module.scss';
import '../../styles/utils/_components.scss';

import { useSearchParams } from 'react-router-dom';
import dateDiffInDays from '../../helpers/dateDiffInDays';

import { Check, Bed, LocationCity, SquareFoot, Person, Face } from '@mui/icons-material';

const RoomCard = ({ availableRoom, roomFilter }) => {
    const [bookParams, setBookParams] = useSearchParams();

    const {
        id,
        title,
        price,
        image,
        roomInfo,
        inclusions,
        policies,
        remainRoom,
        capacity: { adult, children },
    } = availableRoom;

    //organize icons for lists
    const roomInfoIcons = [<LocationCity />, <SquareFoot />, <Bed />];

    // handle selected room(booked room)
    let params = Object.fromEntries([...bookParams]);
    const handleBook = id => {
        setBookParams({ ...params, room_id: id });
    };

    //show rooms with total price
    const daysStay = dateDiffInDays(new Date(roomFilter.check_in), new Date(roomFilter.check_out));
    const totalPrice = daysStay * price;
    const { showprice } = roomFilter;

    return (
        <section className={styles.roomCard}>
            <header className={styles.roomCard_header}>
                <h3 className={styles.roomCard_header_title}>
                    <a href='/'>{title}</a>
                </h3>
            </header>

            <div className={styles.roomCard_content}>
                <div className={styles.content_columns}>
                    <div className={styles.content_columns_left}>
                        <div className={styles.roomCard_info}>
                            <figure className={styles.roomCard_info_image}>
                                <img src={image} alt='room' />
                            </figure>
                            <ul className={styles.roomCard_info_list}>
                                {roomInfo.map((item, index) => (
                                    <span key={index} style={{ display: 'flex' }}>
                                        {roomInfoIcons[index]}
                                        <li className={styles.info_item}>{item}</li>
                                    </span>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.content_columns_right}>
                        <div className={styles.roomCard_lists}>
                            <ul className={styles.roomCard_lists_header}>
                                <li className={styles.deal_title}>Choose your deal</li>
                                <li className={styles.capacity_title}>Capacity</li>
                                <li className={styles.price_title}>price</li>
                                <li></li>
                            </ul>

                            <div className={styles.roomCard_lists_content}>
                                <div className={styles.roomCard_deal}>
                                    <h4 className={styles.roomCard_content_title}>Choose your deal</h4>
                                    <div className={styles.roomCard_deal_info}>
                                        <h6 className={styles.deal_info_title}>Inclusions</h6>
                                        <ul className={styles.deal_info_items}>
                                            {inclusions.map((item, index) => (
                                                <span key={index} className={styles.item_wrapper}>
                                                    <Check sx={{ fontSize: 15 }} style={{ marginRight: '4px' }} />
                                                    <li>{item}</li>
                                                </span>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.roomCard_deal_info}>
                                        <h6 className={styles.deal_info_title}>Policies</h6>
                                        <ul className={styles.deal_info_items}>
                                            {policies.map((item, index) => (
                                                <span key={index} className={styles.item_wrapper}>
                                                    <Check sx={{ fontSize: 15 }} style={{ marginRight: '4px' }} />
                                                    <li>{item}</li>
                                                </span>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.roomCard_capacity}>
                                    <h4 className={styles.roomCard_content_title}>Capacity</h4>
                                    <ul className={styles.roomCard_capacity_list}>
                                        <li style={{ display: 'flex', justifyContent: 'center' }}>
                                            {adult} x
                                            <Person sx={{ fontSize: 20 }} />
                                        </li>

                                        <li style={{ display: 'flex', justifyContent: 'center' }}>
                                            {children} x
                                            <Face sx={{ fontSize: 19 }} />
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.roomCard_price}>
                                    <h4 className={styles.roomCard_content_title}>Price</h4>
                                    <span className={styles.awebooking_price}>
                                        ${showprice === 'total' ? totalPrice : price}
                                    </span>
                                    <span>Cost for {daysStay} nights</span>
                                </div>

                                <div className={styles.roomCard_button}>
                                    <div className={styles.button_wrapper}>
                                        <button className='btn btn-sm btn-orange' onClick={() => handleBook(id)}>
                                            BOOK NOW
                                        </button>
                                        <span>{remainRoom} rooms left</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomCard;
