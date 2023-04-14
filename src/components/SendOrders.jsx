import {collection, addDoc, getFirestore, serverTimestamp} from "@firebase/firestore";
import { useState } from "react";

const SendOrders = () =>{
    const [orderId, setOrderId] = useState(null);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    
    const db = getFirestore();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };
    const order = {
        nombre,
        email,
        item: Cart.map((producto) => ({
            id: producto.id,
            tittle: producto.tittle,
            price: producto.price,
            quantity: producto.quantity,
        })),
        total,
        date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orden");

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Ingrese su nombre" 
                onChange={(e) => setNombre(e.target.value)}
                />
                
                <input 
                type="text"
                placeholder="Ingrese su correo electronico"
                onChange={(e) => setEmail(e.target.value)} 
                />

                <button type="submit">Enviar informacion</button>
            </form>

            <h4>Su ID de la compra es: {orderId}</h4>
        </div>
    );
};

export default SendOrders;