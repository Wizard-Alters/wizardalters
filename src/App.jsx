import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Card from "./components/card/card";
import cardData from "./components/card/card.json";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">🧙‍♂️ Wizard Customs</h1>
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
        <h1 className="title">MTG Altered Art Cards</h1>
        <ul className="cards" style={{ listStyleType: "none" }}>
          {cardData.map((card) => (
            <Card cardObj={card} key={card.name} />
          ))}
        </ul>
      </main>
      <footer className="footer">
        <div className="socials">
          <h3>Connect With Us:</h3>
          <a id="ig" href="#" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            id="fb"
            href="https://www.facebook.com/profile.php?id=61576092674965"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          {/* <a
            id="yt"
            href="https://www.youtube.com/@Thortech117"
            target="_blank"
            >
            <FontAwesomeIcon icon={faYoutube} />
            </a> */}
        </div>
        <a href="#" title="contact">
          Contact Us
        </a>
        <h6>By Thortech</h6>
      </footer>
    </>
  );
}

export default App;
