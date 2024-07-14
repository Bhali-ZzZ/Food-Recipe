import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Recipies from "./Pages/Recipies/Recipies"
import RecipeDetail from "./Pages/RecipeDetail/RecipeDetail"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import data from "./recipies.json"

const App = () => {

  const [recipe,setRecipe]=useState()

  useEffect(()=>{
    setRecipe(data)
  },[])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home recipe={recipe}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipies' element={<Recipies/>}/>
        <Route path='/recipe/:id' element={<RecipeDetail recipe={recipe}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
