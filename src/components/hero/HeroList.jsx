import React from 'react'
import { getHeroesByPublisher } from '../../selectores/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
