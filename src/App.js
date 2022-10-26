import './App.css';
import Display from './components/Display';
import data from './components/menu.json';

//aquí llamo a todos los componentes
function App() {
  return (
    <div className="App">
      {/* cuidaito,  llaves son para usar codigo cuando quiera agregar un componente tengo q ponerlo como tag jsx y para pasarle informacion debe ser a traves de props */}
     <Display menu={data}/> 
    </div>
  );
}

export default App;
