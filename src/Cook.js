import React, { useState, useEffect } from 'react'
import { Container, List, Button} from 'semantic-ui-react'
import { getOrders } from './lib/firebase'
import OrderList from './components/OrderList'

function Cook() {

    const [orders, setOrders] = useState([])
    const [filter, setFilter] = useState('active')



    useEffect(() => {
        const setAllOrders = () => {
            getOrders(filter)
                .then((value) => {
                    value.sort((a, b) => {
                        // para ordenar valores numericos (criteria corresponde al parametro que se va a filtrar)
                        return Number(a.date.seconds) - Number(b.date.seconds);
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
                <Button onClick={() => setFilter('active')}>Pedidos activos</Button>
                <Button onClick={() => setFilter('completed')}>Listos para servir</Button>
                <Button onClick={() => setFilter('delivered')}>Pedidos cerrados</Button>
            </Button.Group>

            <List>
                {orders.length > 0 && orders.map(element => {
                    const { waiterName, customerName, id, date, order, state, delivered, completed } = element;
                    return <OrderList
                        waiterName={waiterName}
                        id={id}
                        customerName={customerName}
                        state={state}
                        plates={order}
                        setAs='completed'
                        date={date.seconds}
                        delivered={delivered.seconds}
                        completed={completed.seconds}
                        filter={filter}
                        condition={filter === 'active'}
                    />
                })}
            </List>
        </Container>
    )

}

export default Cook