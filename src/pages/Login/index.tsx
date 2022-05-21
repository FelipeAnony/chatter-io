import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

import MainCard from '../../components/MainCard';
import  logo  from '../../images/logo.png'
import FormInput from '../../components/FormInput';

import * as C from './styles';
import { ErrorMessage, Template } from '../../components/mainComponents';
import validateForm from '../../helpers/validateForm';
import { firebaseErrorFormat } from '../../helpers/firebaseErrors';
import { login, loginWithGoogle } from '../../helpers/Api';
import MainButton from '../../components/MainButton';

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
      <Template>
        <MainCard>
          <>
          <div className='logo'>
            <img src={logo} alt='chatter.io' />
          </div>
          <h3>Login</h3>
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
          <MainButton 
            onClickFn={handleSubmit}
            title='Login'
            color='#6800B9'
            size='80%'
          />
          <hr/>
          <div
            className='googleLoginBtn' 
            onClick={handleGoogleLogin}
          >
            <FcGoogle className='googleLogo'/>
            Login With Google 
          </div>
          <a
            href='/forgotpassword' 
            target='_blank' 
            className='forgotPass'
          >
            Forgot your password?
          </a> 
          </>
        </MainCard>
        <div className='linkToSignUp'>
            Doesn't have an account yet? 
            <Link to='/signup'> Sign up now!</Link>
        </div> 
      </Template>
    </C.Container>
   );
}

export default Login;