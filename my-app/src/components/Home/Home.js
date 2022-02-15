import React from 'react'
import { HomeContainer, HomeHeader,  HomeMainHeader, HomeSubHeader } from "./Home.styled"

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        <HomeMainHeader>Hello my name is </HomeMainHeader>
        <HomeSubHeader>Anthony Rodriguez</HomeSubHeader>
      </HomeHeader>
      
    </HomeContainer>
  )
}

export default Home