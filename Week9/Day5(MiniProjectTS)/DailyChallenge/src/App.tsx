import { DataFetcher } from './components/DataFetcher';
import { fetchRecipes } from './features/recipeSlice';
import { type RootState } from './store/store';
import { type RecipeSearchResponse } from './types/types';

function App() {
  return (
    <div>
      <h1>Recipe List</h1>
      <DataFetcher<RecipeSearchResponse>
        thunk={fetchRecipes}
        url="/recipes/complexSearch?query=pasta&number=5"
        selector={(state: RootState) => state.recipes}
        render={(data) => (
          <ul>
            {data.results.map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;
