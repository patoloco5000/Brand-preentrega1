import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';



const App =() => {
return (

  
  <BrowserRouter>

    
    <NavBar />
    
    <Routes>

      <Route exact path="/ItemList" element={<ItemListConteiner />}/>

      <Route exact path="/cart" element={<Cart />}/>

    </Routes>


  </BrowserRouter>


);
}



export default App
