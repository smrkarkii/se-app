import "./style.css";
import { useState } from "react";
import postContext from "../context/post/postContext";
import { useContext } from "react";

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
  const handleClick = (e) => {
    e.preventDefault();
    addContact(cont.name, cont.email, cont.message);
    setCont({ name: "", email: "", message: "" });
    // props.showAlert("New Service Has been Added", "success");
  };
  return (
    <>
      <section className="ge-section">
        <div class="contact-container">
          <h1 className="ge-header">Contact</h1>
          <div className="underline"></div>
          <form method="POST">
            <label for="fname">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              onChange={inputHandler}
              value={cont.name}
            ></input>

            <label for="lname">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={inputHandler}
              value={cont.email}
            ></input>

            <label for="subject">Message</label>
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
