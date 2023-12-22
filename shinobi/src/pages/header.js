import React, {Component} from "react"
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './header.css'

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="header-links">
                    <div className="left">
                        <ul>
                            <li><a href="?">Verfy</a></li>
                            <li><a href="?">Institutions</a></li>
                            <li><a href="?">Bussiness</a></li>
                            <li><a href="?">Support</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><Link exact to="/singin">Sing In</Link></li>
                            <li><Link exact to="/singup" className="active">Sing Up</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="header-section">
                    <h1>Securing Your Credentials, Ensuring Legitimacy</h1>
                    <Link exact to="/singup">Get Started</Link>
                </div>
                <div className="header-nav">
                    <div className="header-nav-item">
                        <FontAwesomeIcon icon="fa-solid fa-upload" className="item" />
                        <h3>Uplaod</h3>
                        <Link to='?'>Get Started</Link>
                    </div>
                    <div className="header-nav-item">
                        <FontAwesomeIcon icon="fa-solid fa-check-to-slot" className="item" />
                        <h3>Verify</h3>
                        <Link to='?'>Find your next profile</Link>
                    </div>
                    <div className="header-nav-item">
                        <FontAwesomeIcon icon="fa-solid fa-people-roof" className="item" />
                        <h3>Manage</h3>
                        <Link to='?'>Get into your account</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header