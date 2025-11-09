export default function SubmitButton({ stripeLink }) {
  return (
    <div className="submitButton">
      <a href={"#"} target="_blank">
        <button style={{ marginTop: "5px" }}>Submit</button>
      </a>
    </div>
  );
}
