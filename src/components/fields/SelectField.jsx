function SelectField({
  name,
  label,
  value,
  options,
  onChange,
  error,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default SelectField;