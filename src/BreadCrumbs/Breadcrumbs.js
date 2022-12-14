import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'
import {AiOutlineArrowRight} from 'react-icons/ai'

const StyledBreadCrumbs = styled.ul`
display: flex;
padding-top: 1em;
gap: 1em;
margin: auto;
list-style-type: none;
    span{
        margin: 0 .2em;
    }
`

const Breadcrumbs = () => {
    const crumbs = useReactRouterBreadcrumbs()
  return (
    <StyledBreadCrumbs>
{crumbs.map(({breadcrumb}, i) => {
    return(
        <li key={i}>
            <Link end to={breadcrumb.key}>
                {breadcrumb}
            </Link>
            <span><AiOutlineArrowRight size={10}/></span>
         
        </li>
    )
})}
    </StyledBreadCrumbs>
  )
}

export default Breadcrumbs