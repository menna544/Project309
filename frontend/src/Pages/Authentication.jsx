import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./authen.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from 'axios';

const Authentication = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // Add state for name
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState(""); // Add state for name error
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("currentUser");
    if (isAuthenticated) {
      navigate("/product");
    }
  }, [navigate]);

  const handleToggleView = () => {
    setIsSignUp(!isSignUp);
    resetErrors();
  };

  const resetErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setNameError(""); // Reset name error
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    resetErrors();

    if (!email || !emailPattern.test(email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    if (!password || password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
    if (isSignUp && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    if (isSignUp && !name) { // Ensure name is provided during sign-up
      setNameError("Name is required");
      return;
    }

    try {
      if (isSignUp) {
        const response = await axios.post('http://localhost:4000/api/user/register', { email, password, name }); // Send name in the request
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        navigate("/product", { state: { userEmail: email } });
      } else {
        const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        navigate("/product", { state: { userEmail: email } });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setEmailError("Invalid email or password");
      } else {
        setEmailError("Something went wrong, please try again");
      }
    }
  };

  return (
    <div className="App">
      <ArrowBackIcon style={{ fontSize: "30px" }} className="arrow" onClick={() => navigate("/")} />
      <div className="page7">
        <div className="cont6">
          <h1>{isSignUp ? "Create an Account" : "Sign In"}</h1>

          {/* Name Input (Visible only during sign-up) */}
          {isSignUp && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          {nameError && <p className="error-message">{nameError}</p>}

          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <EmailIcon className="input-icon" />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}

          <div className="input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordVisible ? (
              <VisibilityIcon className="input-icon" onClick={() => setPasswordVisible(!passwordVisible)} />
            ) : (
              <VisibilityOffIcon className="input-icon" onClick={() => setPasswordVisible(!passwordVisible)} />
            )}
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}

          {isSignUp && (
            <div className="input-container">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordVisible ? (
                <VisibilityIcon
                  className="input-icon"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                />
              ) : (
                <VisibilityOffIcon
                  className="input-icon"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                />
              )}
            </div>
          )}
          {isSignUp && confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}

          <button onClick={handleSignUp} className="button2">
            {isSignUp ? "Get Started" : "Sign In"}
          </button>

          <h4 className="signup">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <span className="sign1" onClick={handleToggleView}>
              {isSignUp ? "Sign in" : "Sign up"}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
