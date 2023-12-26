import React, {Component} from "react"
import './footer.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Footer extends Component {
    render () {
        return (
            <div className=" footer">
                <div className="container section-side">
                    <div className="left-side">
                        <h2>Take your first step into safe, secure profile verifictions</h2>
                        <Link to='singup'>Get Started</Link>
                    </div>
                </div>
                <div className="container email-side">
                    <h2>Receive transmissions</h2>
                    <span>Unsubscrib at any time. <Link to="/comming">Privacy Policy <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /> </Link></span>
                    <form>
                        <div className="form-section">
                            <input type='text' placeholder="Email Address" />
                            <button><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
                        </div>
                    </form>
                </div>
                <div className="links-side">
                    <div className="container">
                        <div className="email">
                            <form>
                                <input type='text' placeholder="Email Address" />
                                <button><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
                            </form>
                        </div>
                        <div className="links">
                            <ul>
                                <li><Link to='/comming'>Company</Link></li>
                                <li><Link to='/comming'>about</Link></li>
                                <li><Link to='/comming'>Careers</Link></li>
                                <li><Link to='/comming'>Prees</Link></li>
                                <li><Link to='/comming'>News</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer