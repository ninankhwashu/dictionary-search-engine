import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="happy" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/ninankhwashu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nina Nkhwashu
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/ninankhwashu/dictionary-search-engine"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://wordtionary.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
