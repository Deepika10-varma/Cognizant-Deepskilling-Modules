import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    let tempErrors = { ...errors };

    switch (name) {
      case "fullName":
        tempErrors.fullName =
          value.length < 5
            ? "Full Name must be 5 characters long!"
            : "";
        break;

      case "email":
        tempErrors.email =
          value.includes("@") && value.includes(".")
            ? ""
            : "Email is not valid!";
        break;

      case "password":
        tempErrors.password =
          value.length < 8
            ? "Password must be 8 characters long!"
            : "";
        break;

      default:
        break;
    }

    setErrors(tempErrors);
  };

  const validateForm = () => {
    return (
      errors.fullName === "" &&
      errors.email === "" &&
      errors.password === "" &&
      form.fullName !== "" &&
      form.email !== "" &&
      form.password !== ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Valid Form");
    } else {
      if (errors.fullName !== "") {
        alert(errors.fullName);
      }

      if (errors.email !== "") {
        alert(errors.email);
      }

      if (errors.password !== "") {
        alert(errors.password);
      }
    }
  };

  return (
    <div className="register">
      <h1>Register Here!!!</h1>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Register;