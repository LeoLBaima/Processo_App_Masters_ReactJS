import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import '../styles/starRating.css'

import { Hero } from '../pages/Home'

export type RatingProps = {
    rating?: number;
}


export function StarRating(props: RatingProps & Hero) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)



    useEffect(() => {
        const data = localStorage.getItem(`rating${props.id}`)
        if (data) {
            setRating(JSON.parse(data))
        }
    }, [props.id])
    useEffect(() => {
        localStorage.setItem(`rating${props.id}`, JSON.stringify(rating))
    })

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            className="star-input"
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />

                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={25}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    )
}