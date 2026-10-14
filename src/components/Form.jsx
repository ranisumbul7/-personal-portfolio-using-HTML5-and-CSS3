
import { useState } from "react";
import Button from "./Button";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      `Thank you, ${name}! Your form was submitted.`
    );

    setName("");
    setEmail("");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <Button text="Send Message" type="submit" />

      {message && <p>{message}</p>}
    </form>
  );
}

export default Form;
