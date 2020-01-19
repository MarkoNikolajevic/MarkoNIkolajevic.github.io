import React, { useState } from 'react';

const Form = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onChange = event => {
    setInputValues(event.target.value);
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
          value={inputValues.name}
          onChange={onChange}
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='_replyto'
          placeholder='Scrivi la tue email'
          value={inputValues.email}
          onChange={onChange}
          required
        />
        <label htmlFor='message'>Messaggio</label>
        <textarea
          id='message'
          name='message'
          rows='5'
          placeholder='Scrivi il tuo messaggio'
          value={inputValues.message}
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
