import React from 'react';
//styles
import { FilterBoxContainer } from './CheckAvailibility.styles';
import ActiveLink from '../../helpers/ActiveLink';
import { useSearchParams } from 'react-router-dom';

const FilterBox = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let params = Object.fromEntries([...searchParams]);

    const showPrice = e => {
        e.preventDefault();
        setSearchParams({
            ...params,
            showprice: e.target.name,
        });
    };

    return (
        <FilterBoxContainer className='filterbox'>
            <div className='filterbox_box'>
                <div className='filterbox_box-wrap'>
                    <label className='filterbox_label'>Sort by:</label>
                    <select name='sortby' className='filterbox_sortby'>
                        <option value=''>Cheapest price first</option>
                        <option value=''>Highest price first</option>
                    </select>
                </div>
                <div className='filterbox_box-wrap'>
                    <label className='filterbox_label'>Show price:</label>
                    <ul className='filterbox_showprice'>
                        <li className='filterbox_showprice-item'>
                            <ActiveLink name='pernight' onClick={showPrice} to={'/'} color='#888'>
                                Per room per night
                            </ActiveLink>
                        </li>
                        <li className='filterbox_showprice-item'>
                            <ActiveLink name='total' onClick={showPrice} to={'/'} color='#888'>
                                Price for whole stay
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </FilterBoxContainer>
    );
};

export default FilterBox;
