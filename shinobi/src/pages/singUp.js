import React, {Component} from "react"
import './singUp.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from '../images/logo.png'

class singUp extends Component {
    render () {
        return (
            <div className="form-logo">
                <div className="singup">
                    <div className="background-side">
                        <h2>Welcome Back!</h2>
                        <span>Aready have and account? <br /> Into in your account</span>
                        <Link to='/singin' className="form">Sing In</Link>
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
                                <label className="global-label">Confirm Password</label>
                                <input type='text' className="form-build" placeholder="Confirm Password"/>
                                <label className="global-label">ID (From your acount)</label>
                                <input type='text' className="form-build" placeholder="ID"/>
                            </div>
                            <div className="after-input">
                                <div className="right">
                                    <Link to='/singin'>Do you have an acount?</Link>
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

export default singUp