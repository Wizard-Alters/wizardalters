import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Card from "./components/card/card";

///////////////////////////////
// Card Data
// TODO: Make this data driven
///////////////////////////////
const cardData = [
  {
    name: "Dragon Ball Mountain",
    price: 45,
    photoName: "images/db_mountain.jpg",
    quantity: 1,
    stripeLink: "PUT IT HERE",
  },
  {
    name: "Dragon Ball Plains",
    price: 45,
    photoName: "images/db_plains.jpg",
    quantity: 1,
    stripeLink: "PUT IT HERE",
  },
  {
    name: "Dragon Ball Swamp",
    price: 45,
    photoName: "images/db_swamp.jpg",
    quantity: 1,
    stripeLink: "PUT IT HERE",
  },
];

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
        <h1 className="title">What's Popular</h1>
        <div className="instructions">
          <p style={{ textAlign: "left", fontSize: "12px" }}>
            To make a purchase, copy the name of your desired product, click
          </p>
          <p style={{ textAlign: "left", fontSize: "12px" }}>
            "Buy Now", and paste the product name into the venmo payment.
          </p>
        </div>
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
      </footer>
    </>
  );
}

export default App;
