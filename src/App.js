// src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <header className="p-4 text-center bg-primary">
        <h1 className="display-4">Miguel Alexandre</h1>
        <p className="lead">Desenvolvedor Backend | Python | PHP </p>
      </header>

      <main className="container py-5">
        <section className="mb-5">
          <h2>🧑‍💻 Sobre Mim</h2>
          <p>
            Sou apaixonado por tecnologia e desenvolvimento de sistemas. Atualmente me dedico a projetos backend com foco em performance e segurança. Gosto de aprender, criar soluções e evoluir constantemente.
          </p>
        </section>

        <section className="mb-5">
          <h2>🚀 Projetos</h2>
          <ul className="list-group">
            <li className="list-group-item bg-dark text-white border-light">
              <strong>Sistema de Barbearia</strong> – App com React + Flask, controle de estoque, agendamento e caixa.
            </li>
            <li className="list-group-item bg-dark text-white border-light">
              <strong>Chat Privado com Criptografia</strong> – Bootstrap 4 + Flask, proteção ponta a ponta.
            </li>
            <li className="list-group-item bg-dark text-white border-light">
              <strong>Bot de Monitoramento</strong> – Machine learning com Python, análise de comportamento de usuários.
            </li>
          </ul>
        </section>

        <section>
          <h2>📫 Contato</h2>
          <p>Email: migueltecnicoinfo@gmail.com</p>
          <p>GitHub: <a href="https://github.com/miguelcoder" className="text-info">miguelcoder</a></p>
        </section>
      </main>

      <footer className="text-center p-3 bg-secondary">
        <small>© {new Date().getFullYear()} Miguel Alexandre – Todos os direitos reservados</small>
      </footer>
    </div>
  );
}

export default App;
