import { useState, useEffect } from "react";

export const TodoItem = ({ task, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(task.text);

    const handleSave = () => {
        onEdit(value);
        setIsEditing(false);
    };

    //For handling outside changes 
    useEffect(() => {
        setValue(task.text);
    }, [task.text]);

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onToggle}
            />
            {isEditing ? (
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            {isEditing ? (
                <button onClick={handleSave}>💾</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>✏️</button>
            )}
            <button onClick={onDelete}>❌</button>
        </li>
    );
};

export default TodoItem;