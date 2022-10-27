import React, {useState} from "react";
//useeffect o algo q me permita devolver el valor al menos hacia app, para que sepa cuales mostrar con display
const Categories = ({menu}) => {  

    const [activeCategory, setActiveCategory] = useState("");

    return (
          <div className="App">
            {menu.map((element) => {
            const { name } = element
              return (
                <button
              type="button"
              className={`${
                activeCategory === {name} ? "btn active" : "btn"
              }`}
              key = {name}
              onClick={() => funcionquefiltre({name})}
            >
              {element}
            </button>
              );
            })}
          </div>
        );
  }
  
  export default Categories