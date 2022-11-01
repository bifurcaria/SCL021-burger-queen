import React from "react";
import { placeOrder } from "../lib/firebase";

const Order = ({ command }) => {
    if (command.length === 0) {
        console.log("empty")
        return (<h1>place order here</h1>)
    }
    console.log("notempty");
    return (
        <div className="App">
            {command.map((element) => {
                return (
                    <article key={element}>
                        pedido {element}
                    </article>
                )
            }
            )}
        <h4>total</h4>
        <button
         onClick={() => placeOrder("hola") }
        >enviar a cocina</button>
        <h4>al apretar este se debería subir a firebase y vaciar la comanda, quiza un popup que confirme</h4>
        </div>
    )

}

export default Order