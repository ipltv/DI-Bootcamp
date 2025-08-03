<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite + TS</title>
</head>

<body>
  <div class="recipe-app">
    <form id="recipeEntryForm">
      <input type="text" id="recipeTitle" placeholder="Recipe Title" required />
      <textarea id="ingredients" placeholder="Enter ingredients (one per line)" required></textarea>
      <textarea id="instructions" placeholder="Enter cooking instructions" required></textarea>
      <button type="submit">Add Recipe</button>
    </form>

    <div id="recipeContainer"></div>

    <button id="clearRecipesButton">Clear All Recipes</button>
  </div>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>

import './style.css'
import RecipeCollection from './model/RecipeCollection';
import Recipe from './model/RecipeItem'
import RecipeTemplate from './templates/RecipeTemplate';
import { v4 as uuid } from 'uuid'

const seedRecipes: Recipe[] = [
  new Recipe(
    uuid(),
    "Spaghetti Bolognese",
    ["Spaghetti", "Minced beef", "Tomato sauce", "Onion", "Garlic"],
    "Cook spaghetti. Brown the beef. Add sauce and simmer. Combine.",
    false
  ),
  new Recipe(
    uuid(),
    "Greek Salad",
    ["Tomatoes", "Cucumbers", "Red onion", "Feta cheese", "Olives"],
    "Chop all ingredients and mix with olive oil and vinegar.",
    true
  ),
  new Recipe(
    uuid(),
    "Pancakes",
    ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
    "Mix ingredients and fry on a pan until golden brown.",
    false
  ),
];

const collection = new RecipeCollection();
try {
  collection.loadFromLocalStorage();
} catch (error) {
  console.log("Initial loading error: " + error);
}

if (collection.getAllRecipes().length === 0) {
  seedRecipes.forEach(item => collection.addRecipe(item));
  collection.saveToLocalStorage();
}


const container = document.getElementById('recipeContainer');
const template = new RecipeTemplate(collection, () => { });
template.setReRenderCallback(() => {
  collection.saveToLocalStorage();
  console.log('Inside callbackdelete');

  if (container) {
    container.innerHTML = '';
    container.appendChild(template.renderAllRecipeCards());

  }
});

const form = document.getElementById('recipeEntryForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = (document.getElementById('recipeTitle') as HTMLInputElement).value;
  const ingredients = (document.getElementById('ingredients') as HTMLTextAreaElement).value.split('\n');
  const instructions = (document.getElementById('instructions') as HTMLTextAreaElement).value;
  if (title && ingredients && instructions) {
    collection.addRecipe(new Recipe(uuid(), title, ingredients, instructions, false));
    collection.saveToLocalStorage();
    if (container) container.innerHTML = '';
    container?.appendChild(template.renderAllRecipeCards());
  }
  (form as HTMLFormElement).reset()
})

const clearBtn = document.getElementById('clearRecipesButton');
clearBtn?.addEventListener('click', () => {
  collection.getAllRecipes().forEach(item => collection.removeRecipe(item.id));
  collection.saveToLocalStorage();
  if (container) {
    container.innerHTML = '';
    container.appendChild(template.renderAllRecipeCards());
  }
});

container?.appendChild(template.renderAllRecipeCards());

import type RecipeCollection from "../model/RecipeCollection";
import type RecipeItem from '../model/RecipeItem';

export default class RecipeTemplate {
    recipes: RecipeCollection;
    onRenderUpdate: () => void;
    constructor(collection: RecipeCollection, reRenderCallback: () => void) {
        this.recipes = collection;
        this.onRenderUpdate = reRenderCallback;
    }

    setReRenderCallback(cb: () => void): void {
        this.onRenderUpdate = cb;
    }

