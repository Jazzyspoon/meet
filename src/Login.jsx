import React from "react";
import logo from "./images/logo.png";
import { Row, Image } from "react-bootstrap";
function Login() {
  return (
    <div className="App">
      <br></br>

      <Row className="justify-content-md-center">
        <Image src={logo} alt="logo image" className="logo" />
      </Row>
      <br></br>
      <h1>Welcome to the Meet app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=112428940187-frqeov9nftd8hpsubgtsbui26kv7mdds.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fjazzyspoon.github.io%2Fmeet%2F"
            rel="nofollow noopener"
            className="btn-text"
          >
            <b>Sign in with google</b>
          </a>
        </div>
      </div>
      <a
        href="https://glenzy.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
    </div>
  );
}
export default Login;
