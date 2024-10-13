import EconomyDiagram from "./components/EconomyDiagram";
import Guesses from "./components/Guesses";

import "./style/app.css";

export function App() {
  return (
    <>
      <div className="landing-copy">
        <h1 className="gdple-heading">
          GDP<span style={{ color: "#ffc107" }}>LE</span>
        </h1>
        <p>
          Guess which US state has this GDP breakdown! A new puzzle created
          every 24 hours. Puzzle data is from Bureau of Economic Analysis,
          collected for 2022. Email{" "}
          <a href="mailto:gdple@iainschmitt.com">Iain</a> to report any issues!
        </p>
      </div>
      <EconomyDiagram />
      <Guesses />
    </>
  );
}
