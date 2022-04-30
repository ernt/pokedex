import React from "react";

import { Nav,NavLink,Bars,NavMenu } from "../Navbar/NavbarElements";
const Footer = () => {

    return (
        <div>
        <Nav>
           
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contact Us
                </NavLink>
                
            </NavMenu>
          
            
        </Nav>
    </div>
    );

};

export default Footer;