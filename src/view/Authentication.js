// Authentication.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ContentContainer from '../components/ContentContainer';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();

  const handleAuth = async () => {
    try {
      // Reset previous error messages
      setEmailError('');
      setPasswordError('');
      setSignupError('');

      // Check if both email and password are filled out
      if (email.trim() === '' || password.trim() === '') {
        if (email.trim() === '') {
          setEmailError('Email is required');
        }
        if (password.trim() === '') {
          setPasswordError('Password is required');
        }
        return;
      }

      if (isLogin) {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Successfully signed in!');
        
        // Redirect to SuccessPage.js after successful login
        navigate('/SuccessPage', { replace: true });
      } else {
        // Sign up
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('Successfully signed up!');
          
          // Redirect to PreferenceForm.js after successful signup
          navigate('/PreferenceForm', { replace: true });
        } catch (signupError) {
          // Handle signup errors, e.g., if the email is already in use
          setSignupError(signupError.message);
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <main>
      <ContentContainer>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="error-message">{emailError}</p>

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="error-message">{passwordError}</p>

        {isLogin ? null : (
          <p className="error-message">{signupError}</p>
        )}

        <p className="small-font">Forgot Password?</p>

        <button className="auth-button" onClick={handleAuth}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
      </ContentContainer>
    </main>
  );
};

export default Authentication;
