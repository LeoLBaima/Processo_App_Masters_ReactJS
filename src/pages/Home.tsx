import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import api from '../services/api'

import '../styles/home.css'

export type Hero = {
    id?: number;
    name?: string;
    powerstats?: Powerstats;
    appearance?: Appearance;
    biography?: Biography;
    connections?: Connections;
    images?: Images;
}

type Images = {
    sm: string;
}

export type Biography = {
    aliases?: string;
    alignment?: string;
    alterEgos?: string;
    firstAppearance?: string;
    fullName?: string;
    placeOfBirth?: string;
    publisher?: string;
}

type Powerstats = {
    combat?: number;
    durability?: number;
    intelligence?: number;
    power?: number;
    speed?: number;
    strength?: number;
}
type Connections = {
    groupAffiliation: string;
    relatives: string;
}

type Appearance = {
    eyeColor?: string;
    gender?: string;
    hairColor?: string;
    height?: Height;
    race?: string;
    weight?: Weight;
}
type Height = {
    0: string;
    1: string;
}
type Weight = {
    0: string;
    1: string;
}



export function Home() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [search, setSearch] = useState('')


    function loadData() {
        api.get('/all.json').then(res => {
            setHeroes(res.data)
        })
    }

    useEffect(() => {
        loadData()
    })

    return (
        <div className="background">
            <Header />
            <input
                type="text"
                className="header-search"
                placeholder="Pesquise aqui"
                onChange={event => { setSearch(event.target.value) }}
            />

            <div className="content">
                {heroes.filter(hero => {
                    if (search === "") {
                        return hero
                    }
                    else if (hero.name?.toLowerCase().includes(search.toLowerCase())) {
                        return hero
                    }
                    else {
                        return false
                    }
                }).map(hero => {
                    return <div>
                        <Card
                            key={hero.id}
                            title={hero.name}
                            image={hero.images?.sm}

                            name={hero.name}
                            fullName={hero.biography?.fullName}
                            biography={hero.biography}
                            alterEgos={hero.biography?.alterEgos}
                            firstAppearance={hero.biography?.firstAppearance}
                            aliases={hero.biography?.aliases}
                            alignment={hero.biography?.alignment}
                            connections={hero.connections}
                            appearance={hero.appearance}
                            images={hero.images}
                            placeOfBirth={hero.biography?.placeOfBirth}
                            powerstats={hero.powerstats}
                            publisher={hero.biography?.publisher}
                        />
                    </div>
                })}

            </div>

        </div>
    )
}

