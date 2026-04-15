// 1. O Array de Objetos (onde ficam as informações dos seus projetos)
const meusProjetos = [
    {
        nome: "Meu Primeiro Portfólio",
        descricao: "Este projeto que estou criando agora para o meu MVP.",
        link: "https://github.com/seu-usuario"
    },
    {
        nome: "Desafio de Lógica",
        descricao: "Um exercício onde pratiquei os fundamentos do JavaScript.",
        link: "#"
    }
];

// 2. Selecionar o local onde os projetos vão aparecer
const container = document.getElementById('container-projetos');

// 3. Função para "desenhar" os projetos na tela
meusProjetos.forEach(projeto => {
    // Criar a estrutura de cada projeto
    const cartao = `
        <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 5px;">
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
        </div>
    `;
    
    // Adicionar essa estrutura dentro do container
    container.innerHTML += cartao;
});