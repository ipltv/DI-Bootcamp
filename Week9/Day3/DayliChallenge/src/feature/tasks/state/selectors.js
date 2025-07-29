import { createSelector } from "@reduxjs/toolkit";
import { selectTasksState, selectSelectedCategoryState , selectCategoriesState } from "./taskSlice";

export const selectTasksByCategory = createSelector(
    [selectTasksState, selectSelectedCategoryState ],
    (tasks, category) => {
        return tasks.allIds
            .map(id => tasks.byId[id])
            .filter(task => task.categoryId === category);
    });

export const selectCompletedTasks = createSelector(
    [selectTasksState],
    (tasks) => {
        return tasks.allIds
            .map(id => tasks.byId[id])
            .filter(task => task.completed)
            .length;
    }
);

export const selectCategoryByName = createSelector(
    [selectCategoriesState, (state, categoryName) => categoryName],
    (categories, categoryName) => { return categories.find(cat => cat === categoryName); }
);