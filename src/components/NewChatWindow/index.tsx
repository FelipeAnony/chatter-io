import { SetStateAction } from 'react';
import useMainContext from '../../hooks/useMainContext';
import * as C from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

type Props = {
  visibility: boolean;
  setVisibility: React.Dispatch<SetStateAction<boolean>>;
};

function NewChatWindow ({visibility, setVisibility}: Props) {
  
  const { theme } = useMainContext();

  return ( 
    <C.Container 
      visibility={visibility}
      userTheme={theme}
    >
      <div className='backButtonContainer'>
        <div 
          className='backButton'
          onClick={() => setVisibility(false)}
        >
          <AiOutlineArrowLeft />
        </div>
      </div>
      <div className='innerContainer'>

      </div>
    </C.Container>
   );
}

export default NewChatWindow;