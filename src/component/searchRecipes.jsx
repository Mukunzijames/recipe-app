import React from 'react'


const searchRecipes = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) =>{
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={value}
        disabled ={isLoading}
        onChange={onChange}
        placeholder="search"
        className="form-control"
        />
        <input 
        disabled={isLoading || !value}
        type="submit"
        className="btn"
        value="search"

        
        />
    </form>
  )
}



export default searchRecipes
