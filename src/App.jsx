import "./App.css";
import Card from "./components/card/card";
import cardData from "./components/card/card.json";
import DeckBox from "./components/deckbox/Deckbox";
import boxData from "./components/deckbox/deckbox.json"
import Socials from "./components/layout/socials/Socials";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">🧙‍♂️ Wizard Alters</h1>
        <nav className="nav">
          <a href="#" title="Alternative Cards">
            Altered Cards
          </a>
          <a href="#" title="Custom Deck Boxes">
            Deck Boxes
          </a>
          {/* <a href="#" title="Deck Builder">
            Build a Deck
          </a> */}
        </nav>
        <hr></hr>
      </header>
      <main className="body">
        <h1 className="title" style={{ textAlign: "left" }}>
          MTG Altered Art Cards
        </h1>
        <ul className="cards" style={{ listStyleType: "none" }}>
          {cardData.map((card) => (
            <Card cardObj={card} key={card.name} />
          ))}
        </ul>
        {/* boxes */}
        <h1 className="title" style={{ textAlign: "left" }}>
          Commander Deck Boxes
        </h1>
        <ul className="boxes" style={{ listStyleType: "none" }}>
          {boxData.map((box) => (
            <Card cardObj={box} key={box.name} />
          ))}
        </ul>
      </main>
      <footer className="footer">
        <Socials />
      </footer>
    </>
  );
}

export default App;
