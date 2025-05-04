import React from 'react';
import '../styles/Auth.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in with Google:", user);
      navigate("/profile");
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google login failed.");
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in with Facebook:", user);
      navigate("/");
    } catch (error) {
      console.error("Facebook login error:", error);
      toast.error("Facebook login failed.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome to Furry Friends 🐾</h2>

      <button className="google-btn" onClick={handleGoogleLogin}>
        Continue with Google
      </button>

      <button className="facebook-btn" onClick={handleFacebookLogin}>
        Continue with Facebook
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;