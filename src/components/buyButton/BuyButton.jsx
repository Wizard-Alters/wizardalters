export default function BuyButton({ stripeLink }) {
  return (
    <div className="buyButton">
        <a href={ stripeLink } target="_blank">
        <button style={{ marginTop: "5px" }}>Buy Now</button>
      </a>
    </div>
  );
}
