import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [email, setEmail] = useState('');

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/logout', { email });
      console.log(response.data); // Assuming successful logout
    } catch (error) {
      console.error(error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
