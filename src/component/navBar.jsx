import React from 'react'
import { Link } from 'react-router-dom'

function navBar() {
  return (
  <nav>
<link to="/">Home</link>
<link to="/blog">Blog</link>
<link to="/landing">Landing</link>
<link to="/pages">Pages</link>
<link to="/recipes">Recipes</link>
<link to="/shop">Shop</link>
  </nav>
  )
}

export default navBar