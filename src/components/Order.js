import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Item, Input } from 'semantic-ui-react';
import { placeOrder } from "../lib/firebase";

const Order = ({ command }) => {
    if (command.length === 0) {
        console.log("empty")
        return (<h4>todavía no has agregado nada</h4>)
    }
    console.log("notempty");
    return (
        <div className="App">
            <Input action='Guardar' placeholder='Nombre clientx' />
            <Item.Group relaxed>
                {command.map((element) => {
                    return (
                        <Item key={element}>
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>{element}</Item.Header>
                                <Item.Description>$000</Item.Description>
                                <Button floated='right'>X</Button>
                            </Item.Content>
                        </Item>
                    )
                }
                )}
            </Item.Group>

            <h4>total</h4>

            <Button
                onClick={() => placeOrder("hola")}
            >enviar a cocina</Button>
            <h4>al apretar este se debería subir a firebase y vaciar la comanda, quiza un popup que confirme</h4>
        </div>
    )

}

export default Order