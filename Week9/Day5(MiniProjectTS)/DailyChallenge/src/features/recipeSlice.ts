import { createGenericSlice, createFetchThunk } from './dataSlice';
import { type Recipe } from '../types/types';

export const fetchRecipes = createFetchThunk<Recipe[]>('recipes/fetch');
const recipeSlice = createGenericSlice<Recipe[]>('recipes', fetchRecipes);
export const recipeReducer = recipeSlice.reducer;
