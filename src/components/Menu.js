import React from "react";

const Menu = ({ list }) => {
  return (
    <div className="App">
      {list.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="App">
            <img src={img} alt={title} className="App" />
            <div className="App">
              <header>
                <h4>{title}</h4>
                <h4 className="App">${price}</h4>
              </header>
              <p className="App">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;