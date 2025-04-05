import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5001/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
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
        console.log("API response data:", resData); 

  
        if (resData.token) {
          storeTokenInLS(resData.token);
          setUser({ email: "", password: "" });
          navigate("/");
        } else {
          console.error("Token is missing in the response");
        }
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <section>
      <main>
        <div className="session-login">
          <div className="login-form">
            <h1 className="main-heading">Welcome to Food Villa - LOGIN to Your Account</h1>
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-submit">LOGIN NOW</button>
            </form>
            <div className="login-link">
              <p>Don't have an account? <NavLink to="/signup">Registration Now</NavLink></p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
