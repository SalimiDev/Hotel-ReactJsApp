import React, { useEffect } from 'react';
import ActiveLink from '../../helpers/ActiveLink';
import { useSearchParams } from 'react-router-dom';
//styles
import { FilterBoxContainer } from './CheckAvailibility.styles';

const FilterBox = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let params = Object.fromEntries([...searchParams]);
    const { sortby, showprice } = params;

    //set default values on render
    useEffect(() => {
        setSearchParams({
            ...params,
            sortby: sortby || 'cheapest',
            showprice: showprice || 'pernight',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //handle to set sorting by show prices as highest price or cheapest price
    const handleSortbyPrice = e => {
        setSearchParams({
            ...params,
            sortby: e.target.value,
        });
    };

    //handle to show total prices or prices per night
    const showAmountPrice = e => {
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
                    <select name='sortby' className='filterbox_sortby' onChange={handleSortbyPrice} defaultValue={sortby}>
                        <option value='cheapest'>Cheapest price first</option>
                        <option value='highest'>Highest price first</option>
                    </select>
                </div>
                <div className='filterbox_box-wrap'>
                    <label className='filterbox_label'>Show price:</label>
                    <ul className='filterbox_showprice'>
                        <li className='filterbox_showprice-item'>
                            <ActiveLink name='pernight' onClick={showAmountPrice} to={'/'} color='#888' value={showprice}>
                                Per room per night
                            </ActiveLink>
                        </li>
                        <li className='filterbox_showprice-item'>
                            <ActiveLink name='total' onClick={showAmountPrice} to={'/'} color='#888'>
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
