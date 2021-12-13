import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PrivateRoutes = ({children}) => {

    const { user: {logged} } = useContext(AuthContext)
   
    
    return logged
            ?  children
            :  <Navigate to='/login' />
}
