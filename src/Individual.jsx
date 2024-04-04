import React from "react";
import Button from "react-bootstrap/Button";

//import style from "./CSS module/Topics.module.css";
import { Col,  Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IndividuaL({ value, index, link}) {
  return (
    <>
      <div>
        <ul>
          <li className="col-4">
            <Link
              to={link}
              className="ms-2 px-4 py-1"
              variant="success"
            >
               <span >{value}</span>
              {/* <Button>Click Here</Button> */}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}