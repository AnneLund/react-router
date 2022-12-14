import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Notfound from './Notfound'
import UsersIndex from '../Pages/Users/UsersIndex'

const Home = () => {
  return (
    <>
    <article>Home</article>
<Routes>
<Route path="/users/*" element={<UsersIndex/>}/>
</Routes>
    <Outlet/>
    </>
 
  )
}

export default Home