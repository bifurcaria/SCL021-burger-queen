import './App.css';
import Categories from './components/Categories';
import Display from './components/Display';
import data from './components/menu.json';

//aquí llamo a todos los componentes
function App() {
  //state que sea la categoria activa
  //crear funcion que le paso a categories onclick pero ponerla acá?
  const names = data.map((element) => {return element.name})
  return (
    <div className="App">
      {/* cuidaito,  llaves son para usar codigo cuando quiera agregar un componente tengo q ponerlo como tag jsx y para pasarle informacion debe ser a traves de props */}
      <Categories
          menu={names}
        />
     <Display 
     menu={data}
     category="drinks"
     /> 
    </div>
  );
}

export default App;
