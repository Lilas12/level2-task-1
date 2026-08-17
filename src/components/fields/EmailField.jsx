function EmailField({
  name,
  label,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default EmailField;