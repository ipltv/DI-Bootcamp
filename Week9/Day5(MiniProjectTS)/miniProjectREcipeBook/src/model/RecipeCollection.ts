import type Recipe from './RecipeItem';

export class RecipeCollection {
    private recipes: Recipe[] = [];

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
    }
    removeRecipe(id: string): void {
        this.recipes = this.recipes.filter(item => item.id !== id);
    }
    toggleFavoriteRecipe(id: string): void {
        const recipe = this.recipes.find(item => item.id === id);
        if (recipe) {
            recipe.isFavorite = !recipe.isFavorite;
        }
    }
    saveToLocalStorage(): void {
        localStorage.setItem("RecipeCollection", JSON.stringify(this.recipes));
    }
    loadFromLocalStorage(): void {
        const dataFromStorage = localStorage.getItem("RecipeCollection")
        const parsed = dataFromStorage ? JSON.parse(dataFromStorage) as Recipe[] : null;
        if (Array.isArray(parsed)) {
            this.recipes = parsed;
        }
        else {
            throw new Error("Invalid local storage state.")
        }
    }
    getAllRecipes(): Recipe[] {
        return [...this.recipes];
    }
}

export default RecipeCollection;