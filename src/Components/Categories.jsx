import React, { useEffect, useState } from 'react'
import useGetListByEndPointData from '../Hooks/useGetListByEndPointData'

const Categories = ({catStr}) => {

    const [apiData, setApiData] = useState([])
    const {state : categories} = useGetListByEndPointData(`https://dummyjson.com/products/category/${catStr}`)
  
    useEffect(() => {
console.log(catStr)
    setApiData(categories)
    },[catStr, categories])

    return (
        <>
        <h3>{catStr.toUpperCase()}</h3>
         <ul>
        {apiData.map((item, i) => <li key={i}>{item.title}</li>)}
        </ul>
        </>
   
  )
}

export default Categories;