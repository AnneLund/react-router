import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import { Nav } from '../../Components/Navbar';
import Notfound from '../Notfound';
import Action from './Action';
import Crime from './Crime';
import ScifiIndex from './SciFi/ScifiIndex';

const BookIndex = () => {
  return (
    <>
    <Nav>
      <ul>
        <li><Link to="/books/crime">Krimier</Link></li>
        <li><Link to="/books/action">Action</Link></li>
        <li><Link to="/books/scifi">Scifi</Link></li>
      </ul>
    </Nav>

    <Routes>
      <Route path="/" element={<h1>Rodelement</h1>}/>
      <Route path="/crime" element={<Crime/>}/>
      <Route path="/action" element={<Action/>}/>
      <Route path="/scifi/*" element={<ScifiIndex/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default BookIndex;