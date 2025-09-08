import { useState } from "react";

export default function ContactModal() {
  // const [openModal, setOpenModal] = useState;

  return (
    <>
      <form>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name..."
        ></input>
        <label for="lname">Last Name</label>
        <input 
        type="text" id="lname" placeholder="Your last name..."></input>
      </form>
    </>
  );
}
