function Projetos() {
  const lista = [
    { id: 1, nome: "MEU PORTFÓLIO REACT", link: "https://github.com/jucineidesilva" },
    { id: 2, nome: "ATIVIDADE JAVASCRIPT", link: "https://github.com/jucineidesilva" },
    { id: 3, nome: "PROJETO REACT", link: "https://github.com/jucineidesilva" }
  ];

  return (
    <section className="projetos-lista">
      <h2>MEUS PROJETOS</h2>
      {lista.map((proj) => (
        <div key={proj.id} className="projeto-card">
          <h3>{proj.nome}</h3>
          <a href={proj.link} target="_blank" rel="noreferrer">Ver no GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Projetos;