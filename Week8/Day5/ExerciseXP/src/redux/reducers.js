import { ACTION_ADD_TASK, ACTION_DELETE_TASK, ACTION_TOGGLE_COMPLETE } from "./actions";

const initialState = { tasks: [] };

export function toDoListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_ADD_TASK:
            const newTask = {id: Date.now(), text: action.payload, isCompleted: false}
            return {...state, tasks: [...state.tasks, newTask]};
        case ACTION_DELETE_TASK:
            return {...state, tasks: state.tasks.filter(item => item.id !== action.id)};
        case ACTION_TOGGLE_COMPLETE:
            return {...state, tasks: state.tasks.map(item => item.id === action.id ? {...item, isCompleted:!item.isCompleted} : item)};
        default:
            return state;
    }
}