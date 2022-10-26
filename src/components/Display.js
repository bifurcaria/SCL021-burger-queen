import React from "react";
// desestructuracion, en vez de parentesis iba props, pero se puede desestructurar y sacar solo menu
//por esto puedo usar adentro como variable
//props puede ser datos y tb funcion ojo
const Display = ({menu}) => {
    const data = menu.items

    return(
        <div>
          {data.length>0 && data.map(element => <h1 key={element.name}> {element.name}</h1>)}
        </div>
      );
    }
  
  export default Display;



