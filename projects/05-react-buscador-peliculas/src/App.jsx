import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix ..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>Aca van a ir las peliculas (resultados)</main>
    </div>
  );
}

export default App;
