import React from "react";

function signUpPage() {
  return (
    <div className="body">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <input type="number" placeholder="Phone"/>
            <input type="text" placeholder="Address"/>
            <button>Sign Up</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signUpPage;
