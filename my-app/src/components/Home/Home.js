import React from 'react'
import { 
  HomeContainer, HomeHeader, 
  HomeMainHeader, HomeSubHeader, 
  Picture } from "./Home.styled"
  import coffee from '../../Pictures/coffee.jpg'

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        <HomeMainHeader>Hello my name is </HomeMainHeader>
        <HomeSubHeader>Anthony Rodriguez</HomeSubHeader>
        <Picture src={coffee} alt="Me"></Picture>
      </HomeHeader>
      
      
    </HomeContainer>
  )
}

export default Home