    //Render a single recipe into a div container
    renderRecipeCard(recipe: RecipeItem): HTMLDivElement {
        const divContainer: HTMLDivElement = document.createElement('div');
        divContainer.classList.add('recipe-container');

        const detailsWrapper = document.createElement("div");
        detailsWrapper.classList.add("recipe-details");

        const titleElement: HTMLHeadingElement = getRecipeTitleElement();
        const toggleBtn = getToggleDetailsButton();
        const ingredientsElement: HTMLDivElement = getIngredientsElement();
        const instructionsParagraph: HTMLParagraphElement = getInstructionsElement();
        const isFavoriteElement: HTMLDivElement = getIsFavoriteElement();
        const deleteBtnElement: HTMLButtonElement = getDeleteBtnElement();

        detailsWrapper.appendChild(ingredientsElement);
        detailsWrapper.appendChild(instructionsParagraph);
        detailsWrapper.appendChild(isFavoriteElement);
        detailsWrapper.appendChild(deleteBtnElement);

        divContainer.appendChild(titleElement);
        divContainer.appendChild(toggleBtn);
        divContainer.appendChild(detailsWrapper);
        //helper functions for rendering parts of a recipe card (e.g. title, ingredients and etc)
        const self = this;
        function getRecipeTitleElement(): HTMLHeadingElement {
            const headerElement: HTMLHeadingElement = document.createElement("h2");
            headerElement.classList.add('recipe-header');
            headerElement.innerText = recipe.title;
            return headerElement;
        }
        function getToggleDetailsButton(): HTMLButtonElement {
            const btn = document.createElement("button");
            btn.classList.add("toggle-details-button");
            btn.textContent = "Hide Details";

            btn.addEventListener("click", () => {
                const isVisible = detailsWrapper.style.display !== "none";
                detailsWrapper.style.display = isVisible ? "none" : "block";
                btn.textContent = isVisible ? "Show Details" : "Hide Details";
            });

            return btn;
        }
        function getIngredientsElement(): HTMLDivElement {
            const divContainer: HTMLDivElement = document.createElement("div");

            const headerElement: HTMLHeadingElement = document.createElement("h3");
            headerElement.classList.add('ingredients-header');
            headerElement.innerText = "Ingredients";

            const ingredientsListElement: HTMLUListElement = document.createElement("ul");
            recipe.ingredients.forEach(item => {
                const ingredientElement: HTMLLIElement = document.createElement('li');
                ingredientElement.innerText = item;
                ingredientsListElement.appendChild(ingredientElement);
            });

            divContainer.appendChild(headerElement);
            divContainer.appendChild(ingredientsListElement);
            return divContainer;
        }
        function getInstructionsElement(): HTMLParagraphElement {
            const instructionsParagraph: HTMLParagraphElement = document.createElement('p');
            instructionsParagraph.innerText = recipe.instructions;
            return instructionsParagraph;
        }
        function getIsFavoriteElement(): HTMLDivElement {
            const isFavoriteElement: HTMLInputElement = document.createElement('input');
            isFavoriteElement.classList.add("favorite-checkbox");
            isFavoriteElement.type = 'checkbox';
            isFavoriteElement.checked = recipe.isFavorite;
            isFavoriteElement.id = recipe.id;
            isFavoriteElement.addEventListener('change', (e) => {
                recipe.isFavorite = !recipe.isFavorite;
                (e.target as HTMLInputElement).checked = recipe.isFavorite;
                self.onRenderUpdate();
            });

            const labelIsFavorite: HTMLLabelElement = document.createElement('label');
            labelIsFavorite.htmlFor = recipe.id;
            labelIsFavorite.innerText = 'Favorite: ';

            const isFavoriteContainer = document.createElement('div');
            isFavoriteContainer.classList.add('favorite-toggle');
            isFavoriteContainer.appendChild(labelIsFavorite);
            isFavoriteContainer.appendChild(isFavoriteElement);

            return isFavoriteContainer;
        }
        function getDeleteBtnElement(): HTMLButtonElement {
            const deleteBtnElement: HTMLButtonElement = document.createElement('button');
            deleteBtnElement.classList.add("delete-button");
            deleteBtnElement.value = recipe.id;
            deleteBtnElement.innerHTML = 'Delete';
            deleteBtnElement.addEventListener('click', () => {
                self.recipes.removeRecipe(recipe.id);
                self.onRenderUpdate();
            });
            return deleteBtnElement;
        }

        return divContainer;
    }

    // Render all recipes from the collection into a <section> element
    renderAllRecipeCards(): HTMLElement {
        const section: HTMLElement = document.createElement('section');
        section.classList.add('recipes-section');

        this.recipes.getAllRecipes().forEach(item => {
            section.appendChild(this.renderRecipeCard(item));
        })

        return section;
    }
}

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

/* Reset some default spacing */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* App container */
.recipe-app {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

/* Form styling */
form#recipeEntryForm {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

form#recipeEntryForm input,
form#recipeEntryForm textarea {
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
}

form#recipeEntryForm button {
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

form#recipeEntryForm button:hover {
  background-color: #45a049;
}

/* Recipe section */
.recipes-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Individual recipe card */
.recipe-container {
  border: 1px solid #ddd;
  border-left: 6px solid #4caf50;
  border-radius: 8px;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.recipe-container:hover {
  transform: scale(1.01);
}

.recipe-header {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.ingredients-header {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #4caf50;
}

ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

/* Favorite checkbox */
.favorite-checkbox {
  margin-right: 0.5rem;
  transform: scale(1.2);
}

/* Delete button */
.delete-button {
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.delete-button:hover {
  background-color: #d32f2f;
}

/* Clear all button */
#clearRecipesButton {
  margin-top: 2rem;
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#clearRecipesButton:hover {
  background-color: #e68900;
}

/* Container for checkbox + label */
.favorite-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

/* Style for the label text */
.favorite-toggle label {
  font-size: 1rem;
  color: #333;
  user-select: none;
}

/* Emphasize when favorited */
.favorite-toggle input[type="checkbox"]:checked+label,
.favorite-toggle label:has(+ input[type="checkbox"]:checked) {
  color: #4caf50;
  font-weight: 600;
}

.toggle-details-button {
  margin-bottom: 1rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.toggle-details-button:hover {
  background-color: #1976d2;
}

@media (max-width: 600px) {
  .recipe-app {
    padding: 0.5rem;
  }

  .recipe-header {
    font-size: 1.3rem;
  }

  form#recipeEntryForm input,
  form#recipeEntryForm textarea {
    font-size: 0.95rem;
  }
}