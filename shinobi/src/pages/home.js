import React, {Component} from "react"
import Header from './header'
import Support from './support'
import Footer from './footer'
import './home.css'

class Home extends Component {
    render () {
        return (
            <div className="Home ">
                <Header />
                <Support />
                <Footer />
            </div>
        )
    }
}

export default Home