import {
    Center,
    Card,
    CardBody,
    Image,
    Heading,
    Text,
    Divider,
    Stack,
    CardFooter,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from"./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({gloves}) => {
    const { id } = useParams();
    console.log(id);

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const gloveRef = doc(db, "guantes", `${id}`);

        getDoc(gloveRef).then((snapshot) => {
            if (snapshot.exists()){
                setProducto(snapshot.data());
            } else {
                console.log("No such document!");
            }
        });
    }, []);

    const gloveFilter = gloves.filter((glove) => glove.id == id);

    return (
        <>
        {gloveFilter.map((glove) => (
            <div key={glove.id}>
                <Center p="1rem">
                    <Card className="card-main">
                        <CardBody>
                            <Image borderRadius="lg" src={glove.image}/>
                            <Stack mt="6" spacing="3">
                                <Text color="orange.800" fontSize="1">
                                    Description: {glove.description}
                                </Text>
                                <Text color="orange.800" fontSize="1">
                                    Category: {glove.category}
                                </Text>
                                <Text color="green.600" fontSize="x1">
                                    Stock: {gloves.stock}
                                </Text>
                                <Text color="pink.600" fontSize="x1">
                                    Price: AR$ {glove.price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider/>
                        <CardFooter className="card-footer">
                            <ItemCount
                                stock={glove.stock}
                                id={glove.id}
                                price={glove.price}
                                name={glove.name}
                            />
                        </CardFooter>
                    </Card>
                </Center>
            </div>
        ))}
        </>
    );
};

export default ItemDetail;