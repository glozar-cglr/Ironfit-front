//Storing our JSX

import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './NavbarElements';


const Navbar = ( { toggle, user,logout } ) => {    
    return (
       <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>IronFitness</NavLogo> 
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Sign Up</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/"
                            onClick={logout}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Log Out</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                      <NavBtnLink to="/signin">Sign In</NavBtnLink>  
                    </NavBtn>
                </NavbarContainer>
           </Nav> 
       </>
    );
};

export default Navbar;
