import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
//useeffect o algo q me permita devolver el valor al menos hacia app, para que sepa cuales mostrar con display
const Categories = ({ menu, filterMenu }) => {

  return (
    <div className="Categories">
      {menu.map((element) => {
        return (
          <Button
            type="button"
            /* className={`${
              activeCategory === {name} ? "btn active" : "btn"
            }`}
            */
            key={element}
            onClick={() => filterMenu(element)}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}

export default Categories