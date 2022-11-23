import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="extras">
          <div className="extra">
            <h4 className="topics">Our Location</h4>
            <p className="elements">M8J9+RMQ, Lalitpur 44600</p>
          </div>
          <div className="extra">
            <h4 className="topics">Menus</h4>
            <ul className="elements">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Events">Events</a>
              </li>
              <li>
                <a href="/Gallery">Gallery</a>
              </li>
              <li>
                <a href="/Reservations">Reservations</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="extra">
            <h4 className="topics">Contact Info</h4>
            <p className="elements">+977 01 55247490</p>
            <p className="elements">ictc@ioe.edu.np</p>
          </div>
        </div>
        <p className="Copyright">Copyright © 2021 - ICTC, IOE</p>
      </section>
    </>
  );
};

export default Footer;
