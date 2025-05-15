import React, { useState } from "react";
import "../App.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        type="email"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;

// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("Message sent!");
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-3">
//       <input type="text" name="name" placeholder="Your Name" required className="form-control my-2" onChange={handleChange} />
//       <input type="email" name="email" placeholder="Your Email" required className="form-control my-2" onChange={handleChange} />
//       <textarea name="message" placeholder="Message" required className="form-control my-2" onChange={handleChange}></textarea>
//       <button type="submit" className="btn btn-primary">Send</button>
//     </form>
//   );
// }
