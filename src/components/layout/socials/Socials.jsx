import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);
import { useState } from "react";
import {
  faInstagram,
  // faSquareFacebook,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ContactModal from "../../contact/ContactModal";

export default function Socials() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="socials">
        <h3>Connect With Us:</h3>
        <div className="socials-icons">
          <a
            id="ig"
            href="https://www.instagram.com/wizardalters?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <a
              id="fb"
              href="https://www.facebook.com/profile.php?id=61576092674965"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a> */}
          {/* <a
              id="yt"
              href="https://www.youtube.com/@Thortech117"
              target="_blank"
              >
              <FontAwesomeIcon icon={faYoutube} />
              </a> */}
          <a
            id="contact"
            aria-label="Open contact form"
            onClick={() => setOpenModal(true)}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />

      <h6>Site by Thortech</h6>
    </>
  );
}
