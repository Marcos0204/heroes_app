
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    
    //TODO por hacer
    const handleLogout = () =>{
        console.log('Logout')
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        style={({isActive }) =>  {
                            if(isActive) return {color:'#1096ea', borderBottom:'2px solid #1096ea'}
                        }}
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'activo' : '')} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        style={({isActive }) =>  {
                            if(isActive) return {color:'#1096ea', borderBottom:'2px solid #1096ea'}
                        }} 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className = 'nav-item nav-link text-info' >Marcos</span>
                    <button 
                        className="nav-item nav-link btn" 
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}