import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <form
        className="contacts-form"
        action="https://formspree.io/f/xaygakyq"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="dc2d7dd4-443e-460d-8310-a98f1ae69823"
        ></input>
        <h2 className="contacts-heading">Contact us</h2>
        <div className="contacts-text_email">
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Email address" name="email" />
        </div>

        <input
          type="text"
          className="contacts-text2"
          placeholder="Subject of message"
          name="subject"
        />
        <input type="number" placeholder="Phone number" name="number" />
        <textarea placeholder="Message" name="message" />

        <button className="contacts-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
