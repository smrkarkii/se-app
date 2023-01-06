import './style.css'

const Contact = () => {
  return (
    <>
      <section className="ge-section">
        <div class="contact-container">
        <h1 className="ge-header">Contact</h1>
        <div className="underline"></div>
          <form>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            ></input>

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            ></input>
            
            <label for="subject">Description</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "100px" }}
            ></textarea>

            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
