import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../../components/FormInput";
import MainCard from "../../components/MainCard";
import  logo  from '../../images/logo.png';

import * as C from './styles';

import validateForm from "../../helpers/validateForm";
import { signup } from "../../helpers/Api";
import { ErrorMessage } from "../../components/mainComponents";
import { firebaseErrorFormat } from "../../helpers/firebaseErrors";


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [signupError, setSignupError] = useState<any>();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const tmpNameError = validateForm.name(name);
    const tmpEmailError = validateForm.email(email);
    const tmpPasswordError = validateForm.password(password, confirmPassword);
  
    setNameError(tmpNameError || '');
    setEmailError(tmpEmailError || '');
    setPasswordError(tmpPasswordError || '');

    if(tmpNameError || tmpEmailError || tmpPasswordError) {
      return;

    } else {
      try {
        await signup(email, password);
        navigate('/')
        
      } catch (error) {
        setSignupError(firebaseErrorFormat(error));
      }
    }
  };

  return ( 
    <C.Container>
      <img src={logo} alt='chatter.io' />
      <MainCard>
        <>
        <h1>Sign Up</h1>
        {signupError && <ErrorMessage>{signupError}</ErrorMessage>}
        <FormInput 
          title="Name"
          inputType="text"
          inputPlaceholder="Elon Musk"
          state={name}
          setState={setName}
          error={nameError}
        />
        <FormInput 
          title="Email"
          inputType="email"
          inputPlaceholder="example@example.com"
          state={email}
          setState={setEmail}
          error={emailError}
        />
        <FormInput 
          title="Password"
          inputType="password"
          state={password}
          setState={setPassword}
          error={passwordError}
        />
        <FormInput 
          title="Confirm Password"
          inputType="password"
          state={confirmPassword}
          setState={setConfirmPassword}
          error={passwordError}
        />
        <button onClick={handleSubmit}>Sign up now</button>
        </>
      </MainCard>
    </C.Container>
   );
}

export default SignUp;