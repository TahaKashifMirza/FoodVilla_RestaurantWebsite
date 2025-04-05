import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5001/api/auth/register";

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const resData = await response.json();
        console.log("API response data:", resData);  // Debugging log

        // Ensure that token exists in the response data
        if (resData.token) {
          storeTokenInLS(resData.token);
          setUser({ username: "", email: "", password: "", phone: "" });
          navigate("/login");
        } else {
          console.error("Token is missing in the response");
        }
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <section>
      <main>
        <div className="session-registration">
          <div className="registration-form">
            <h1 className="main-heading">Welcome to Food Villa - Let's Get Started!</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">USER NAME:</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username..."
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your valid email..."
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="phone">PHONE:</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number..."
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password">PASSWORD:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="btn btn-submit">REGISTER NOW</button>
            </form>
            <div className="signup-link">
              <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
