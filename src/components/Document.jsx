import { useState, useEffect } from "react";
import { doc, getDocs, getFirestore } from "@firebase/firestore";
import { useParams } from "react-router-dom";

const Document = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        const db = getFirestore();

        const oneItem = doc(db, "guantes", `${id}`);

        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data();
                setProduct(docs);
            }
        });
    }, []);

    return (
        <div>
            <h1>Documento</h1>

            {
                <div>
                    <h4>{product.nombre}</h4>
                    <p>{product.precio}</p>
                    <p>{product.categoria}</p>
                </div>
            }
        </div>
    );
};

export default Document;