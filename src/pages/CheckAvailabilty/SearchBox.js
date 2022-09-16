import React, { useState, useRef } from 'react';
//styles
import { SearchBoxContainer } from './CheckAvailibility.styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../../styles/utils/_components.scss';
// route
import { useSearchParams } from 'react-router-dom';
//date picker
import { DateObject } from 'react-multi-date-picker';
//hooks
import useOuterClick from '../../hooks/useOuterClick';
//components
import { CheckInInput, CheckOutInput } from '../../components/DatePickerInput';

const SearchBox = () => {
    //get url params data
    const [searchParams, setSearchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    const { check_in, check_out, adults, children } = params;

    //convert string dates from url to object date
    const checkInDate = new DateObject(check_in);
    const checkOutDate = new DateObject(check_out);

    //state to save date range values(contain two dates) from datePicker
    const [dateValues, setDateValues] = useState([checkInDate, checkOutDate]);

    //state to save customers quantity
    const [customer, setCustomer] = useState({
        adults: Number(adults),
        children: Number(children),
    });

    //handle to increase and decrease customers(add quantity of customers)
    const customerCounter = field => {
        if (field === 'adults') {
            setCustomer({
                ...customer,
                adults: customer.adults < 6 ? customer.adults + 1 : 0,
            });
        }
        if (field === 'children') {
            setCustomer({
                ...customer,
                children: customer.children < 6 ? customer.children + 1 : 0,
            });
        }
    };

    //handle to set new search request data to url as a queryString(search params)
    const onClickHandler = e => {
        e.preventDefault();
        setSearchParams({
            ...params,
            check_in: dateValues[0]?.format('YYYY-MM-DD'),
            check_out: dateValues[1]?.format('YYYY-MM-DD'),
            adults: customer.adults || 1,
            children: customer.children,
        });
    };

    //handle open and close customers field
    const [activePopup, setActivePopup] = useState(false);
    const elementRef = useRef();
    useOuterClick(elementRef, setActivePopup);

    return (
        <SearchBoxContainer className='searchbox'>
            <form className='searchbox-form'>
                <div className='date-input_container'>
                    <label className='input-label'>Check In</label>
                    <div className='date-input'>
                        <CheckInInput props={{ dateValues, setDateValues }} />
                    </div>
                </div>
                <div className='date-input_container'>
                    <label className='input-label'>Check Out</label>
                    <div className='date-input'>
                        <CheckOutInput props={{ dateValues, setDateValues }} />
                    </div>
                </div>

                <div className='customers-field' ref={elementRef}>
                    <label className='input-label'>Customers</label>
                    <div className='customers' onClick={() => setActivePopup(!activePopup)}>
                        <span>{adults} adults</span> , <span>{children} children</span>
                    </div>
                    {activePopup && (
                        <div id='popup-field'>
                            <div className='adults-field_container'>
                                <div className='input-field'>
                                    <label className='field-label'>Adults</label>
                                    <input type='text' value={customer.adults} onChange={customerCounter} />
                                </div>
                                <div className='counter'>
                                    <span onClick={() => customerCounter('adults')}>
                                        <AddCircleIcon sx={{ fontSize: 30 }} />
                                    </span>
                                </div>
                            </div>

                            <div className='children-field_container'>
                                <div className='input-field'>
                                    <label className='field-label'>Children</label>
                                    <input type='text' value={customer.children} onChange={customerCounter} />
                                </div>
                                <div className='counter'>
                                    <span onClick={() => customerCounter('children')}>
                                        <AddCircleIcon sx={{ fontSize: 30 }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='button-container'>
                    <button className='btn btn-lg btn-orange' onClick={onClickHandler}>
                        Check Availability
                    </button>
                </div>
            </form>
        </SearchBoxContainer>
    );
};

export default SearchBox;
