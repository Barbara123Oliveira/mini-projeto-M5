import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Meu Portfólio 🚀</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Olá, eu sou <span>Bárbara Oliveira</span></h2>
        <p>Desenvolvedora Frontend apaixonada por criar experiências digitais ✨</p>
        <a href="#projects" className="btn">Ver Projetos</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Sobre mim</h2>
        <p>
          Sou estudante de programação focada em desenvolvimento web com React.
          Gosto de criar interfaces modernas, responsivas e com atenção aos
          detalhes. Amo arte e meu objetivo é trabalhar com isso, tanto que desenho
          desde meus cinco anos e faço quadros e pinturas desde os doze.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projetos</h2>
        <div className="project-cards">
          <div className="card">
            <h3>🌱 API Social</h3>
            <p>API Node.js com rotas sobre livros e sustentabilidade.</p>
          </div>
          <div className="card">
            <h3>🎨 Landing Page</h3>
            <p>Landing page desenvolvida com React e animações em CSS.</p>
          </div>
          <div className="card">
            <h3>⚡ Jogo do Dado</h3>
            <p>Jogo divertido em HTML, CSS e JavaScript vanilla.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contato</h2>
        <p>Entre em contato comigo para colaborações ou oportunidades:</p>
        <a href="mailto:seuemail@gmail.com" className="btn">📩 Enviar Email</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} - Desenvolvido por Bárbara Oliveira 💻</p>
      </footer>
    </div>
  );
}