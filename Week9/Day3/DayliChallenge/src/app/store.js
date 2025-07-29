    import {configureStore} from '@reduxjs/toolkit';
    import taskReducer from '../feature/tasks/state/taskSlice'

    const store = configureStore({
        reducer: {
            todos: taskReducer,
        }
    })

    export default store;