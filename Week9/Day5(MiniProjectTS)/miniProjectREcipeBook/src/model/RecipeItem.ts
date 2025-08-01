export class Recipe {
    //Fields
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    isFavorite: boolean;

    constructor(id: string, title: string, ingredients: string[], instructions: string, isFavorite: boolean) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.isFavorite = isFavorite;
    }
    toggleFavorite(): void {
        this.isFavorite = !this.isFavorite;
    }
}

export default Recipe;