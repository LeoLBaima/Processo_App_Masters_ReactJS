import React, { ReactNode, useState, useEffect } from 'react'
import '../styles/modal.css'

import { Hero, Biography } from '../pages/Home'

type Functions = {
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}
type Children = {
    children: ReactNode
}

export function Modal(props: Hero & Biography & Functions & Children) {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const data = localStorage.getItem(`check${props.id}`)
        if (data) {
            setChecked(JSON.parse(data))
        }
    }, [props.id])
    useEffect(() => {
        localStorage.setItem(`check${props.id}`, JSON.stringify(checked))
    })

    function handleCheck() {
        if (checked) {
            setChecked(false)
        }
        else {
            setChecked(true)
        }
    }

    return (
        <div className="modal">
            <div className="container">
                <button className="close-btn" onClick={props.onClose} />
                <div className="modal-content">
                    {props.name} também conhecido como {props.biography?.fullName}
                    <br />Biografia: Ele(a) é {props.biography?.alignment}, Alter Egos: {props.biography?.alterEgos}<br />
                    Primeira aparição: {props.biography?.firstAppearance}<br />
                    Local de nascimento: {props.biography?.placeOfBirth}<br />
                    Publisher: {props.biography?.publisher}.<br />
                    Aparência:<br /> Cor dos Olhos: {props.appearance?.eyeColor}.<br />
                    Gênero: {props.appearance?.gender}<br /> Cor do Cabelo: {props.appearance?.hairColor}.<br />
                    Altura: {props.appearance?.height?.[1]}.<br />
                    Peso: {props.appearance?.weight?.[1]}.<br />
                    Conexões: Grupo: {props.connections?.groupAffiliation}.<br />
                    Parentes: {props.connections?.relatives}.<br />
                    Status de Poder: Combate: {props.powerstats?.combat}, Durabilidade: {props.powerstats?.durability}, Inteligencia: {props.powerstats?.intelligence}, Poder: {props.powerstats?.power},
                    Velocidade: {props.powerstats?.speed}, Força: {props.powerstats?.strength}.<br />
                    <div className="ratings">
                        {props.children}
                        <h4>Já vi nas HQs <input type="radio" checked={checked} onChange={handleCheck}
                            onClick={handleCheck}
                        />
                        </h4>
                    </div>


                </div>


            </div>
        </div>
    )
}