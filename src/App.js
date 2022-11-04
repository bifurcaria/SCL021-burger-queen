import './App.css';
import React, { useState } from 'react';
import Categories from './components/Categories';
import Display from './components/Display';
import Login from './components/Login';
import Order from './components/Order';
import data from './components/menu.json';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment } from 'semantic-ui-react';


//aquí llamo a todos los componentes
function App() {
  //state que sea la categoria activa
  //crear funcion que le paso a categories onclick pero ponerla acá?
  const names = data.map((element) => { return element.name })

  //dejar items del menu como estado, puede servir
  //const [menuItems, setMenuItems] = useState(data);
  //aqui necesito crear uno que diga "todos" en vez de "drinks"
  const [activeCategory, setActiveCategory] = useState("Café");
  // const [categories, setCategories] = useState(allCategories);
  const [currentOrder, setCurrentOrder] = useState([])

  const filterMenu = (category) => {
    setActiveCategory(category);
    return;
  }

  const takeOrder = (item) => {
    setCurrentOrder([
      item,
      ...currentOrder
    ]);
    return
  }
  

  return (
    <div className="App">
      {/* cuidaito,  llaves son para usar codigo cuando quiera agregar un componente tengo q ponerlo como tag jsx y para pasarle informacion debe ser a traves de props */}
      <Login />
      <Categories
        menu={names}
        filterMenu={filterMenu}
      />
       <Grid columns={2} stackable>
      <Grid.Column>
        <Segment> <Display
        menu={data}
        category={activeCategory}
        add={takeOrder}
      /></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment> <Order
      command={currentOrder}
      /></Segment>
      </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
