import React from "react";
// desestructuracion, en vez de parentesis iba props, pero se puede desestructurar y sacar solo list
//por esto puedo usar adentro como variable
//props puede ser datos y tb funcion ojo
const Display = ({menu, category}) => {
  
  const {items} = menu.find(element => element.name === category)
    return(
        <div>
          {items.length>0 && items.map(element => 
            { const { id, name, img, desc, price } = element;
              return (
                <article key={id} className="App">
                  <img src={img} alt={name} className="App" />
                  <div className="App">
                    <header>
                      <h4>{name}</h4>
                      <h4 className="App">${price}</h4>
                    </header>
                    <p className="App">{desc}</p>
                  </div>
                </article>
              );
            }
            )}
        </div>
      );
    }
  
  export default Display;



