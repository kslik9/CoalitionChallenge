import React, {Component} from "react"
import './comming.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Comming extends Component {
    render () {
        return (
            <div className="main">
                <h1>Comming Soon...</h1>
                <Link exact to='/'> <FontAwesomeIcon icon="fa-solid fa-left-long" /> Go Back To Home Page</Link>
            </div>
        )
    }
}

export default Comming