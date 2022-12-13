import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, Routes, Route } from 'react-router-dom'
import Notfound from '../Notfound'
import Categories from '../../Components/Categories'

const Nav = styled.nav`

ul{
    display: flex;
    justify-content: center;
    gap: 1em;
li{
        list-style: none;
        text-align: left;
    }    
}
`

const ProductsIndex = () => {
    const [apiData, setApiData] = useState([])

useEffect(() => {
    const renderProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/categories")

            if (response.data) {
                setApiData(response.data.slice(0,10));
            }
        } catch (error) {
            console.error(error)
        }
    };

    renderProducts();
}, [])

  return (
    <>
        <h3>Product Index</h3> 
    <Nav>
        <ul>
            {apiData.map((cat, i) => (
                <li key={i}>
                    <Link to={cat}>{cat}</Link>
                </li>
            ))}
        </ul>
    </Nav>

    <Routes>
        <Route path="/*" element={<p>Roden af Product Index</p>}/>
        
        {apiData.map((cat, i) => <Route path={cat} element={<Categories catStr={cat}/>} key={i}/>)}
        
        <Route path='*' element={<Notfound switchValue="booksindex"/>}/>
    </Routes>
    </>
  )
}

export default ProductsIndex