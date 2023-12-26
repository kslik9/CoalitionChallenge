import React, {Component} from "react"
import './singIn.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from '../images/logo.png'

class SingIn extends Component {
    render () {
        return (
            <div className="form-logo">
                <div className="singin">
                    <div className="background-side">
                        <h2>Hello Friend!</h2>
                        <span>Dont have an account yet? <br /> Join us for free</span>
                        <Link to='/singup' className="form">Sing Up</Link>
                        <Link to='/' className="link"> <FontAwesomeIcon icon="fa-solid fa-left-long" /> Back To Home Page</Link>
                    </div>
                    <div className="form-side">
                        <div className="logo">
                            <img src={Logo} alt='tets' />
                            <h1>Educhain</h1>
                        </div>
                        <form action="?" >
                            <div className="form-input">
                                <label className="global-label">Email</label>
                                <input type='text' className="form-build" placeholder="Email"/>
                                <label className="global-label">Password</label>
                                <input type='text' className="form-build" placeholder="Password"/>
                            </div>
                            <div className="after-input">
                                <div className="left">
                                <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    Save Email and Password
                                </label>
                                </div>
                                <div className="right">
                                    <Link to='/singup'>Don’t have an account?</Link>
                                </div>
                            </div>
                            <div className="form-button">
                                <input type="button" value='singIn'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingIn