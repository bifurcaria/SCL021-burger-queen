import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Item, Input } from 'semantic-ui-react';
import { placeOrder } from "../lib/firebase";

const Order = ({ command, erase, price, nameCallback, nameState }) => {
    return (
        <div className="App">
            <Input 
            placeholder='Nombre clientx'
            onChange={e => nameCallback(e.target.value)} />
            <Item.Group relaxed>
                {command.map((element) => {
                    const { id, name, price } = element
                    return (
                        <Item key={id}>
                            <Item.Content verticalAlign='middle'>
                                <Item.Header style={{width:'auto'}}>{name}</Item.Header>
                                <Button
                                floated='right'
                                onClick={() => erase(element)}>X</Button>
                                <Item.Description>${price}</Item.Description>
                                
                            </Item.Content>
                        </Item>
                    )
                }
                )}
            </Item.Group>

            <h4> Total: ${price} </h4>


            <Button
                onClick={() => placeOrder(command, nameState )}
            >Enviar a cocina</Button>
           
        </div>
    )

}

export default Order