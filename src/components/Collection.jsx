import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "@firebase/firestore";

const Collection =() => {
    const [products, setProducts] = useState([]);
        console.log(products);
    useEffect(() => {
        const db = getFirestore();
    
        const itemsCollection = collection(db, "guantes");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProducts(docs);
        });
    }, []);
    
    return (

    
    <div>
        <h1>Productos</h1>
        {
            productos.map((product)=>(
                <div>
                    <h4>{product.nombre}</h4>
                    <p>{product.categoria}</p>
                    <p>{product.precio}</p>
                </div>
            ))}
    </div>
    );
};

export default Collection;