import React from 'react'
import { getHeroesByPublisher } from '../../selectores/getHeroesByPublisher'

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        <>
            <h2>Hero List - {publisher} </h2>
            <ul>
                {
                    heroes.map(heroe => <li key={heroe.id}>{heroe.superhero}</li> )
                }
            </ul>
        </>
    )
}
