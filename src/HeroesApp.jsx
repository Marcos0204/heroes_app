import React, { useReducer } from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { AuthContext } from './auth/authContext'
import { authReducers } from './auth/authReducers'

const init = () => {
    return JSON.parse(localStorage.getItem('user') ) || { logged: false }
}

const HeroesApp = () => {
    
   const [ user, dispatch] = useReducer(authReducers, {}, init)

    return (
        <AuthContext.Provider
            value={{
                user,
                dispatch
            }}
        >
            <AppRoutes />
        </AuthContext.Provider>
    )
}

export default HeroesApp
