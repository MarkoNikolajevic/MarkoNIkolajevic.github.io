import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onChange = event => {
    setName(event.target.value);
    setEmail(event.target.value);
    setMessage(event.target.value);
  };

  return (
    <section id='contact'>
      <form
        action='https://formspree.io/mrknikolajevic@gmail.com'
        method='POST'
        className='form'
      >
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Scrivi il tuo nome'
          value={name}
          onChange={onChange}
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='_replyto'
          placeholder='Scrivi la tue email'
          value={email}
          onChange={onChange}
          required
        />
        <label htmlFor='message'>Messaggio</label>
        <textarea
          id='message'
          name='message'
          rows='5'
          placeholder='Scrivi il tuo messaggio'
          value={message}
          onChange={onChange}
          required
        ></textarea>
        <button type='submit' className='submit-btn'>
          Invia
        </button>
      </form>
    </section>
  );
};

export default Form;
