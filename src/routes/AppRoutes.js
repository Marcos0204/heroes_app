import React from 'react'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen'
import { DhasboardRoutes } from './DhasboardRoutes'
import  { PrivateRoutes } from '../routes/PrivateRoutes'
import  { PublicRoutes } from '../routes/PublicRoutes'


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginScreen/>
                    </PublicRoutes>
                } />
                <Route path="/*" element={
                    <PrivateRoutes>
                        <DhasboardRoutes/>
                    </PrivateRoutes>
                } />
                {/* <Route path="/*" element={<DhasboardRoutes/> } /> */}
            </Routes>
        </BrowserRouter>
    )
}
