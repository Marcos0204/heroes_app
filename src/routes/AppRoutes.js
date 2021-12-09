import React from 'react'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'


export const AppRoutes = () => {
    return (
        <BrowserRouter>
             <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<MarvelScreen/> } />
                <Route path="/marvel" element={<MarvelScreen/> } />
                <Route path="/dc" element={<DcScreen/> } />
                <Route path="/search" element={<SearchScreen/> } />
                <Route path="/login" element={<LoginScreen/> } />
            </Routes>
        </BrowserRouter>
    )
}
