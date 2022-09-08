import DatePicker from 'react-multi-date-picker';
import transition from 'react-element-popper/animations/transition';

//check in input
const CheckInInput = ({ props }) => {
    const { dateValues, setDateValues } = props;
    return (
        <>
            <DatePicker
                range
                value={dateValues}
                onChange={setDateValues}
                animations={[transition()]}
                render={(value, openCalendar) => {
                    return <input type='text' defaultValue={value[0]} onClick={openCalendar} placeholder='Departure Date' />;
                }}
            />
        </>
    );
};
//check out input
const CheckOutInput = ({ props }) => {
    const { dateValues, setDateValues } = props;
    return (
        <>
            <DatePicker
                range
                value={dateValues}
                onChange={setDateValues}
                animations={[transition()]}
                render={(value, openCalendar) => {
                    return <input type='text' defaultValue={value[1]} onClick={openCalendar} placeholder='Departure Date' />;
                }}
            />
        </>
    );
};

export { CheckInInput, CheckOutInput };
