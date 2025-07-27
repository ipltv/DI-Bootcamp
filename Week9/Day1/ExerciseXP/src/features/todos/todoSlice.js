import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDate: new Date().toISOString().slice(0, 10),
    tasksByDate: {},
};

const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        setSelectedDate(state, action) {
            state.selectedDate = action.payload;
            console.log(`setSelectedDate => ${action.payload}`)
        },
        addTask(state, action) {
            const { date, task } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push({ ...task, id: Date.now(), completed: false });
            console.log(`addTask => ${task}`);
        },
        editTask(state, action) {
            const { date, taskId, updatedText } = action.payload;
            const task = state.tasksByDate[date]?.find(t => t.id === taskId);
            if (task) task.text = updatedText;
        },
        deleteTask(state, action) {
            const { date, taskId } = action.payload;
            state.tasksByDate[date] = state.tasksByDate[date]?.filter(t => t.id !== taskId);
            console.log(`deleteTask => ${taskId}`);

        },
        toggleTask(state, action) {
            const { date, taskId } = action.payload;
            const task = state.tasksByDate[date]?.find(t => t.id === taskId);
            if (task) task.completed = !task.completed;
        },
    },
});

export const { setSelectedDate, addTask, editTask, deleteTask, toggleTask } = plannerSlice.actions;
export default plannerSlice.reducer;
