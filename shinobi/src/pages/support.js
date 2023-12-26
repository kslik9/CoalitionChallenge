import React, {Component} from "react"
import './support.css'
import {Link} from 'react-router-dom'

class Support extends Component {
    render () {
        return (
            <div className="background-support">
                <div className="container support">
                    <div className="right-side">
                        <h2>42/7 access to full service customer support</h2>
                        <Link to='singup'>Get Started</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Support