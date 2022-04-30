import React from "react";
import "../css/signInPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function signInPage() {
  return (
    <div className="body">
      <script src="index.js"></script>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <p href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </p>
              <p href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </p>
              <p href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </p>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p>Forgot your password?</p>
            <button>Sign In</button>
          </form>
        </div>

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to="../signUpPage">
                <button class="ghost" id="signUp">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signInPage;
