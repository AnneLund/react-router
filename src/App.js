import React from "react";
import Breadcrumbs from "./BreadCrumbs/Breadcrumbs";
import Navbar from "./Components/Navbar";
import Router from "./Components/Router";

function App() {
  return (
    <div className="App">
<Navbar/> 
<Breadcrumbs/>   
<Router/>
    </div>
  );
}

export default App;
