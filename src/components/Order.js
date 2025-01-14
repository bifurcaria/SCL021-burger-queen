import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Item, Input } from 'semantic-ui-react';
import { placeOrder } from "../lib/firebase";

const Order = ({ command, erase, price, nameCallback, nameState }) => {
    if (command.length === 0) {
        console.log("empty")
        return (<h4>todavía no has agregado nada</h4>)
    }
    console.log("notempty");
    return (
        <div className="App">
            <Input 
            placeholder='Nombre clientx'
            onChange={e => nameCallback(e.target.value)} />
            <Item.Group relaxed>
                {command.map((element) => {
                    const { id, name, img, desc, price } = element
                    return (
                        <Item key={id}>
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>{name}</Item.Header>
                                <Item.Description>${price}</Item.Description>
                                <Button
                                floated='right'
                                onClick={() => erase(element)}>X</Button>
                            </Item.Content>
                        </Item>
                    )
                }
                )}
            </Item.Group>

            <h4> ${price} </h4>


            <Button
                onClick={() => placeOrder(command, nameState )}
            >enviar a cocina</Button>
            <h4>al apretar este se debería subir a firebase y vaciar la comanda, quiza un popup que confirme</h4>
        </div>
    )

}

export default Order