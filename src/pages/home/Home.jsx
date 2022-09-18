import React from 'react'
import City from '../../components/city/City'
import Header from '../../components/header/Header'
import './home.css'

function Home() {
  return (
    <div><Header/>
    <div className='main-container'>
      <City/></div></div>
  )
}

export default Home