import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/footer.scss'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <section className="footer-contact f-column">
                    <h3>CONTACTEAZA-NE</h3>
                    <ul className="footer-column-list">
                        <li>
                            <FontAwesomeIcon icon={faPhone} className='contact icon'/>
                            <a href="tel:+40723687615">Marian - 0723 687 615</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className='contact icon'/>
                            <a href="tel:+40723687615">Darius - 0723 687 615</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className='contact icon'/>
                            <a href="mailto:contact@ospatar-eveniment.ro">contact@ospatar-eveniment.ro</a> 
                        </li>
                    </ul>
                </section>
                <section className="footer-additional-info f-column">
                    <h3>UTILE</h3>
                    <ul>
                        <li>
                            <a href="#">Ajutor</a>
                        </li>
                        <li>
                            <a href="#">Termeni si Conditii</a>
                        </li>
                        <li>
                            <a href="#">Confidentialitate</a>
                        </li>
                    </ul>
                </section>
                <section className="footer-additional-info2 f-column">
                    <h3>UTILE</h3>
                    <ul>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                        <li>
                            <a href="#">ANPC</a>
                        </li>
                        <li>
                            <a href="#">Deveniti partenerul nostru</a>
                        </li>
                    </ul>
                </section>
            </div> 
                <section className="footer-end">
                    <ul className="social-media">
                        <li className="youtube">
                            <a href="#">
                                <FontAwesomeIcon icon={faYoutube}/>
                            </a></li>
                        <li className="facebook">
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        </li>
                        <li className="instagram">
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>
                    </ul>
                    <p>Copyright © 2022 All rights reserved</p>
                </section>
        </footer>
    </>
  )
}

export default Footer