import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumbers: [],
  });
  const [cPass, setcPass] = useState("");

  const [errorfName, setErrorfName] = useState("");
  const [ErrlName, setErrlName] = useState("");
  const [ErrEmail, setErrEmail] = useState("");
  const [ErrPass, setErrPass] = useState("");
  const [ErrcPass, setErrcPass] = useState("");
  const [ErrPassMatch, setErrPassMatch] = useState("");

  const validateForm = (props) => {
    let isValidated = true;

    if (formData.firstName === "") {
      setErrorfName("First name is required");
      isValidated = false;
    } else {
      setErrorfName("");
    }

    if (formData.lastName === "") {
      setErrlName("Last name is required");
      isValidated = false;
    } else {
      setErrlName("");
    }

    if (formData.email === "") {
      setErrEmail("Email is required");
      isValidated = false;
    } else {
      setErrEmail("");
    }

    if (formData.password === "") {
      setErrPass("Password is required");
      isValidated = false;
    } else {
      setErrPass("");
    }

    if (cPass === "") {
      setErrcPass("Confirm password is required");
      isValidated = false;
    } else {
      setErrcPass("");
    }

    if (formData.password !== cPass) {
      setErrPassMatch("Passwords do not match!");
      isValidated = false;
    } else {
      setErrPassMatch("");
    }

    return isValidated;
  };

  const onCreateAccount = (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((json) => {
          alert(json.message);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumbers: [],
            password: "",
          });

          setcPass("");
        })
        .catch((err) => {
          console.log(`Error ${err}`);
        });
    }
  };

  return (
    <section id="register-section">
      <div className="container">
        <br></br>
        <br></br>
        <h1>Sign up</h1>

        <form action="" onSubmit={onCreateAccount}>
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(evt) => {
                setFormData({ ...formData, firstName: evt.target.value });
              }}
            />
            <span className="error">{errorfName}</span>
          </div>

          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(evt) => {
                setFormData({ ...formData, lastName: evt.target.value });
              }}
            />
            <span className="error">{ErrlName}</span>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={(evt) => {
                setFormData({ ...formData, email: evt.target.value });
              }}
            />
            <span className="error">{ErrEmail}</span>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              valeu={formData.password}
              onChange={(evt) => {
                setFormData({ ...formData, password: evt.target.value });
              }}
            />
            <span className="error">{ErrPass}</span>
          </div>

          <div className="form-control">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              value={cPass}
              onChange={(event) => {
                setcPass(event.target.value);
              }}
            />
            <span className="error">{ErrcPass}</span>
            <span className="error">{ErrPassMatch}</span>
          </div>

          <div className="form-control">
            <label htmlFor="cpassword">Phone Number</label>
            <input
              type="text"
              id="Pnumber"
              value={formData.phoneNumbers}
              onChange={(evt) => {
                setFormData({ ...formData, phoneNumbers: evt.target.value });
              }}
            />
          </div>

          <div className="form-control">
            <button className="btn" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
