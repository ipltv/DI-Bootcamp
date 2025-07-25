import { configureStore } from "@reduxjs/toolkit";
import planerReducer from './reducer'

const store = configureStore ({reducer: {planner: planerReducer}});
export default store;