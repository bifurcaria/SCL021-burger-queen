import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Image } from 'semantic-ui-react';
// desestructuracion, en vez de parentesis iba props, pero se puede desestructurar y sacar solo list
//por esto puedo usar adentro como variable
//props puede ser datos y tb funcion ojo
const Display = ({ menu, category, add }) => {

  const { items } = menu.find(element => element.name === category)
  return (
    <div style={{textAlign: '-webkit-center', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      {items.length > 0 && items.map(element => {
        const { id, name, img, desc, price } = element;
        return (
          <Card key={id}>
          <Image src={img} alt={name} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className='date'>${price}</span>
            </Card.Meta>
            <Card.Description>
              {desc}
            </Card.Description>
            <Button
                type='button'
                key='id'
                onClick={() => add(element)}
              >
                Agregar
              </Button>
              </Card.Content>
        </Card>
)
              
           

      }
      )}
    </div>
  );
}

export default Display;



