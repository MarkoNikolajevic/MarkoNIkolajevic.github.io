import React, { useState } from 'react';

import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import formImg from '../../img/form-img.png';

const formSchema = Yup.object().shape({
  name: Yup.string().required('Dai, dimmi chi sei!'),
  email: Yup.string()
    .email('Ops, così non riesco a risponderti')
    .required('Ehi, lasciami un contatto'),
  message: Yup.string().required('Mmmm...non credo di aver capito')
});

export default () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: 'https://formspree.io/mnqpegjj',
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          'Grazie di avermi contattato! Ti risponderò il prima possibile'
        );
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section id='contact'>
      <div className='grid-lg container'>
        <div className='form-img'>
          <img src={formImg} alt='' />
        </div>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={handleOnSubmit}
          validationSchema={formSchema}
        >
          {({ isSubmitting }) => (
            <Form className='form' noValidate>
              <label htmlFor='name'>Nome</label>
              <Field
                type='text'
                id='name'
                name='name'
                placeholder='Scrivi il tuo nome'
              />
              <ErrorMessage
                name='name'
                className='errorMsg'
                component='small'
              />

              <label htmlFor='email'>Email</label>
              <Field
                type='email'
                id='email'
                name='email'
                placeholder='Scrivi la tua email'
              />
              <ErrorMessage
                name='email'
                className='errorMsg'
                component='small'
              />

              <label htmlFor='message'>Messaggio</label>
              <Field
                id='message'
                name='message'
                rows='5'
                placeholder='Scrivi il tuo messaggio'
                component='textarea'
              />
              <ErrorMessage
                name='message'
                className='errorMsg'
                component='small'
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='submit-btn'
              >
                Invia
              </button>
              {serverState && (
                <p className={!serverState.ok ? 'errorMsg' : 'okMsg'}>
                  {serverState.msg}
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
