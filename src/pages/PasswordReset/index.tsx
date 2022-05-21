import { useState } from 'react';

import * as C from './styles';

import FormInput from '../../components/FormInput';
import MainCard from '../../components/MainCard';
import logo from '../../images/logo.png';
import validateForm from '../../helpers/validateForm';
import { ErrorMessage } from '../../components/mainComponents';
import { resetPassword } from '../../helpers/Api';
import { firebaseErrorFormat } from '../../helpers/firebaseErrors';
import MainButton from '../../components/MainButton';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [recoveryError, setRecoveryError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasswordReset = async () => {
    const tmpEmailError = validateForm.email(email);
    setEmailError(tmpEmailError || '');

    if(tmpEmailError) return;

    try {
      await resetPassword(email);
      setSuccess('Email sent!')
    } catch (error) {
      setRecoveryError(firebaseErrorFormat(error));
    }

  };

  return ( 
    <C.Container>
      <MainCard>
        <>
          <div className='logo'>
            <img src={logo} alt='chatter.io' />
          </div>
          <h3>Password recovery</h3>
          {success && success}
          {recoveryError && <ErrorMessage>{recoveryError}</ErrorMessage>}
          <FormInput
            inputType='email'
            title='Email'
            setState={setEmail}
            state={email} 
            error={emailError}
            inputPlaceholder='example@example.com'
            />
          <MainButton 
            onClickFn={handlePasswordReset}
            title='Send Recovery Email'
            color='#6800B9'
            size='auto'
          />
        </>
      </MainCard>
    </C.Container>
   );
}

export default PasswordReset;