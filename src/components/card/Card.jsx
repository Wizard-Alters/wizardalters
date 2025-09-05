import BuyButton from "../buyButton/BuyButton";
import "./card.css";

export default function Card(props) {
  return (
    <li className="card">
      <img src={props.cardObj.photoName} alt={props.cardObj.name} />
      <div>
        <h3>{props.cardObj.name}</h3>
        <span>${props.cardObj.price}</span>
        <br></br>
        <span>Quanity: {props.cardObj.quantity}</span>
        <BuyButton stripeLink={props.cardObj.stripeLink}></BuyButton>
      </div>
    </li>
  );
}
