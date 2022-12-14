import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
.App {
  text-align: center;
  font-family: 'Philosopher', sans-serif;

 
        a, button{
          cursor: pointer;
          text-decoration: none;
            color: black;
            padding: 0.5em;
         &:hover{
            background-color: #0092;
            transition: 500ms;
            
        }     
        }
}

li{
  list-style-type: none;
}
`

export default Globals;