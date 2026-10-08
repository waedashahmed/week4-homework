import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
function RecipeCard({ name, ingredients, isFavourite, onToggle }) {
  return (
    <div className="recipe-card">
      <h2>{name}</h2>
      {isFavourite && <span><FaStar /> Favourite</span>}
      <ul>
        {ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onToggle}>
        {isFavourite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}


export default RecipeCard