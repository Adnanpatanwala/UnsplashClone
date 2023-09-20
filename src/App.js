   
import Page from "./Components/Page";
import Home from "./Pages/Home";
import NavBar from "./Pages/Navbar"; 

  
function App() {  
  console.log("app");
  return (   
    <>
    <NavBar/>
    <Home/> 
    <Page/> 
    </>
  );
}

export default App;
