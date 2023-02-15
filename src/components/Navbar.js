// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../styles/navbar.scss'
import Sidebar from './Sidebar'

// function Navbar() {
//   return (
//     <>
//         <header className="header">
//             <a href="./index.html" className="logo" title="back to homepage">
//                 <FontAwesomeIcon icon={faUtensils} className="icon utensils"/>
//             </a>
//             <ul className="social-media">
//                 <li className="youtube">
//                     <a href="#">
//                         <FontAwesomeIcon icon={faYoutube} className="icon youtube"/>
//                     </a>
//                 </li>
//                 <li className="facebook">
//                     <a href="#">
//                         <FontAwesomeIcon icon={faFacebook} className="icon facebook"/>
//                     </a>
//                 </li>
//                 <li className="instagram">
//                     <a href="#">
//                         <FontAwesomeIcon icon={faInstagram} className="icon instagram"/>
//                     </a>
//                 </li>
//             </ul>
//             <div className="menu-container">
//                 <div className="menu-trigger-btn" id="menu-trigger-btn"></div>
//                 <Sidebar />
//             </div>
            
//         </header>
//     </>
//   )
// }

// export default Navbar

import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         menuOpen: false
      }
    }

    handleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }))
    }

    // handleMenu = () => {
    //     this.setState({
    //         menuOpen: !this.state.menuOpen
    //     })
    // }

    // handleMenu = () => {
    //     if (this.state.menuOpen) {
    //         this.setState({
    //             menuOpen: false
    //         })
    //     } else {
    //         this.setState({
    //             menuOpen: true
    //         })
    //     }
    // }

//    componentDidMount = () => {
//        console.log(document);
//        document.addEventListener('click', function(e) {
//             console.log(e.target)
//             if (e.target.id !== 'sidebar' && e.target.id !== 'menu-trigger-btn') {
//                 this.setState({
//                     menuOpen: false
//                 })
//             }
//        }.bind(this))
      
//    }

    componentDidMount = () => {
        document.addEventListener('click', (e) => {
            if (e.target.id !== 'sidebar' && e.target.id !== 'menu-trigger-btn') {
                this.setState({
                    menuOpen: false
                })
            }
        })
    }

  render() {
    return (
    <>
        <header className="header">
            <div className="logo-container">
                <a href="./index.html" className="logo" title="back to homepage">
                    <FontAwesomeIcon icon={faUtensils} className="icon utensils"/>
                </a>
            </div>
            <ul className="social-media">
                <li className="youtube">
                    <a href="#">
                        <FontAwesomeIcon icon={faYoutube} className="icon youtube"/>
                    </a>
                </li>
                <li className="facebook">
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook} className="icon facebook"/>
                    </a>
                </li>
                <li className="instagram">
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} className="icon instagram"/>
                    </a>
                </li>
            </ul>
            <div className="menu-container">
                <div className={`menu-trigger-btn ${this.state.menuOpen? 'active': 'inactive'}`} id="menu-trigger-btn" onClick={this.handleMenu}></div>
                {this.state.menuOpen && <Sidebar />}
            </div>
        </header>
    </>
    )
  }
}

export default Navbar
