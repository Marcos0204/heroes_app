import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../auth/authContext'
import { Types } from '../../types/Types'

export const LoginScreen = () => {
    
    //context 
    const {user: { dispatch }} = useContext(AuthContext )

    //const navigate = useNavigate()

    const handleLogin = () => {
        // navigate('/marvel', {
        //     replace: true
        // });
        dispatch({
            type: Types.login,
            payload: {
                name :'Marcos Bastidas'
            }
        })
    }

    return (
        <div className='container mt-5' >
            <h1>login screen</h1>
            <hr/>
            <button 
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
