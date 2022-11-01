import React from "react";
//useeffect o algo q me permita devolver el valor al menos hacia app, para que sepa cuales mostrar con display
const Categories = ({menu, filterMenu}) => {  

    return (
          <div className="App">
            {menu.map((element) => {
              return (
                <button
              type="button"
              /* className={`${
                activeCategory === {name} ? "btn active" : "btn"
              }`}
              */
              key = {element}
              onClick={() => filterMenu(element)}
            >
              {element}
            </button>
              );
            })}
          </div>
        );
  }
  
  export default Categories