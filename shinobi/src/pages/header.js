import React, {Component} from "react"
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './header.css'

class Header extends Component {
    render () {
        return (
            <div className="header-background">
                <div className="container header">
                    <div className="header-links">
                        <div className="left">
                            <ul>
                                <li><Link to="/comming">Verfy</Link></li>
                                <li><Link to="/comming">Institutions</Link></li>
                                <li><Link to="/comming">Bussiness</Link></li>
                                <li><Link to="/comming">Support</Link></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li><Link to="/singin">Sing In</Link></li>
                                <li><Link to="/singup" className="active">Sing Up</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-section">
                        <h1>Securing Your Credentials, Ensuring Legitimacy</h1>
                        <Link to="/singup">Get Started </Link>
                    </div>
                    <div className="header-nav">
                        <div className="header-nav-item">
                            <FontAwesomeIcon icon="fa-solid fa-upload" className="item" />
                            <h3>Uplaod</h3>
                            <Link to='/singup'>Get Started <FontAwesomeIcon icon="fa-solid fa-right-long" /></Link>
                        </div>
                        <div className="header-nav-item">
                            <FontAwesomeIcon icon="fa-solid fa-check-to-slot" className="item" />
                            <h3>Verify</h3>
                            <Link to='/singin'>Find your next profile <FontAwesomeIcon icon="fa-solid fa-right-long" /> </Link>
                        </div>
                        <div className="header-nav-item">
                            <FontAwesomeIcon icon="fa-solid fa-people-roof" className="item" />
                            <h3>Manage</h3>
                            <Link to='/singin'>Get into your account <FontAwesomeIcon icon="fa-solid fa-right-long" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header