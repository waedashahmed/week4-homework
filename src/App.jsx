import { useState } from 'react'
import RecipeCard from './components/RecipeCard.jsx'
import './App.css'
const initialRecipes = [
  { id: 1, name: 'Maqluba', ingredients: ['rice', 'eggplant', 'cauliflower', 'chicken'], isFavourite: false },
  { id: 2, name: 'Musakhan', ingredients: ['taboon bread', 'chicken', 'onion', 'sumac', 'olive oil'], isFavourite: false },
  { id: 3, name: 'Falafel', ingredients: ['chickpeas', 'parsley', 'garlic', 'cumin'], isFavourite: false },
]


function App() {
  const [recipes, setRecipes] = useState(initialRecipes)
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false)
  function toggleFavourite(id) {
  const updated = recipes.map((recipe) =>
    recipe.id === id ? { ...recipe, isFavourite: !recipe.isFavourite } : recipe
  )
  setRecipes(updated)
}

const visibleRecipes = showFavouritesOnly
  ? recipes.filter((recipe) => recipe.isFavourite)
  : recipes

  return (
    <div className="app">
      <h1>Recipe App</h1>
      <button onClick={() => setShowFavouritesOnly(!showFavouritesOnly)}>
  {showFavouritesOnly ? 'Show all' : 'Show favourites only'}
</button>
<div className="recipe-list">
           {visibleRecipes.map((recipe) => (
  <RecipeCard
    key={recipe.id}
    name={recipe.name}
    ingredients={recipe.ingredients}
    isFavourite={recipe.isFavourite}
    onToggle={() => toggleFavourite(recipe.id)}
  />
))}
    </div>
    </div>
  )
}

export default App