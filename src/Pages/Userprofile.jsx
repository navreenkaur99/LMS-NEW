import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../CSS/Ui.module.css'; // Import CSS module for styling

export default function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '',Number:"" });

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/loggedin");
        const { success, name, email ,Number} = response.data; // Updated to include 'name'
        if (success) {
          setUser({ name, email  ,Number}); // Set both 'name' and 'email' in the state
        } else {
          // Handle case where no user is logged in
          setUser({ name: '', email: '',Number:"" });
        }
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      }
    };

    fetchLoggedInUser();
  }, []);

  return (
    <div className={styles["user-profile-container"]}  style={{backgroundColor:" rgb(203, 223, 245)"}}>
      {user.email && (
        <div className={styles["user-details"]}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
            className={styles["user-thumbnail"]}
            alt="User Thumbnail"
          />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Number: {user.Number}</p>
          
        </div>
      )}
    </div>
  );
}




