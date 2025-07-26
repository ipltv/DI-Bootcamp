import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/reducer';

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.planner.selectedDate);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;

        dispatch(
            addTask({
                date: selectedDate,
                task: {
                    text: trimmed,
                    completed: false,
                },
            })
        );

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '1em' }}>
            <input
                type="text"
                placeholder="Enter new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTask;
