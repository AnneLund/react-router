import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
    ul{
        display: flex;
        justify-content: center;
        gap: 2em;
        li{
            list-style: none;
        }
    }
`

const Navbar = () => {
  return (
    <Nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/books">Bøger</Link>
            </li>

            <li>
                <Link to="/users">Brugere</Link>
            </li>

            <li>
                <Link to="/products">Produkter</Link>
            </li>
        </ul>
    </Nav>
  )
}

export default Navbar