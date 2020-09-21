import React, { useState } from 'react';

import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Container from './Container';

const Contact = styled.section`
  background: #f5f5f7;
`;

Contact.Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin-top: 1rem;
      padding: 1.25rem 0 0.5rem;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1rem;
    }

    input,
    textarea {
      padding: 0.75rem 0.25rem;
      border-radius: 8px;
      border: 1px solid transparent;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25),
        -4px -4px 4px rgba(238, 238, 238, 0.5);
    }

    textarea {
      resize: none;
    }
  }
`;

const formSchema = Yup.object().shape({
  name: Yup.string().required('Dai, dimmi chi sei!'),
  email: Yup.string()
    .email('Ops, così non riesco a risponderti')
    .required('Ehi, lasciami un contatto'),
  message: Yup.string().required('Mmmm...non credo di aver capito'),
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
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          'Grazie di avermi contattato! Ti risponderò il prima possibile'
        );
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Contact>
      <Container>
        <Contact.Content>
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
        </Contact.Content>
      </Container>
    </Contact>
  );
};
