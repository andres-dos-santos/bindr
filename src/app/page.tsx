const stats = [
  { value: '25', label: 'Anos de mercado' },
  { value: '14', label: 'Anos GPTW' },
  { value: '4', label: 'Escritórios no Brasil' },
  { value: '5', label: 'Prêmios nacionais' }
];

const clients = ['ambev', 'SHEIN', 'CAIXA', 'vivo', 'Natura', 'SENAC', 'Itaú', 'AZUL'];

const posts = [
  'Não basta dizer, é preciso ter conteúdo',
  'Prêmio Colunistas Brasília 2024',
  'Não há lugar como o Brasil'
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero card">
        <header className="topbar">
          <span className="logo">binder</span>
          <span className="menu">☰</span>
        </header>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1580128637393-4f7b5922f8b3?auto=format&fit=crop&w=1200&q=80"
            alt="Campanha"
          />
        </div>
        <h1>POSICIONE</h1>
        <p className="subtitle">OS GRANDES NÚMEROS CONTAM GRANDES HISTÓRIAS</p>

        <div className="stats">
          {stats.map((item) => (
            <article key={item.value} className="stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="relevance card">
        <h2>RELEVÂNCIA SE CONQUISTA</h2>
        <p>com ideias memoráveis</p>
        <div className="campaign">MEGA VIRADA</div>
      </section>

      <section className="brands">
        <div className="brands-copy">
          <h3>
            TRABALHAMOS COM MARCAS
            <br />
            QUE ENTENDEM:
            <br />
            <span>RELEVÂNCIA NÃO SE COMPRA, SE CONSTRÓI.</span>
          </h3>
          <p>Criatividade, estratégia, coragem e movimento.</p>
        </div>
        <div className="brands-grid">
          {clients.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </section>

      <section className="content card split">
        <div>
          <h3>blog</h3>
          <ul>
            {posts.map((post) => (
              <li key={post}>{post}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>portal</h3>
          <ul>
            <li>Reputação, insight e tendências.</li>
            <li>As 100+ pessoas na presidência.</li>
            <li>Descobrir para criar melhor.</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <span className="logo">binder</span>
        <small>© 2026</small>
      </footer>
    </main>
  );
}
