const formConfig = [
  {
    type: "text",
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    required: true,
  },
  {
    type: "select",
    name: "country",
    label: "Country",
    placeholder: "Select your country",
    options: ["Syria", "France", "Germany"],
    required: true,
  },
];

export default formConfig;