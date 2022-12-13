import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Notfound from './Notfound'
import Profile from './Profile'

const Home = () => {
  return (
    <>
    <article>Home</article>

    <Outlet/>
    </>
 
  )
}

export default Home