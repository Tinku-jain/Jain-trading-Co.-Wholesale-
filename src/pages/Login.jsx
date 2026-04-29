import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!existingUser) {
      setError("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(existingUser)
    );

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        {error && (
          <p className="error">{error}</p>
        )}

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

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have account?{" "}
          <span
            className="link"
            onClick={() =>
              navigate("/signup")
            }
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}