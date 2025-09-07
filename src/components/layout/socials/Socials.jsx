import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  // faSquareFacebook,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ContactModal from "../../contact/ContactModal";

export default function Socials () {
    return (
      <>
        <div className="socials">
          <h3>Connect With Us:</h3>
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
        </div>
        <ContactModal />
        <h6>Site by Thortech</h6>
      </>
    );
}