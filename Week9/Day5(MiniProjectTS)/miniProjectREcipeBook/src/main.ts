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