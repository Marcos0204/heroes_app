import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PrivateRoutes = ({children}) => {

    const { user: {logged} } = useContext(AuthContext)
    const { search, pathname } = useLocation()
    localStorage.setItem('lastPathname', pathname + search)
    
    return logged
            ?  children
            :  <Navigate to='/login' />
}
