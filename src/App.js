import logoTareas from './imagenes/logo-tareas.png'
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='logo-tareas-contenedor'>
      <img
      src={logoTareas}
      className='Logo-Tareas' 
      />
     </div>
    </div>
  );
}

export default App;
