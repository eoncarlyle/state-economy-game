import { Link } from "wouter";

export default function AboutPage() {
  return (
    <>
      <h1 className="gdple-heading">
        GDP<span style={{ color: "#ffc107" }}>LE</span>
      </h1>
      <p className="landing-copy">
        The goal of the game is to guess US state has the GDP breakdown shown! A
        new puzzle created every 24 hours. Puzzle data is from Bureau of
        Economic Analysis, collected for 2022. Email{" "}
        <a href="mailto:gdple@iainschmitt.com">Iain</a> to report any issues!
      </p>
      <Link href="/" className="center-link">
        Back to the game
      </Link>
    </>
  );
}
