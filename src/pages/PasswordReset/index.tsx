import { useState } from 'react';

import * as C from './styles';

import FormInput from '../../components/FormInput';
import MainCard from '../../components/MainCard';
import logo from '../../images/logo.png';

function PasswordReset() {
  const [email, setEmail] = useState('');

  return ( 
    <C.Container>
      <MainCard>
        <>
          <div className='logo'>
            <img src={logo} alt='chatter.io' />
          </div>
          <h3>Password recovery</h3>
          <FormInput
            inputType='email'
            title='Email'
            setState={setEmail}
            state={email} 
            error=''
            inputPlaceholder='example@example.com'
          />
          <button>
            Send recovery email
          </button>
        </>
      </MainCard>
    </C.Container>
   );
}

export default PasswordReset;