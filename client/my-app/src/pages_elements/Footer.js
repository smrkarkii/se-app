import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="extras">
          <div>
            <h4>Our Location</h4>
            <p>M8J9+RMQ, Lalitpur 44600</p>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>+977 01 55247490</p>
            <p>ictc@ioe.edu.np</p>
          </div>
        </div>
        <div className="Copyright">
          <p style={{"text-align": "center"}}>Copyright © 2021 - ICTC, IOE</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
