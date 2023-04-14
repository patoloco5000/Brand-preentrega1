import {Link} from "react-router-dom"
import CartWidget from './CartWidget';
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className='navbar bg-body-tertiary'> 
        <div className='container-fluid'>
            <h3>Boxing shop</h3>
            
            <Menu>
            <MenuButton>Categorias</MenuButton>
                    <MenuList>
                        <MenuItem><Route exact path="/ItemList" element={<ItemListConteiner />}/>Guantes</MenuItem>
                        <MenuItem>Categoria B</MenuItem>
                    </MenuList>
            </Menu>
            
            
            <CartWidget/> 

        </div>
        </nav>    
    )

}

export default NavBar