import { Hero, Biography } from '../pages/Home'
import { useState } from 'react'
import { StarRating } from './StarRating'
import { Modal } from './Modal';

import '../styles/card.css'

type CardProps = {
    title?: string;
    image?: string;
}


export function Card(props: CardProps & Hero & Biography) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <div className="card" onClick={() => setIsModalVisible(true)}>
                <a href="#start" className="link-card">
                    <img src={props.image} alt="hero"></img>
                    <p>{props.title}</p>
                </a>

            </div>
            <div>
                {isModalVisible ?
                    <div key={props.id}>
                        <Modal
                            onClose={() => setIsModalVisible(false)}
                            name={props.name}
                            fullName={props.biography?.fullName}
                            biography={props.biography}
                            alterEgos={props.biography?.alterEgos}
                            firstAppearance={props.biography?.firstAppearance}
                            aliases={props.biography?.aliases}
                            alignment={props.biography?.alignment}
                            connections={props.connections}
                            appearance={props.appearance}
                            images={props.images}
                            placeOfBirth={props.biography?.placeOfBirth}
                            powerstats={props.powerstats}
                            publisher={props.biography?.publisher}
                            id={props.id}
                        >
                            <StarRating id={props.id} />
                        </Modal>
                    </div>
                    : null}
            </div>
        </div>
    )
}
