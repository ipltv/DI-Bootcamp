import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../redux/reducer';

export const Calendar = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.selectedDate)

    const handleDateChange = (dateObj) => {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const localDate = `${day}-${month}-${year}`;
        dispatch(setSelectedDate(localDate));
    };
    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => handleDateChange(date)}
            dateFormat="dd-MM-yyyy"
            inline
            className='calendar'
        />
    );
};

export default Calendar
