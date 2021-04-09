import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/myStyles.css'


export default class Navbar extends Component {






    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">ForCarriers</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item hoverable">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item hoverable">
                            <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item hoverable">
                            <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item hoverable">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item hoverable mr-5">
                            <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {this.props.current_user_active ?
                           ( 
                            <li className="nav-item ml-auto hoverable ">
                            
                            <Link className="nav-link " to="/cart">Cart <span className="fa fa-shopping-cart"><br/></span> </Link>
                            </li>
                            ):(
                            <li className="nav-item hoverable">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            )
                            }
                            {this.props.current_user_active && this.props.userDetails['username']==='admin'  ?
                                (
                                    <li className="nav-item hoverable">
                                        <Link className="nav-link" to="/createpost">Create Post</Link>
                                    </li>
                            ):(
                                <p/>
                            )
                            } 
                            {this.props.current_user_active ?
                                (
                                    <div className="collapse navbar-collapse">
                                    <li className="nav-item dropdown ml-auto">
                                        <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hi, {this.props.userDetails['username']}
                                        </p>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link className="dropdown-item" to="/myinfo">My Info</Link></li>
                                            <li><Link className="dropdown-item" to="/" onClick={this.props.logout}>Logout</Link></li>
                                        </ul>
                                    </li>
                                    </div>

                                ) : (
                                <div className="collapse navbar-collapse ml-auto">
                                    <li className="nav-item hoverable ml-auto">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </div>
                                )
                            }
                            
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}
