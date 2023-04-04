
const Input = ({ value, setValue }) => {

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <input value={value} onChange={onChange} />
    );
  };
  
  export default Input;
  