import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

// Ehi, lasciami un tuo contatto

const Form = () => {
  // const [inputValues, setInputValues] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const onChange = event => {
  //   setInputValues(event.target.value);
  // };

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section id='contact'>
      <form
        action='https://formspree.io/mrknikolajevic@gmail.com'
        method='POST'
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Scrivi il tuo nome'
          ref={register({ required: true })}
        />
        {errors.name && <small className='errorMsg'>Dai, dimmi chi sei!</small>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Scrivi la tue email'
          ref={register({ required: true })}
        />
        {errors.email && (
          <small className='errorMsg'>
            Ops, così non riesco a risponderti!
          </small>
        )}

        <label htmlFor='message'>Messaggio</label>
        <textarea
          id='message'
          name='message'
          rows='5'
          placeholder='Scrivi il tuo messaggio'
          ref={register({ required: true })}
        ></textarea>
        {errors.message && (
          <small className='errorMsg'>Mmmm...non credo di aver capito</small>
        )}

        <button type='submit' className='submit-btn'>
          Invia
        </button>
      </form>
    </section>
  );
};

export default Form;
