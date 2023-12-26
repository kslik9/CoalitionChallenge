import React, {Component} from "react"
import './pageNotFound.css'
import {Link} from 'react-router-dom'

class PageNotFound extends Component {
    render () {
        return (
            <div className="main">
                <h1>Page Not Found 404</h1>
                <Link exact to='/'>Go Back To Home Page</Link>
            </div>
        )
    }
}

export default PageNotFound