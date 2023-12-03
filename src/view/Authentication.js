import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const auth = getAuth();

  const handleAuth = async () => {
    try {

      // Check if both email and password are filled out
      if (email.trim() === '' || password.trim() === '') {
        console.error('Please enter both email and password.');
        return;
      }

      if (isLogin) {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Successfully signed in!');
      } else {
        // Sign up
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Successfully signed up!');
      }

      // Redirect to PreferenceForm.js after successful login/signup
      navigate('/PreferenceForm', { replace: true });
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <table align="center">
        <tr>
          <th>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </th>
        </tr>
      </table>
      <p className="small-font">Forgot Password?</p>
      <table align="center">
        <tr>
          <th align="center">
            <button className="auth-button" onClick={handleAuth}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </th>
        </tr>
      </table>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default Authentication;
