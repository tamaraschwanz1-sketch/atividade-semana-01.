
const express = require("express");

const app = express();
const PORT = 3000;

// Estilo visual da aplicação
const estilo = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #090c18, #182443);
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header {
    background: #080b15;
    padding: 25px;
    text-align: center;
    border-bottom: 2px solid #e63946;
  }

  header h2 {
    font-size: 28px;
    letter-spacing: 3px;
  }

  header span {
    color: #e63946;
  }

  nav {
    margin-top: 20px;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin: 10px;
    font-weight: bold;
  }

  nav a:hover {
    color: #ff4757;
  }

  main {
    flex: 1;
    text-align: center;
    padding: 80px 20px;
  }

  h1 {
    font-size: 44px;
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-top: 50px;
    flex-wrap: wrap;
  }

  .card {
    width: 300px;
    padding: 40px 25px;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .marvel {
    background: linear-gradient(135deg, #7c1423, #e62429);
  }

  .dc {
    background: linear-gradient(135deg, #102e67, #2374e1);
  }

  .card h2 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  .card p {
    font-size: 16px;
  }

  .botao {
    display: inline-block;
    background: white;
    color: #111827;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: bold;
    margin-top: 15px;
  }

  .voltar {
    display: inline-block;
    background: #e63946;
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 8px;
    margin-top: 20px;
  }

  footer {
    background: #080b15;
    text-align: center;
    padding: 20px;
  }

  footer p {
    font-size: 13px;
    margin: 0;
    color: #aab4cc;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 32px;
    }

    main {
      padding: 50px 15px;
    }
  }
`;

// Estrutura HTML reutilizada pelas rotas
function criarPagina(titulo, conteudo) {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0">
      <title>${titulo} - HeroVerse</title>
      <style>${estilo}</style>
    </head>

    <body>
      <header>
        <h2>HERO<span>VERSE</span></h2>

        <nav>
          <a href="/">Início</a>
          <a href="/marvel">Marvel</a>
          <a href="/dc">DC</a>
        </nav>
      </header>

      <main>
        ${conteudo}
      </main>

      <footer>
        <p>HeroVerse | Atividade Semana 01</p>
        <p>Desenvolvido com Node.js e Express</p>
      </footer>
    </body>
    </html>
  `;
}

// ROTA 1 - PÁGINA INICIAL
app.get("/", (req, res) => {
  res.send(
    criarPagina(
      "Página Inicial",
      `
      <h1>MARVEL & DC</h1>

      <p>Bem-vindo ao site da Marvel e DC!</p>

      <p>Explore os universos dos maiores super-heróis.</p>

      <div class="cards">

        <a href="/marvel" class="card marvel">
          <h2>MARVEL</h2>
          <p>Homem de Ferro, Thor, Hulk e Homem-Aranha.</p>
          <span class="botao">Explorar Marvel</span>
        </a>

        <a href="/dc" class="card dc">
          <h2>DC COMICS</h2>
          <p>Batman, Superman, Flash e Mulher-Maravilha.</p>
          <span class="botao">Explorar DC</span>
        </a>

      </div>
      `
    )
  );
});

// ROTA 2 - MARVEL
app.get("/marvel", (req, res) => {
  res.send(
    criarPagina(
      "Universo Marvel",
      `
      <h1 style="color: #ff4757;">UNIVERSO MARVEL</h1>

      <p>Este é o universo de heróis da Marvel.</p>

      <p>
        Conheça os Vingadores, Homem-Aranha,
        Homem de Ferro, Thor e Capitão América.
      </p>

      <a href="/" class="voltar">Voltar ao início</a>
      `
    )
  );
});

// ROTA 3 - DC
app.get("/dc", (req, res) => {
  res.send(
    criarPagina(
      "Universo DC",
      `
      <h1 style="color: #458aff;">UNIVERSO DC</h1>

      <p>Este é o universo de heróis da DC.</p>

      <p>
        Conheça Batman, Superman,
        Mulher-Maravilha, Flash e Aquaman.
      </p>

      <a href="/" class="voltar">Voltar ao início</a>
      `
    )
  );
});

// INICIALIZAÇÃO DO SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor funcionando em http://localhost:${PORT}`);
});
