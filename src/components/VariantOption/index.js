import './VariantOption.css';

const VariantOption = (props) => {
  const { variant, value, onChange, selected } = props;
  const handleChangeVariant = (event) => {
    console.log(`${variant}: ${event.target.value}`);
    onChange(event);
  };
  return (
    <div className="variant-option">
      <input
        type="radio"
        id={`varaint-${variant}-${value}`}
        value={value}
        name={`variant-${variant}`}
        onChange={handleChangeVariant}
        className="hidden"
      />
      <label htmlFor={`varaint-${variant}-${value}`}>
        <div
          className={`rounded-xl p-5 ${
            selected
              ? 'border border-blue-500 outline-blue-500'
              : 'border border-gray-300'
          } hover:border-gray-400`}
        >
          {props.children}
        </div>
      </label>
    </div>
  );
};

export default VariantOption;
