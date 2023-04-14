import Item from "./Item";
import { container } from "@chakra-ui/react";

const ItemList = ({ gloves }) => {
    return (
        <>
        <Container className="main-catalogue">
            {gloves?.map((glove) => (
                <Item
                key={glove.id}
                id={glove.id}
                name={glove.nombre}
                description={glove.description}
                price={glove.precio}
                stock={glove.stock}
                category={glove.category}
                image={glove.imagen}
                />
            ))}
        </Container>
        </>
    );
};

export default ItemList;