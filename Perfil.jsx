import foto from './foto.jpeg';

function Perfil() {
  return (
    <div className="perfil-topo">
      <img src={foto} alt="Foto de perfil" className="foto-estilo" />
      <h1>Jucineide Silva</h1>
      <p>Desenvolvedora Front-End em formação | Conheça meus trabalhos abaixo.</p>
    </div>
  );
}

export default Perfil;