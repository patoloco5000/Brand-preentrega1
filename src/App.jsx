import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
    return (
    <ChakraProvider>
      <NavBar/>
      <ItemListConteiner greeting={"Bienvenidos a mi tienda on Line"} />
    </ChakraProvider>
    
    );
};



export default App
