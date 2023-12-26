import React, {Component} from "react"
import './dashboard.css'
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from '../images/logo.png'
import {Profile, Setting, MyID} from './dashboardPages'

class Dashboard extends Component {
    getPage = () => {
        if (this.props.name === 'setting') {
            return <Setting />
        }
        else if (this.props.name === 'myid')
            return <MyID />
        return <Profile />
    }
    render () {
        return (
            <div className="background-dashboard">
                <div className="container dashboard">
                    <div className="dashboard-header">
                        <div className="logo">
                            <img src={Logo} alt='' />
                            <h2>Educhain</h2>
                        </div>
                        <div className="user">
                            <h4>khalid</h4>
                            <img src={Logo} alt='' />
                        </div>
                    </div>
                    <div className="dashboard-nav">
                        <ul>
                            <div className="nav-logo">
                                <li><Link to=''><FontAwesomeIcon icon="fa-solid fa-table-columns" /> Dashboard</Link></li>
                            </div>
                            <div className="nav-links">
                                <li className="profile"><NavLink exact  to='/dashboard/profile'><FontAwesomeIcon icon="fa-solid fa-user" /> Profile</NavLink></li>
                                <li className="verfiy"><NavLink to='/comming'><FontAwesomeIcon icon="fa-solid fa-chart-line" /> Verfiy</NavLink></li>
                                <li className="myid"><NavLink to='/dashboard/myid'><FontAwesomeIcon icon="fa-solid fa-fingerprint" /> My ID</NavLink></li>
                                <li className="setting"><NavLink to='/dashboard/setting'><FontAwesomeIcon icon="fa-solid fa-sliders" /> Setting</NavLink></li>
                            </div>
                            <div className="nav-log">
                                <li><Link to=''><FontAwesomeIcon icon="fa-solid fa-user" /> Log Out</Link></li>
                            </div>
                        </ul>
                    </div>
                    {this.getPage()}
                </div>
            </div>
        )
    }
}

export default Dashboard