import React from 'react'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen'
import { DhasboardRoutes } from './DhasboardRoutes'



export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen/> } />
                <Route path="/*" element={<DhasboardRoutes/> } />
            </Routes>
        </BrowserRouter>
    )
}
