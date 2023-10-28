import logoTareas from './imagenes/logo-tareas.png'
import './App.css';
import ListaDeTarea from './componentes/ListaDeTarea';

function App() {
  return (
    <div className="App">
     <div className='logo-tareas-contenedor'>
      <img
      src={logoTareas}
      className='logo-tareas' 
      />
     </div>
     <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <ListaDeTarea />
     </div>
    </div>
  );
}

export default App;
