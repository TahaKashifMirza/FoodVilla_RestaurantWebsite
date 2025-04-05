import { NavLink } from "react-router-dom";
import "./Error.css";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">4<span className="error-text">0</span>4</h2>
          <h2 className="header">Sorry! Page Not Found</h2>
          <p>
            <b>OOPS! It seems like the page you are trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it. </b>
          </p>
          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report Problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
