import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Collection from "./components/Collection";



const App =() => {
return (

  
  <BrowserRouter>

    <Collection />
    <NavBar />
    
    <Routes>

      <Route exact path="/ItemList" element={<ItemListConteiner />}/>

    </Routes>


  </BrowserRouter>


);
}



export default App
