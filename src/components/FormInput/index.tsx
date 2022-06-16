import * as C from './styles';

type Props = {
  inputType: string;
  title: string;
  inputPlaceholder?: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  error: string;
};

function FormInput({
  inputType,
  title,
  inputPlaceholder,
  error,
  state,
  setState,
}: Props) {
  return (
    <C.Container error={error}>
      <div className="innerContainer">
        <label htmlFor={title}>{title}</label>
        <input
          name={title}
          id={title}
          required
          type={inputType}
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={inputPlaceholder ? inputPlaceholder : ''}
        />
      </div>
      {error !== '' && <div className="errorMsg">{error}</div>}
    </C.Container>
  );
}

export default FormInput;
