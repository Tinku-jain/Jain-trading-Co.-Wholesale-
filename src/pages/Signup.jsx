import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      setError("All fields required");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(
      (u) => u.email === email
    );

    if (alreadyExists) {
      setError("User already exists");
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "users",
      JSON.stringify([...users, newUser])
    );

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>

        {error && (
          <p className="error">{error}</p>
        )}

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleSignup}>
          Signup
        </button>

        <p>
          Already have account?{" "}
          <span
            className="link"
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}