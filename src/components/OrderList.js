import React from "react";
import { List, Button, Image } from "semantic-ui-react";
import { updateOrder } from "../lib/firebase"
import timeFormat from "./timeFormat";

function OrderList({ waiterName, id, customerName, plates, setAs, date, filter, delivered, completed, condition }) {

let now = new Date()
now = now.getTime()/1000
//const [currentDate, setCurrentDate] = useState(now)

//volver a ver esto más rato y usar state en vez de filter para evitar renderear mal botones o fechas
    const buttons = () => {
        return (<Button onClick={() =>
            updateOrder(id, setAs)
        }
        >{setAs}</Button>)
    }


    const lastDate = () => {
        if (filter==='delivered')
        {return (<div>entregado el {timeFormat(delivered)}</div>)}
        else if (filter==='completed')
        {return (<div>completado el {timeFormat(completed)}</div>)}
        return(<div>hace {(now-date)/3600} horas</div>)
    }

    return (
        <List.Item key={id} >
            <List.Content floated='right'>
                {condition ? buttons() : lastDate(setAs)}
            </List.Content>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
            <List.Content>
                <List.Header as='a'>{customerName}</List.Header>
                <List.Description>
                    Orden tomada por{' '}
                    <a><b>{waiterName}</b></a>{' '}
                    el {timeFormat(date)}.
                </List.Description>
                <List.Description>
                <List>{plates.map((element)=><List.Content>{element.name}</List.Content>)}</List>
                </List.Description>
            </List.Content>
        </List.Item>)
}

export default OrderList
