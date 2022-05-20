import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import MainCard from '../../components/MainCard';
import  logo  from '../../images/logo.png'
import FormInput from '../../components/FormInput';

import * as C from './styles';
import { ErrorMessage } from '../../components/mainComponents';
import validateForm from '../../helpers/validateForm';
import { firebaseErrorFormat } from '../../helpers/firebaseErrors';
import { login, loginWithGoogle } from '../../helpers/Api';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const tmpEmailError = validateForm.email(userEmail);
    setEmailError(tmpEmailError || '');

    if(tmpEmailError) {
      return;

    } else {
      try {
        await login(userEmail, userPassword);
        navigate('/')
        
      } catch (error) {
        setLoginErrorMsg(firebaseErrorFormat(error));
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      navigate('/') 
    } catch (error) {
      setLoginErrorMsg(firebaseErrorFormat(error))
    }
  }

  return ( 
    <C.Container>
      <img src={logo} alt='chatter.io' />
      <MainCard>
        <>
        <h1>Login</h1>
        {loginErrorMsg && <ErrorMessage>{loginErrorMsg}</ErrorMessage>}
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
          error=''
          state={userPassword}
          setState={setUserPassword}
        />
        <button onClick={handleSubmit}>
          Login
        </button>
        <button onClick={handleGoogleLogin}>
          Login With Google
        </button>
        <a
          href='/forgotpassword' 
          target='_blank' 
          className='forgotPass'
        >
          Forgot your password?
        </a>
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