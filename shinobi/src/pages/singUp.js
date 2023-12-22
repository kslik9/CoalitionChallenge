import React, {Component} from "react"
import './singUp.css'

class singUp extends Component {
    render () {
        return (
            <div className="singup">
                <div className="background-side"></div>
                <div className="form-side">
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
                                <a href='/'>Do you have an acount?</a>
                            </div>
                        </div>
                        <div className="form-button">
                            <input type="button" value='singIn'/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default singUp