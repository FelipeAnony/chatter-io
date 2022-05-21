import * as C from './styles';

type Props = {
  title: string;
  onClickFn: () => any;
  size: string;
  color: string; 
};

function MainButton({ title, onClickFn, size, color }: Props) {
  return ( 
    <>
    <C.Container
      size={size}
      color={color}
      onClick={onClickFn}
    >
      { title }
    </C.Container>
    </>
  );
}

export default MainButton;