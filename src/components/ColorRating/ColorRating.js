import React, {useContext} from 'react'
import ColorRatingItem from "./ColorRatingItem";
import './ColorRating.scss'
import {colorRatingServiceContext} from "../Services/ColorRatingService";

const ColorRating = () => {
    const {colorRatings, setColorRatings} = useContext(colorRatingServiceContext)

    // const findColorDataById = (id) => {
    //     return colorData.find(data => data.id === id)
    // }

    // const starClickHandler = (id, newRating) => {
    //     return (index) => {
    //         const newColorData = colorData.reduce((newArray, dataElement) => {
    //             const newDataElement = getDeepCopy(dataElement)
    //             if (newDataElement.id === id) {
    //                 newDataElement.rating = index + 1
    //             }
    //             newArray.push(newDataElement)
    //             return newArray
    //         }, [])
    //
    //         setColorData(newColorData)
    //     }
    // }

    // const removeClickHandler = (id) => {
    //     return () => {
    //         const newColorData = getDeepCopy(colorData)
    //             .filter(data => data.id !== id)
    //         setColorData(newColorData)
    //     }
    // }

    const getColorRatingItems = () => {
        return colorRatings.map(({ id, title, color, rating }) => {
            return (
                <ColorRatingItem
                    key={id}
                    colorCode={color}
                    title={title}
                    starClickHandler={rating => setColorRatings(id, rating)}
                    selectedStars={rating}
                    // removeClickHandler={removeClickHandler(id)}
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
