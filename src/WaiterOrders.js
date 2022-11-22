import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Container, List, Card, Button, Image, Tab } from 'semantic-ui-react'
import { getOrders, updateOrder } from './lib/firebase'
import OrderList from './components/OrderList'
import timeFormat from './components/timeFormat'
import { Timestamp } from 'firebase/firestore'

function WaiterOrders () {

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
        <Container style={{marginTop: '50px', width: '-webkit-fill-available'}}>
            <Navbar/>
            <Button.Group>
                <Button onClick={() => setFilter('active')}>Pedidos activos</Button>
                <Button onClick={() => setFilter('completed')}>Listos para servir</Button>
                <Button onClick={() => setFilter('delivered')}>Pedidos cerrados</Button>
            </Button.Group>

            <List>
                {orders.length > 0 && orders.map(element => {
                    const { waiterName, customerName, id, uid, date, order, state, delivered, completed } = element;
                    return <OrderList
                        waiterName={waiterName}
                        id={id}
                        customerName={customerName}
                        state={state}
                        plates={order}
                        setAs='delivered'
                        date={date.seconds}
                        delivered={delivered.seconds}
                        completed={completed.seconds}
                        filter={filter}
                        condition={filter === 'completed'}
                    />
                })}
            </List>
        </Container>
    )

}

export default WaiterOrders