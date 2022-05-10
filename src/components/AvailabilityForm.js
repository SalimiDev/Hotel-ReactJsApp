import React from 'react';
import styles from '../styles/layout/AvailabilityForm.module.scss';
import { CheckRounded } from '@mui/icons-material';

const AvailabilityForm = () => {
    //Get current date
    const currentDate = (date, day) => {
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
        const formatMap = {
            mm: month,
            dd: date.getDate() + day,
            yyyy: date.getFullYear(),
        };
        const { mm, dd, yyyy } = formatMap;
        const dateFormat = `${mm} ${dd} , ${yyyy}`;
        return dateFormat;
    };

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.title_container}>
                    <div className={styles.check_availability_title}>
                        <span className={styles.check_icon}>
                            <CheckRounded />
                        </span>
                        <h2>Check Availability</h2>
                    </div>
                </div>
                <form action='submit' className={styles.availability_form}>
                    <div className={styles.date_container}>
                        <input type='text' defaultValue={currentDate(new Date(), 0)} />
                        <input type='text' defaultValue={currentDate(new Date(), 1)} />
                    </div>
                    <div className={styles.capacity_container}>
                        <select>
                            <option value='Adults'>Adults</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
                        <select>
                            <option value='children'>Children</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-lg btn-orange'>
                        check Availability
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AvailabilityForm;
