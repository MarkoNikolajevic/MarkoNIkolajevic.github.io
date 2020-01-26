import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

// Ehi, lasciami un tuo contatto
// {
//   errors.name && <small className='errorMsg'>Dai, dimmi chi sei!</small>;
// }

// {
//   errors.email && (
//     <small className='errorMsg'>Ops, così non riesco a risponderti!</small>
//   );
// }
// {
//   errors.message && (
//     <small className='errorMsg'>Mmmm...non credo di aver capito</small>
//   );
// }

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
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Scrivi la tue email'
        />

        <label htmlFor='message'>Messaggio</label>
        <textarea
          id='message'
          name='message'
          rows='5'
          placeholder='Scrivi il tuo messaggio'
        ></textarea>

        <button type='submit' className='submit-btn'>
          Invia
        </button>
      </form>
    </section>
  );
};

export default Form;
