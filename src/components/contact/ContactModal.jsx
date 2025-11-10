import SubmitButton from "../submitButton/SubmitButton";

export default function ContactModal() {
  // const [openModal, setOpenModal] = useState;

  return (
    <>
      <form action="https://formspree.io/f/mqawzdpz" method="POST">
        {/* Name */}
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="First Name"
          placeholder="Your name..."
        ></input>
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="Last Name"
          placeholder="Your last name..."
        ></input>
        {/* Email */}
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="Email"
          placeholder="Your email..."
        ></input>
        {/* Message */}
        <label for="emailMsg">Message</label>
        <input
          type="text"
          id="emailMsg"
          name="Message"
          placeholder="Your message..."
        ></input>
        <SubmitButton />
      </form>
    </>
  );
}
