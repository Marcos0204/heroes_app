import React from 'react'
import { getHeroesByPublisher } from '../../selectores/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        <div className='row rows-cols-1 row-cols-md-4 g-3 d-flex '>
            {
                heroes.map(heroe => <HeroCard key={heroe.id} {...heroe} /> )
            }
        </div>
    )
}
