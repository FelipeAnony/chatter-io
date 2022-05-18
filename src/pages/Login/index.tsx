import { useState } from 'react';
import { Link } from "react-router-dom";

import MainCard from '../../components/MainCard';
import  logo  from '../../images/logo.png'
import FormInput from '../../components/FormInput';

import * as C from './styles';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailError, setEmailError] = useState('a');
  const [passwordError, setPasswordError] = useState('a');

  return ( 
    <C.Container>
      <img src={logo} alt='chatter.io' />
      <MainCard>
        <>
        <h1>Login</h1>
        <FormInput 
          inputType='email'
          title='Email'
          inputPlaceholder='example@example.com'
          error={emailError}
          state={userEmail}
          setState={setUserEmail}
        />
        <FormInput 
          inputType='password'
          title='Password'
          error={passwordError}
          state={userPassword}
          setState={setUserPassword}
        />
        <button>
          Login
        </button>
        <div>
          Doesn't have an account yet? 
          <Link to='/signup'> Sign up now!</Link>
        </div>  
        </>
      </MainCard>
    </C.Container>
   );
}

export default Login;