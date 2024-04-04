import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './Contact.module.scss';
// import contactInput from './active.js';

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
    <div className={style.contact_wraper}>
      <p className={style.contact_text}>
        У вас есть интересный проект или вы просто хотите поздороваться?
        <br /> Не стесняйтесь, отправьте мне сообщение!
      </p>

      <form className={style.form_wrapper} ref={form} onSubmit={sendEmail}>
        <div className={style.input_wraper}>
          <label className={style.input_label}>Ваше имя</label>
          <input
            className={style.contact_input}
            type="text"
            name="user_name"
            required
          />
        </div>

        <div className={style.input_wraper}>
          <label className={style.input_label}>Тема сообщения</label>
          <input
            className={style.contact_input}
            type="text"
            name="subject"
            required
          />
        </div>
        <div className={style.input_wraper}>
          <label className={style.input_label}>E-mail</label>
          <input
            className={style.contact_input}
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className={style.input_wraper}>
          <label className={style.input_label}>Сообщение</label>
          <textarea className={style.contact_input} name="message" />
        </div>
        <button className={style.message_btn} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
