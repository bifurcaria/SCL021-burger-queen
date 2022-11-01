import './App.css';
import React, {useState} from 'react';
import Categories from './components/Categories';
import Display from './components/Display';
import data from './components/menu.json';

//aquí llamo a todos los componentes
function App() {
  //state que sea la categoria activa
  //crear funcion que le paso a categories onclick pero ponerla acá?
  const names = data.map((element) => {return element.name})

  const [menuItems, setMenuItems] = useState(data);
  //aqui necesito crear uno que diga "todos" en vez de "drinks"
  const [activeCategory, setActiveCategory] = useState("drinks");
 // const [categories, setCategories] = useState(allCategories);


 const filterMenu = (category) => {
  setActiveCategory(category);
    return;
 }

  return (
    <div className="App">
      {/* cuidaito,  llaves son para usar codigo cuando quiera agregar un componente tengo q ponerlo como tag jsx y para pasarle informacion debe ser a traves de props */}
      <Categories
          menu={names}
          filterMenu={filterMenu}
        />
     <Display 
     menu={data}
     category={activeCategory}
     /> 
    </div>
  );
}

export default App;
