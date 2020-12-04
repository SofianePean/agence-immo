import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
    } from "mdbreact";
import Link from 'next/link';


const Header = () => {
    return(
        <MDBNavbar color="default-color-dark" expand="md" dark>
            <MDBNavbarToggler />
            <MDBCollapse id="navbarCollapse" navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <Link href="/" passHref>
                            <div className="nav-link">
                            <MDBIcon icon="home" className="mr-1" />Home
                            </div>
                        </Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link href="/properties" passHref>
                            <div className="nav-link">Liste des biens</div>
                        </Link>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}

export default Header;