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
                name={glove.name}
                description={glove.description}
                price={glove.price}
                stock={glove.stock}
                category={glove.category}
                image={glove.image}
                />
            ))}
        </Container>
        </>
    );
};

export default ItemList;