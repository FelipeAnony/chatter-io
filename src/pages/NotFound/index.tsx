import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/MainButton';
import MainCard from '../../components/MainCard';
import { Template } from '../../components/mainComponents';
import * as C from './styles';

function NotFound() {

  const navigate = useNavigate();
  return ( 
    <Template>
      <>
      <MainCard>
        <C.Container>
          <div className='titleError'>ERROR</div>
          <div className='title404'>404</div>
          <div className='errorMsg'>Page not found!</div>
          <MainButton 
            onClickFn={() => navigate('/')}
            title='Back to home'
            color='#6800B9'
            size='100%'
          />
        </C.Container>
      </MainCard>
      </>
    </Template>
   );
}

export default NotFound;