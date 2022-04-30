import React from "react";

import { Nav,NavLink,Bars } from "./NavbarElements";
const Navbar = () => {

    return (
        <div>
            <Nav>
                
                <Bars/>
                <NavLink to="/">
                    <img src={require('../../assets/logo.png')}
                    alt="logo"/>
                </NavLink>
               
                
            </Nav>
        </div>
    );

};

export default Navbar;