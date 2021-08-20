import { Hero, Biography } from '../pages/Home'
import { useState } from 'react'
import '../styles/card.css'
import { Modal } from './Modal';

type CardProps = {
    title?: string;
    image?: string;
}


export function Card(props: CardProps & Hero & Biography) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div>
            <div className="card" onClick={() => setIsModalVisible(true)}>
                <img src={props.image} alt="hero"></img>
                <p>{props.title}</p>
            </div>
            <div>
                {isModalVisible ?
                    <div>
                        <Modal
                            onClose={() => setIsModalVisible(false)}
                            key={props.id}
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
                            id={props.id}
                            placeOfBirth={props.biography?.placeOfBirth}
                            powerstats={props.powerstats}
                            publisher={props.biography?.publisher}
                        />
                    </div>
                    : null}
            </div>
        </div>
    )
}
