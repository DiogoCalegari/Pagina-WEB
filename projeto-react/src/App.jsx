import { useState } from "react";
import Item from "./components/Item.jsx";

export default function App() {
  // elemento ao lado do botão
  const [visivel, setVisivel] = useState(true);

  // validação (mínimo 3 caracteres)
  const [nome, setNome] = useState("");
  const nomeInvalido = nome.length > 0 && nome.length < 3;

  // lista de itens adicionados com Enter
  const [novoItem, setNovoItem] = useState("");
  const [itens, setItens] = useState([]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const texto = novoItem.trim();
      if (!texto) return;
      setItens([...itens, texto]);
      setNovoItem("");
    }
  }

  return (
    <main className="container">
      <h1>Atividade de Recuperação</h1>

      {/* 2.1 */}
      <section>
        <h2>Mostrar / esconder</h2>
        <div className="linha">
          <button onClick={() => setVisivel(!visivel)}>
            {visivel ? "Esconder" : "Mostrar"}
          </button>
          {visivel && <span className="caixa">Olá</span>}
        </div>
      </section>

      <section>
        <h2>Validação de input</h2>
        <div className="linha">
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {nomeInvalido && (
            <span className="erro">Digite pelo menos 3 caracteres.</span>
          )}
        </div>
      </section>

      <section>
        <h2>Lista dinâmica</h2>
        <input
          type="text"
          placeholder="Digite e pressione Enter"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul>
          {itens.map((texto, index) => (
            <Item
              key={index}
              texto={texto}
              corFundo={index % 2 === 0 ? "#d2e1f5" : "#a1b8f8"}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
