import "./style.css";
import { useState } from "react";
import postContext from "../context/post/postContext";
import { useContext } from "react";
import Alert from "../components/Alert";

const Contact = () => {
  const context = useContext(postContext);
  const { addContact } = context;
  const [cont, setCont] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCont({
      ...cont,
      [name]: value,
    });
    console.log(cont);
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    addContact(cont.name, cont.email, cont.message);
    setCont({ name: "", email: "", message: "" });
    showAlert("New Contact Has been Added", "success");
  };
  return (
    <>
      {(document.title = "ICTC - Contact")}
      <Alert alert={alert}/>
      <section className="ge-section" style={{marginTop:"7rem", borderRadius:"20px"}}>
        <div className="contact-container" style={{marginTop:"-1rem"}}>
          <h1 className="ge-header">Contact</h1>
          <div className="underline"></div>
          <form method="POST">
            <label className="con" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              onChange={inputHandler}
              value={cont.name}
            ></input>

            <label className="con" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={inputHandler}
              value={cont.email}
            ></input>

            <label className="con" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              style={{ height: "100px" }}
              onChange={inputHandler}
              value={cont.message}
            ></textarea>

            <button className="submit" type="button" onClick={handleClick}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
