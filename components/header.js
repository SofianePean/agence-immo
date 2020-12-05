import React, {useState} from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
    } from "mdbreact";
import Link from 'next/link';
import useAuth from 'auth/context';
import {useRouter} from 'next/router';


const Header = () => {

    const {logout, user, isAuthenticated} = useAuth()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const styles = {
        links : {
            cursor: 'pointer',
        }
    }
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <MDBNavbar color="default-color-dark" expand="md" dark>
            <MDBNavbarToggler onClick={handleToggle}/>
            <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
                <MDBNavbarNav left>

                    <MDBNavItem style={styles.links} active={router.pathname === "/"}>
                        <Link href="/" passHref className="linkGlobal">
                            <div className="nav-link">
                            <MDBIcon icon="home" className="mr-1" />Home
                            </div>
                        </Link>
                    </MDBNavItem>

                    <MDBNavItem style={styles.links}>
                        <Link href="/properties" passHref>
                            <div className="nav-link">Liste des biens</div>
                        </Link>
                    </MDBNavItem>
                    {
                        isAuthenticated && user.role === "admin" && (
                            <MDBNavItem style={styles.links}>
                                <Link href="/property/list" passHref>
                                    <div className="nav-link">Dashboard</div>
                                </Link>
                            </MDBNavItem>
                        )
                    }

                </MDBNavbarNav>
                <MDBNavbarNav right>

                    <MDBNavItem style={styles.links} active={router.pathname === "/contact"}>
                        <Link href="/contact" passHref>
                            <div className="nav-link">
                                <MDBIcon icon="address-book" className="mr-1" />Contact
                            </div>
                        </Link>
                    </MDBNavItem>
                    {
                        !isAuthenticated && (
                            <MDBNavItem style={styles.links}>
                                <Link href="/login" passHref>
                                    <div className="nav-link">
                                        <MDBIcon icon="user-alt" className="mr-1" />Connexion
                                    </div>
                                </Link>
                            </MDBNavItem>
                        )
                    }
                    {
                        isAuthenticated && (
                            <>
                            <MDBNavItem active={router.pathname === "/login"}>
                                <div className="nav-link">
                                    <MDBIcon icon="user-alt" className="mr-1"/>
                                    Bonjour {user.username}
                                </div>
                            </MDBNavItem>
                            <MDBNavItem>
                                <div className="nav-link" onClick={logout}>
                                    <MDBIcon icon="power-off" className="mr-1"/>
                                    Déconnexion
                                </div>
                            </MDBNavItem>
                            </>
                        )
                    }
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}

export default Header;