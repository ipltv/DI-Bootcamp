import type Recipe from './RecipeItem';

export class RecipeCollection {
    private recipes: Recipe[] = [];

    addRecipe(recipe: Recipe): void {
        throw new Error("Method is not implemented yet.");
    }
    removeRecipe(id: string): void {
        throw new Error("Method is not implemented yet.");
    }
    toggleFavoriteRecipe(id: string): void {
        throw new Error("Method is not implemented yet.");
    }
    saveToLocalStorage(): void {
        throw new Error("Method is not implemented yet.");
    }
    loadFromLocalStorage(): void {
        throw new Error("Method is not implemented yet.");
    }
    getAllRecipes(): Recipe[] {
        return [...this.recipes];
    }
}

export default RecipeCollection;