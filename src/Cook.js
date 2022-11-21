import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Container, List, Card, Button, Image, Tab } from 'semantic-ui-react'
import { getOrders, updateOrder } from './lib/firebase'
import OrderList from './components/List'
import { db } from './lib/firebase'
import { validateCallback } from '@firebase/util'

function Cook() {

    const [orders, setOrders] = useState([])
    const [filter, setFilter] = useState('active')

    

    useEffect(() => {
        const setAllOrders = () => {
            getOrders(filter)
                .then((value) => {
                    value.sort((a, b) => {
                        // para ordenar valores numericos (criteria corresponde al parametro que se va a filtrar)
                        return new Number(a.date.seconds) - new Number(b.date.seconds);
                    }
                    );
                    setOrders(value)
                }
                )
        }
        setAllOrders()
    }, [filter]);


    return (
        <Container>

    <Button.Group>
    <Button onClick={()=>setFilter('active')}>Pedidos activos</Button>
    <Button onClick={()=>setFilter('completed')}>Listos para servir</Button>
    <Button onClick={()=>setFilter('delivered')}>Pedidos cerrados</Button>
    </Button.Group>

            <List>
                {orders.length > 0 && orders.map(element => {
                    const { waiterName, customerName, id, uid, date, order, state } = element;
                    return (<List.Item key={id} >
                        <List.Content floated='right'>
                            <Button onClick={() => 
                            updateOrder(id, 'completed')
                        }
                            >Listo</Button>
                        </List.Content>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                        <List.Content>
                            <List.Header as='a'>{customerName}</List.Header>
                            <List.Description>
                                Orden tomada por{' '}
                                <a>
                                    <b>{waiterName}</b>
                                </a>{' '}
                                a las. {state}
                            </List.Description>
                        </List.Content>
                    </List.Item>)
                })}
            </List>
        </Container>
    )



}

export default Cook