import React from 'react'

const RecipeCard = ({recipe}) => {

    const {idMeal , strMeal , strCategory , strMealThumb} = recipe;
  return (
    <div id='card  ' className=' w-[200px] bg-white m-3 pb-3 ' > 
    <img 
    src={strMealThumb}
    alt={strMeal}
    className='card-image w-full'
    />
    <div className='card-body p-3'>
        <span className='category text-red-400'>{strCategory}</span>
        <h1 className=' text-2xl font-bold '>{strMeal}</h1>
        <a href={"https://braise.qodeinteractive.com/" + idMeal } target="_blank" rel="noreferrer">Ingerdients</a>

    </div>
    
    </div>

  )
}

export default RecipeCard