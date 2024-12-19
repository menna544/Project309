import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authen.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Authentication = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggleView = () => {
    setIsSignUp(!isSignUp);
    resetErrors();
  };

  const resetErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleSignUp = (e) => {
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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignUp) {

      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        setEmailError("An account with this email already exists");
        return;
      }

      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      navigate("/product", { state: { userEmail: email } });
    } else {
      const user = users.find((user) => user.email === email && user.password === password);
      if (!user) {
        setEmailError("Invalid email or password");
        return;
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/product", { state: { userEmail: email } });
    }
  };

  return (
    <div className="App">
      <ArrowBackIcon style={{ fontSize: "30px" }} className="arrow" onClick={() => navigate("/")} />
      <div className="page7">
        <div className="cont6">
          <h1>{isSignUp ? "Create an Account" : "Sign In"}</h1>
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
