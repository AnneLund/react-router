import React, { useEffect, useState } from 'react'
import useGetListByEndPointData from '../Hooks/useGetListByEndPointData'
import { Card, Section } from '../Pages/Users/UsersIndex'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  scrollbar-width: 50%;
  width: 200px;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  img{
    width: 50%;
    height: 100px;
  }
 
`


const Categories = ({catStr}) => {

    const [apiData, setApiData] = useState([])
    const {state : categories} = useGetListByEndPointData(`https://dummyjson.com/products/category/${catStr}`)
   
    useEffect(() => {
    setApiData(categories)
    },[catStr, categories])
 console.log(apiData)
    return (
        <>
        <h3>{catStr.toUpperCase()}</h3>
        <Section>
        {apiData.map((item, i) => 
        <Card key={i}>
          <ImageContainer>
                    {item.images.map(img => <img src={img}/>)} 
          </ImageContainer>
 
          <figcaption>
             <h4>{item.title}</h4>
          <p>{item.brand}</p>  
          </figcaption>
        </Card>)}
        </Section>
        </>
  )
}

export default Categories;