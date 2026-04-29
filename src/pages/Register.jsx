import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <h1>Register</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "300px",
    margin: "auto",
  },
};

export default Register;