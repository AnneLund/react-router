import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Routes, Route, NavLink} from 'react-router-dom'
import Notfound from '../Notfound'


const Nav = styled.nav`
position: absolute;
ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
li{
        list-style: none;
        text-align: left;
    }    
}
`

const UserCard = styled.figure`
background-color: antiquewhite;
padding: 1em;
box-shadow: grey 5px 5px 5px;
display: flex;
justify-content: center;
align-items: center;
width: 500px;
margin: auto;
    img{
        width: 40%;
    }
figcaption{
    text-align: left;
    padding: 1em;
    p{
        margin: 0;
    }
}

button{
    margin: 1em 0;
}
`

const CompanyInfo = styled.div`
    animation: info forwards 1s;
    position: absolute;
    background-color: whitesmoke;
    box-shadow: grey 2px 2px 2px;
    padding: 1em;
    h3{
        margin: 0;
    }

    @keyframes info {
        0% {
            transform: translateY(-10px);
            opacity: 0%;
        }
        100% {
            transform: translateY(10px);
            opacity: 100%
        }
    }
`

const Section = styled.article`
    display: flex;
    flex-direction: column;
    min-height: 70vh;

`

const UsersIndex = () => {
    const [apiData, setApiData] = useState([])
    const [showMore, setShowMore] = useState(false)

useEffect(() => {
    const renderUsers = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/users")

            if (response.data) {
                setApiData(response.data.users.slice(0,20));
            }
        } catch (error) {
            console.error(error)
        }
    };

    renderUsers();
}, [])

  return (
    <Section>
        <h3>User Index</h3> 
    <Nav>
       <ul>
        {apiData && apiData?.map(user => {
            return(
                <li key={user.id}>
                     <NavLink to={`${user.firstName}`}>{user.firstName} {user.lastName}</NavLink>  
                </li>
             
            )
         })}
       </ul>
    </Nav>

    <Routes>
        <Route path="/*" element={<p>Roden af Users Index</p>}/>
        
        {apiData && apiData?.map((user, i) => <Route key={user.id} path={`${user.firstName}`} element={

        <UserCard>
            <img src={user.image} alt={user.firstName}/>
            <figcaption>
            <h4>{user.firstName}</h4>
            <p>Age: {user.age}</p> 
            <p>Gender: {user.gender}</p> 
            <p>Email: {user.email}</p>  
            <p>Phone: {user.phone}</p>
            <p>University: {user.university}</p>
            <button onClick={() => {
                setShowMore(showMore => !showMore)
            }}>Show company information</button>
            {showMore ? 
            <CompanyInfo>
                <h3>{user.company.name}</h3>
                <p>Department: {user.company.department}</p>
               <p>Address: {user.company.address.address}</p>
               <p>{user.company.address.postalCode} {user.company.address.city}</p>
               <p>State: {user.company.address.state}</p>

            </CompanyInfo> : null}
        </figcaption>
           
        </UserCard>
        } />)}
        
        <Route path='*' element={<Notfound switchValue="booksindex"/>}/>
    </Routes>
 
    </Section>

  )
}

export default UsersIndex