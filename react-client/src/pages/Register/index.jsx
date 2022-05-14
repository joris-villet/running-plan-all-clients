import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
// import needle from 'needle';
import './index.css';


export default function Register () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)

    // needle('post','https://running-plan-strapi.herokuapp.com/auth/local', {
    //   identifier: email,
    //   password: password
    // })
    //   .then(({ body }) => console.log(body))
    //   .catch(err => console.log(err))
  }

  return (
    <Form classForm="form__register">
      <Input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        text="text" 
        placeholder="Email"
        classLabel="form__register__label"
        classInput="form__register__input"
      />
      <Input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        text="text" 
        placeholder="Mot de passe"
        classLabel="form__register__label"
        classInput="form__register__input"
      />
      <Input 
        onChange={(e) => setRepeatPassword(e.target.value)} 
        value={repeatPassword} 
        text="text" 
        placeholder="Confirmez le mot de passe"
        classLabel="form__register__label"
        classInput="form__register__input"
      />
      <button onClick={handleForm} className="form__register__button">Valider</button>
    </Form>
  )
}