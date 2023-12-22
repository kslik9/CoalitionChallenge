import React, {Component} from "react"
import './singIn.css'

class SingIn extends Component {
    render () {
        return (
            <div className="singin">
                <div className="background-side"></div>
                <div className="form-side">
                    <form action="?" >
                        <div className="form-input">
                            <label className="global-label">Email</label>
                            <input type='text' className="form-build" placeholder="Email"/>
                            <label className="global-label">Password</label>
                            <input type='text' className="form-build" placeholder="Password"/>
                        </div>
                        <div className="after-input">
                            <div className="left">
                            <label class="custom-checkbox">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                                Save Email and Password
                            </label>
                            </div>
                            <div className="right">
                                <a href='/'>Don’t have an account?</a>
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

export default SingIn