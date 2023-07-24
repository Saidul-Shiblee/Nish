import React from "react";
import { Navbar } from "reactstrap";
import { PiToggleLeftFill,PiToggleRightFill } from "react-icons/pi";

const NavBar = (props) => {


  return (
    <Navbar className="" expand="md">
      {props.isOpen && (
        <PiToggleLeftFill
          color="black"
          size={30}
          style={{ cursor: "pointer" }}
          onClick={props.toggle}
        />
      )}
      {!props.isOpen && (
        <PiToggleRightFill
          color="black"
          size={30}
          style={{ cursor: "pointer" }}
          onClick={props.toggle}
        />
      )}
    </Navbar>
  );
};

export default NavBar;
