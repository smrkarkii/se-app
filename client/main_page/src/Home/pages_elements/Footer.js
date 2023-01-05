import { social } from "../data";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="flex-footer">
          <div className="flex-item-footer">
            <h4 className="topics" style={{ color: "white" }}>
              Our Location
            </h4>
            <p className="elements">M8J9+RMQ, Lalitpur 44600</p>
          </div>
          <div className="flex-item-footer">
            <h4 className="topics" style={{ color: "white" }}>
              Contact Info
            </h4>
            <p className="elements">+977 01 55247490</p>
            <p className="elements">ictc@ioe.edu.np</p>
          </div>
          <div className="flex-item-footer">
            <h4 className="topics" style={{ color: "white" }}>
              Follow Us
            </h4>
            <div className="flex-footer">
              {social.map((socials) => {
                const { id, url, icon } = socials;
                return (
                  <div key={id}>
                    <a href= {url} style={{'color':'white'}}>{icon}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p
            className="Copyright"
            style={{ margin: "0", "text-align": "center" }}
          >
            Copyright © 2021 - ICTC, IOE
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
