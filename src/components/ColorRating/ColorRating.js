import React, {useContext} from 'react'
import ColorRatingItem from "./ColorRatingItem";
import {colorRatingServiceContext} from "../Services/ColorRatingService";
import './ColorRating.scss'

const ColorRating = () => {
    const {colorRatings, setColorRatings, removeColorRatings} = useContext(colorRatingServiceContext)

    const getColorRatingItems = () => {
        return colorRatings.map(({ id, title, color, rating }) => {
            return (
                <ColorRatingItem
                    key={id}
                    colorCode={color}
                    title={title}
                    starClickHandler={rating => setColorRatings(id, rating)}
                    selectedStars={rating}
                    removeClickHandler={() => removeColorRatings(id)}
                />
            )
        })
    }

    return (
        <div className={'color-rating'}>
            {getColorRatingItems()}
        </div>
    )
}

export default ColorRating
