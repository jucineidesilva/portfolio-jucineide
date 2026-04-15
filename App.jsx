import Perfil from './Perfil';
import Projetos from './Projetos';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Esta linha abaixo é que faz a foto aparecer! */}
      <Perfil />
      
      <Projetos />
    </div>
  );
}

export default App;