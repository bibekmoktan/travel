import React from 'react'
import Sidebar from '../pages/Sidebar/Sidebar'
import Routers from '../../Router/Routers'
import './layout.css'

const Layout = () => {
    return (
        <div className="layout-container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="content-container">
                <Routers />
            </div>
        </div>
    )
}

export default Layout
