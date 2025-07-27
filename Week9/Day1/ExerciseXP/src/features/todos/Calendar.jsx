import { useDispatch } from 'react-redux';
import { setSelectedDate } from './todoSlice';
import { useRef } from 'react';

export const Calendar = () => {
  const dispatch = useDispatch();
  const date = useRef();

  const handleChange = () => {
    dispatch(setSelectedDate(date.current.value));
  };

  return (
    <input type='date' ref={date} onChange={handleChange} value={new Date().toISOString().slice(0, 10)}/>
  );
};

export default Calendar;