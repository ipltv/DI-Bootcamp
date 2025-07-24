export const ACTION_ADD_TASK = 'ADD_TASK'
export const ACTION_DELETE_TASK = 'DELETE_TASK'
export const ACTION_TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export const addTodo = (text) => {
    return {
        type: ACTION_ADD_TASK,
        payload: text,
    };
};

export const deleteTodo = (taskId) => {
    return {
        type: ACTION_DELETE_TASK,
        id: taskId,
    };
};


export const completeTodo = (taskId) => {
    return {
        type: ACTION_TOGGLE_COMPLETE,
        id: taskId,
    };
};