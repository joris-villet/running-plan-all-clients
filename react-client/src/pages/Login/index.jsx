import Form from '../../components/Form';
import Input from '../../components/Input';
import React, { useState } from 'react';
import './dist/index.css';
import needle from 'needle';


export default function Login () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)

    needle('get','https://jsonplaceholder.typicode.com/users')
      .then(({ body }) => console.log(body))
      .catch(err => console.log(err))
  }

  return (
    <Form classForm="form__login">
      <Input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        text="text" 
        placeholder="Email"
        classLabel="form__login__label"
        classInput="form__login__input"
      />
      <Input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        text="password" 
        placeholder="Mot de passe"
        classLabel="form__login__label"
        classInput="form__login__input"
      />
      <button onClick={handleForm} className="form__login__button">Valider</button>
    </Form>
  )
}