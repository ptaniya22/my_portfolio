import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_u1bnqpd', 'template_8t128gt', form.current, {
        publicKey: '6a4a-rgxq8NIFOnbN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        error => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
