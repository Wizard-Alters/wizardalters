import SubmitButton from "../submitButton/SubmitButton";
import "./ContactModal.css";

export default function ContactModal({ isOpen = false, onClose = () => {} }) {
  if (!isOpen) return null;

  return (
    <div
      className={`contact-modal-overlay ${isOpen ? "open" : ""}`}
      onClick={() => onClose && onClose()}
    >
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div className="contact-modal-header">
          <h3 className="contact-modal-title" id="contact-modal-title">
            Contact Us
          </h3>
          <button
            type="button"
            className="contact-modal-close"
            aria-label="Close contact form"
            onClick={() => onClose && onClose()}
          >
            ×
          </button>
        </div>

        <div className="contact-modal-body">
          <form action="https://formspree.io/f/mqawzdpz" method="POST">
            {/* Name row: First and Last side-by-side on wide screens */}
            <div className="contact-row">
              <div className="col">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  placeholder="Your name..."
                />
              </div>

              <div className="col">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastName"
                  placeholder="Your last name..."
                />
              </div>
            </div>

            {/* Email */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email..."
            />

            {/* Message */}
            <label htmlFor="emailMsg">Message</label>
            <textarea
              id="emailMsg"
              name="message"
              placeholder="Your message..."
              rows={5}
            />

            <div className="contact-modal-footer">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
