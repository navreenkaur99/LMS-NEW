import React from 'react';
import { NavLink } from 'react-bootstrap';

export default function Navbar() {
    return (
        <nav style={{ backgroundColor: "rgb(50, 50, 50)", padding: "10px", color: "white" }}>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/about">About</NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/Contsubmission">Contact</NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/admin">Users</NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/AdminCard">Courses</NavLink>
                </li>
               
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/assignmenttans">Assignment 1</NavLink>
                </li>
                <li style={{ marginRight: "10px" }}>
                    <NavLink href="/assignmentans">Assignment 2</NavLink>
                </li>
            </ul>
        </nav>
    );
}


// import React from 'react';
// import { NavLink } from 'react-bootstrap';

// export default function Navbar() {
//     return (
//         <nav style={{ backgroundColor: "rgb(50, 50, 50)", padding: "10px", color: "white" }}>
         
//             <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
//                 <li style={{ display: "inline", marginRight: "10px" }}>
//                     <NavLink href="/">Home</NavLink>
//                 </li>
//                 <li style={{ display: "inline", marginRight: "10px" }}>
//                     <NavLink href="/dashboard">Dashboard</NavLink>
//                 </li>
//                 <li style={{ display: "inline", marginRight: "10px" }}>
//                     <NavLink href="/about">About</NavLink>
//                 </li>
//                 <li style={{ display: "inline", marginRight: "10px" }}>
//                     <NavLink href="/contact">Contact</NavLink>
//                 </li>
//                 <li style={{ display: "inline", marginRight: "10px" }}>
//                     <NavLink href="/admin">users</NavLink>
//                 </li>
//                 <li style={{ display: "inline", marginRight: "10px" }}>
//                     <NavLink href="/AdminCard">courses</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// }
