import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import BookIndex from '../Pages/Books/Bookindex';
import ProductsIndex from '../Pages/Products/ProductsIndex';
import Profile from '../Pages/Profile';
import Notfound from '../Pages/Notfound';

const Router = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books/*" element={<BookIndex/>}/>
    <Route path="/products/*" element={<ProductsIndex/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="*" element={<Notfound switchValue="home"/>}/>
    </Routes> 
    </>

  )
}

export default Router