import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Image, Nav, NavLink } from "react-bootstrap";
import style from "./CSS/Ui.module.css";
import axios from "axios";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/loggedin");
        const { success, email: userEmail } = response.data;
        if (success) {
          setEmail(userEmail);
        } else {
          // Handle case where no user is logged in
          setEmail("");
        }
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      }
    };
  
    fetchLoggedInUser();
  }, []);
  const handleLogout = async (email) => {
    try {
      const response = await axios.put(`http://localhost:4000/logout/${email}`);
      const { success } = response.data;
      if (success) {
        // Update frontend state to reflect logout
        // For example, clear user data or redirect to login page
        console.log('Logged out successfully');
      } else {
        console.error('Error logging out');
        // Handle error, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/Userprofile">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEILr_IZv0FtC2Al6GPy6HMGGvnkkqLoABw&s"
              alt="Kochiva Logo"
              width="100"
              height="60"
            />
          </a>
          <div className={style.top}>
            {email && (
              <div>
                <a  href="/Userprofile" >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                  style={{ marginLeft: "57px" }}
                  width="50"
                  height="30"
                  alt="User Thumbnail"
                  className="userthumb"
                /></a>
                <span style={{ fontSize: "14px", marginRight: "20px" }}>
                  {email}
                </span>
              </div>
            )}
            <button
              className={style.dropdown}
              style={{ backgroundColor: "#294573" }}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <a href="#navbar" data-toggle="collapse" aria-expanded="false">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1665/1665778.png"
                  alt="Menu Icon"
                  width="50"
                  height="30"
                />
              </a>
            </button>

            {isOpen && (
              <div className={style.button}>
                <Table bordered hover>
                  <tbody
                    style={{ marginRight: "20px" }}
                    className="collapse list-unstyled"
                    id="navbar"
                  >
                    <tr>
                      <td>
                        <Nav.Link href="/dashboard">HOME</Nav.Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Nav.Link href="/favorites">Favorites</Nav.Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Nav.Link href="/assignmentscores">Submissions</Nav.Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <Nav.Link  href="/login" onClick={() => handleLogout(email)}>Log out</Nav.Link>

                        {/* <button onClick={handleLogout}>Log out</button> */}
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <Nav.Link  href="/contact" >Contact us</Nav.Link>

                        {/* <button onClick={handleLogout}>Log out</button> */}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}



