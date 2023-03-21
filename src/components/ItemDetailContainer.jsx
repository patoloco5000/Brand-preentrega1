import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { QuerySnapshot } from "@firebase/firestore";

const ItemDetailContainer = () => {
  const [gloves, setGloves] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    const db = getFirestore();
    const glovesCollection = collection(db, "guantes");
    getDocs(glovesCollection).then((QuerySnapshot) =>{
      const gloves = QuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGloves(gloves);
    });
  }, []);
  
  const catFilter= gloves.filter((glove) => glove.category === category);

  return (
    <div>
      {category ? <ItemList gloves={catFilter}/>: <ItemList gloves={gloves}/>}
    </div>
  );

};

export default ItemDetailContainer;