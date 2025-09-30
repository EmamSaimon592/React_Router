import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your Name" /> <br />
        <input type="email" placeholder="Enter your Email" /> <br />
        <textarea placeholder="Enter your Message"></textarea> <br />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
