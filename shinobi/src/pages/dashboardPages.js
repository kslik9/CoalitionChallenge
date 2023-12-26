import React, {Component} from "react";
import './dashboardPages.css'
import Logo from '../images/logo.png'
import QRcode from '../images/qrcode.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

export class Profile extends Component {
    render () {
        return (
            <div className="dashboard-section">
                <div className="content">
                    <div className="content-logo">
                        <img src={Logo} alt='' />
                        <h4>Khalid</h4>
                    </div>
                    <div className="content-info">
                        <div>
                            <span>First Name</span>
                            <span className="active">khaid</span>
                        </div>
                        <div>
                            <span>Middle Name</span>
                            <span className="active">-</span>
                        </div>
                        <div>
                            <span>Last Name</span>
                            <span className="active">Slik</span>
                        </div>
                        <div>
                            <span>Email Addres</span>
                            <span className="active">khalidslik@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class Setting extends Component {
    render () {
        return (
            <div className="dashboard-section">
                <div className="content">
                    <div className="content-logo">
                        <img src={Logo} alt='' />
                        <h4>Khalid</h4>
                    </div>
                    <div className="content-info">
                        <form>
                            <div>
                                <label>First Name</label>
                                <input type='text' defaultValue='khalid' />
                            </div>
                            <div>
                                <label>Middle Name</label>
                                <input type='text' defaultValue='-' />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type='text' defaultValue='slik' />
                            </div>
                            <div>
                                <label>Email Addres</label>
                                <input type='text' defaultValue='khalidslik@gmail.com' />
                            </div>
                            <button>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export class MyID extends Component {
    render () {
        return (
            <div className="dashboard-section">
                <div className="content">
                    <div className="name">
                        <span>Khalid slik</span>
                        <span>2023 - Present <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></span>
                    </div>
                    <div className="image">
                        <img src={QRcode} alt='' />
                    </div>
                    <div className="hash">
                        <span className="hash-name">Your Address</span>
                        <span>283h976qwe9ry25r817gf31f4fk17f9g</span>
                        <FontAwesomeIcon icon="fa-regular fa-copy" />
                    </div>
                    <div>
                        <span className="secure">your profile, 100% Legitimate and Secure.</span>
                    </div>
                    <div className="share">
                        <Link to='/cooming'>Share Your ID</Link>
                    </div>
                </div>
            </div>
        )
    }
}
