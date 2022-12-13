import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Categories from '../../../Components/Categories'
import { Nav } from '../../../Components/Navbar'
import Notfound from '../../Notfound'

const SciFiGenre = [
  {title: "Dystopian", path: "/books/scifi/dystopia", element: <Categories catStr="Dystopia"/>},
  {title: "Deep Space", path: "/books/scifi/deepspace", element: <Categories catStr="Deepspace"/>}
]

const ScifiIndex = () => {
  return (
    <>
    <Nav>
    <h3>Sci-fi Books</h3>
      <ul>
        {SciFiGenre.map((genre, i) => <li key={i}> <Link to={genre.path}>{genre.title}</Link></li>)}
      </ul>
    </Nav>
    
    <Routes>
      <Route path="/*" element={<p>Kategori Sci-Fi</p>}/>
      {SciFiGenre.map((genre, i) => <Route path={genre.path} key={i} element={genre.element}/>)}
      <Route path="*" element={<Notfound switchValue="sci-fi"/>}/>
    </Routes>
    </>
  )
}

export default ScifiIndex