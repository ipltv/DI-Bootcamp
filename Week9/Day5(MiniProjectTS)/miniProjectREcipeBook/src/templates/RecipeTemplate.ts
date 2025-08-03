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