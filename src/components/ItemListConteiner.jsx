import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";


export const ItemListConteiner = ({texto}) => {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }
  
  return (
    <>
      <Title greeting={texto}/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
};
export default ItemListConteiner