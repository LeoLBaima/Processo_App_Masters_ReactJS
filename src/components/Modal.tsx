import React from 'react'
import '../styles/modal.css'

import { Hero, Biography } from '../pages/Home'
import { StarRating } from './StarRating'

type Functions = {
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Modal(props: Hero & Biography & Functions) {
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
                        <StarRating />
                        <h4>Já vi nas HQs <input type="radio" /></h4>
                    </div>


                </div>


            </div>
        </div>
    )
}