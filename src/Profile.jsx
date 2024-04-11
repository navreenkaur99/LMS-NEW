import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Image, NavLink } from "react-bootstrap";
import { Nav } from 'react-bootstrap';


import style from "./CSS/Ui.module.css";


export default function Profile () {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div style={{position:"relative",zIndex:"1"}}>
       <nav className="navbar bg-body-tertiary">
          <div  style={{marginLeft:"30px"}} className="container">
            <a className="navbar-brand" href="#">
             <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvt8nMHfozm94enMF1qy1MxY3CtefDcu2cQ&usqp=CAU"
                alt="Kochiva Logo"
                width="100"
                height="50"
              /> 
            </a>
            <div className={style.top}>
              <div >
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
        width="50"
        height="30"
      alt="User Thumbnail" className="userthumb" />
        <span style={{marginRight:'0px',fontSize:"14px"}}>Navreenkaur99@gmail.com</span>
      </div>
                <button className={style.dropdown} onClick={() => setIsOpen((prev) => !prev)}>
                <a href="#navbar" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
              
                  <Image
                    src="https://cdn.vectorstock.com/i/1000x1000/91/84/modern-menu-icon-for-mobile-apps-and-websites-vector-16849184.webp"
                    alt="Menu Icon"
                    width="50"
                    height="30"
                  />
                </a>
                </button>
                

                {isOpen && (
                     <div className={style.button}>
                  <Table >
                <tbody  style={{marginRight:"20px"}} className="collapse list-unstyled" id="navbar">
                      <tr>
                        <td>
                      <Nav.Link href="/Ui">HOME</Nav.Link>
                     </td>
                     </tr>
                      <tr >
                        <td>
                          <Nav.Link href="/Ui">HOME</Nav.Link>
                        </td>

                        </tr>
                        <tr >
                          <td>
                      <Nav.Link href="/Ui">My submission</Nav.Link>
                      </td>
                        </tr>
                        <tr >
                          <td>
                      <Nav.Link href="/favorites">Favorites</Nav.Link>
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
  )
}
