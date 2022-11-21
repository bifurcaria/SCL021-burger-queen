import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

function OrderList(orders) {
    console.log(orders)
    return (<List divided verticalAlign='middle'>
        {orders.map((element) => {
            const { customerName, date, order, state, uid, waiterName } = element
            return (
                <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='/images/avatar/small/lena.png' />
                    <List.Content>{customerName}</List.Content>
                </List.Item>

            )
        }
        )}
    </List>)
}



export default OrderList