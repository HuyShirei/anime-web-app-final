// Import React and the Auth.css stylesheet
import React, { useState} from 'react';
import './Auth.css';

// Create a functional component for authentication
const Auth = ({ onLogin, onSignup }) => {
  // Set up state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = () => {
    onLogin(email, password);
  };

  // Function to handle signup
  const handleSignup = () => {
    onSignup(email, password);
  };

  // Render the input fields and buttons
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

// Export the Auth component
export default Auth;