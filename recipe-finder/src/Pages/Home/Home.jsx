import React from 'react'
import Recipies from '../Recipies/Recipies'
import Header from '../../Components/Header/Header'

const Home = ({recipe}) => {
  return (
    <div>
      <Header/>
      <Recipies recipe={recipe}/>
    </div>
  )
}

export default Home
