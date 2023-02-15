import React from 'react'
import '../styles/sidebar.scss'

function Sidebar() {
  return (
    <>
        <aside className="sidebar" id="sidebar">
            <ul>
                <li>
                    <a href="#">DESPRE NOI</a> 
                </li>
                <li>
                    <a href="#">SERVICII</a> 
                </li>
                <li>
                    <a href="#">CONTACT</a> 
                </li>
            </ul>
        </aside>
    </>
  )
}

export default Sidebar