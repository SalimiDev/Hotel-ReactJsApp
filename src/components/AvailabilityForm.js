import React, { useState } from 'react';
import styles from '../styles/layout/AvailabilityForm.module.scss';
import { CheckRounded } from '@mui/icons-material';
//date picker
import DatePicker, { DateObject } from 'react-multi-date-picker';
import transition from 'react-element-popper/animations/transition';
//route
import { useNavigate } from 'react-router-dom';

const AvailabilityForm = () => {
    //States
    const [values, setValues] = useState([new DateObject(), new DateObject().add(1, 'days')]);
    const [checkAvailabilty, setCheckAvailability] = useState({});
    const [select, setSelect] = useState({
        adults: '',
        children: '',
    });

    //Options array
    const optionList = [
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
    ];
    //Map on options array to create ui list
    const options = optionList.map(option => (
        <option value={option.value} key={option.value}>
            {option.text}
        </option>
    ));

    //Handle to add 'adult' and 'children' select value to select state
    const handleSelectChange = event => {
        setSelect({ ...select, [event.target.name]: event.target.value });
    };

    //Handle to add value of form to checkAvailability state
    const onClickHandler = e => {
        e.preventDefault();
        setCheckAvailability({
            checkIn: values[0],
            checkOut: values[1],
            adults: select.adults,
            children: select.children,
        });
    };

    console.log(checkAvailabilty);

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
                        <DatePicker
                            range
                            value={values}
                            onChange={setValues}
                            animations={[transition()]}
                            containerClassName={styles.date_picker}
                            render={(value, openCalendar) => {
                                return <input type='text' defaultValue={value[0]} onClick={openCalendar} />;
                            }}
                        />
                        <DatePicker
                            range
                            value={values}
                            onChange={setValues}
                            animations={[transition()]}
                            containerClassName={styles.date_picker}
                            render={(value, openCalendar) => {
                                return (
                                    <input
                                        type='text'
                                        defaultValue={value[1]}
                                        onClick={openCalendar}
                                        placeholder='Departure Date'
                                    />
                                );
                            }}
                        />
                    </div>
                    <div className={styles.capacity_container}>
                        <select name='adults' value={select.adults} onChange={handleSelectChange}>
                            <option value='Adults'>Adults</option>
                            {options}
                        </select>
                        <select name='children' value={select.children} onChange={handleSelectChange}>
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
