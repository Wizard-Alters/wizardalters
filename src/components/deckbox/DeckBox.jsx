import BuyButton from "../buyButton/BuyButton";
import "./deckbox.css";

export default function DeckBox(props) {
  return (
    <li className="deckBox">
      <img src={props.boxObj.photoName} alt={props.boxObj.name} />
      <div>
        <h3>{props.boxObj.name}</h3>
        <span>${props.boxObj.price}</span>
        <br></br>
        <span>Quanity: {props.boxObj.quantity}</span>
        <BuyButton stripeLink={props.boxObj.stripeLink}></BuyButton>
      </div>
    </li>
  );
}