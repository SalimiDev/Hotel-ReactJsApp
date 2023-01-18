import React, { useState } from 'react';
//styles
import styles from '../styles/layout/AvailabilityForm.module.scss';
import { CheckRounded } from '@mui/icons-material';
//date picker
import { DateObject } from 'react-multi-date-picker';
//route
import { useNavigate } from 'react-router-dom';
//components
import { CheckInInput, CheckOutInput } from './DatePickerInput';

const AvailabilityForm = () => {
    const navigate = useNavigate();

    //state to save date range values(contain two dates) from datePicker
    const [dateValues, setDateValues] = useState([new DateObject(), new DateObject().add(1, 'days')]);

    //select field(room capacity) data
    const [capacity, setCapacity] = useState({
        adults: '',
        children: '',
    });

    //Options array (customers quantity list)
    const optionList = [
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
    ];

    //create customers quantity list ui
    const options = optionList.map(option => (
        <option value={option.value} key={option.value}>
            {option.text}
        </option>
    ));

    //handle to add customers value to select state
    const handleSelectChange = event => {
        setCapacity({ ...capacity, [event.target.name]: event.target.value });
    };

    //onClick handler to set availabilty request data to url and navigate to checkAvailability page
    const onClickHandler = e => {
        e.preventDefault();

        navigate(
            `/hillter/check-availability/?check_in=${dateValues[0]}&check_out=${dateValues[1]}&adults=${
                capacity.adults || 0
            }&children=${capacity.children || 0}`,
        );

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
                <form className={styles.availability_form}>
                    <div className={styles.date_container}>
                        <CheckInInput props={{ dateValues, setDateValues }} />
                        <CheckOutInput props={{ dateValues, setDateValues }} />
                    </div>
                    <div className={styles.capacity_container}>
                        <select name='adults' value={capacity.adults} onChange={handleSelectChange}>
                            <option value='Adults'>Adults</option>
                            {options}
                        </select>
                        <select name='children' value={capacity.children} onChange={handleSelectChange}>
                            <option value='children'>Children</option>
                            {options}
                        </select>
                    </div>
                    <button className='btn btn-lg btn-orange' onClick={onClickHandler}>
                        Check Availability
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AvailabilityForm;
