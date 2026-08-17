import { useState } from "react";
import formConfig from "../../config/formConfig";

import TextField from "../fields/TextField";
import EmailField from "../fields/EmailField";
import SelectField from "../fields/SelectField";

function FormBuilder() {

  const [formData, setFormData] = useState({});


  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    setSubmittedData(formData);

    console.log("Submitted Data:", formData);


    setFormData({});
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      label: field.label,
      value: formData[field.name] || "",
      placeholder: field.placeholder,
      onChange: handleChange,
    };

    switch (field.type) {
      case "text":
        return <TextField {...commonProps} />;

      case "email":
        return <EmailField {...commonProps} />;

      case "select":
        return (
          <SelectField
            {...commonProps}
            options={field.options}
          />
        );

      default:
        return null;
    }
  };

  return (
    <main className="builder-page">
      <div className="background-effects">
        <span className="orb orb-one"></span>
        <span className="orb orb-two"></span>
        <span className="orb orb-three"></span>

        <div className="grid-background"></div>
      </div>

      <section className="builder-container">
        <header className="builder-header">
          <div className="brand-mark">
            <span className="brand-icon">✦</span>

            <div>
              <span className="brand-name">FORM</span>
              <span className="brand-name accent">BUILDER</span>
            </div>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            Dynamic System
          </div>
        </header>

        <section className="hero">
          <span className="hero-label">REACT • DYNAMIC FORM SYSTEM</span>

          <h1>
            Build forms <span>beautifully.</span>
          </h1>
        </section>

        <div className="workspace">
          {}
          <section className="panel builder-panel">
            <div className="panel-header">
              <div>
                <span className="panel-number">01</span>
                <h2>Form Builder</h2>
              </div>

              <span className="panel-badge">{formConfig.length} Fields</span>
            </div>

            <div className="field-list">
              {formConfig.map((field, index) => (
                <div
                  key={field.name}
                  className="builder-field"
                  style={{
                    animationDelay: `${index * 0.12}s`,
                  }}
                >
                  <div className="field-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="field-info">
                    <strong>{field.label}</strong>

                    <span>
                      {}
                      {submittedData && submittedData[field.name]
                        ? submittedData[field.name]
                        : field.type.toUpperCase()}
                    </span>
                  </div>

                  <div className="field-arrow">→</div>
                </div>
              ))}
            </div>
          </section>

          {}
          <section className="panel preview-panel">
            <div className="panel-header">
              <div>
                <span className="panel-number">02</span>
                <h2>Live Preview</h2>
              </div>

              <span className="live-badge">● LIVE</span>
            </div>

            <form className="preview-form" onSubmit={handleSubmit}>
              <div className="preview-intro">
                <span>✦</span>

                <div>
                  <h3>Tell us about you</h3>
                  <p>Complete the form below</p>
                </div>
              </div>

              <div className="dynamic-fields">
                {formConfig.map((field, index) => (
                  <div
                    key={field.name}
                    className="dynamic-field"
                    style={{
                      animationDelay: `${0.35 + index * 0.12}s`,
                    }}
                  >
                    {renderField(field)}
                  </div>
                ))}
              </div>

              <button type="submit" className="submit-button">
                <span>Submit Form</span>
                <span className="button-icon">→</span>
              </button>
            </form>
          </section>
        </div>

        <footer className="builder-footer">
          <span>REACT • DYNAMIC FORMS</span>
          <span>Crafted with ✦</span>
        </footer>
      </section>
    </main>
  );
}

export default FormBuilder;
