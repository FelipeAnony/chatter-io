import * as C from './styles';

function Loading() {
  return (
    <C.Container>
      Loading
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/chatter-io-7f2f1.appspot.com/o/images%2FNetflix_LoadTime.gif?alt=media&token=1cba2d42-cf0e-4863-a399-8343c2221436"
          alt="loading spin"
        />
      </div>
    </C.Container>
  );
}

export default Loading;
