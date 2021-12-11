import React from 'react'
import { Routes, Route } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar }  from '../components/ui/Navbar'
import { HeroScreen } from '../components/hero/HeroScreen'

export const DhasboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='container mt-10'>
                <Routes>
                    <Route path="marvel" element={<MarvelScreen/> } />
                    <Route path="dc" element={<DcScreen/> } />
                    <Route path="search" element={<SearchScreen/> } />
                    <Route path="hero/:heroeID" element={<HeroScreen/> } />
                    <Route path="/" element={<MarvelScreen/> } />
                </Routes>
            </div>
        </>
    )
}
