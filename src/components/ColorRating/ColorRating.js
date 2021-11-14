import React, {useState} from 'react'
import ColorRatingItem from "./ColorRatingItem";
import './ColorRating.scss'
import {getDeepCopy} from "../../utils";

const ColorRating = ({ initialData = [] }) => {
    const [colorData, setColorData] = useState(getDeepCopy(initialData))

    const findColorDataById = (id) => {
        return colorData.find(data => data.id === id)
    }

    const starClickHandler = (id) => {
        return (index) => {
            const newColorData = colorData.reduce((newArray, dataElement) => {
                const newDataElement = getDeepCopy(dataElement)
                if (newDataElement.id === id) {
                    newDataElement.rating = index + 1
                }
                newArray.push(newDataElement)
                return newArray
            }, [])

            setColorData(newColorData)
        }
    }

    const removeClickHandler = (id) => {
        return () => {
            const newColorData = getDeepCopy(colorData)
                .filter(data => data.id !== id)
            setColorData(newColorData)
        }
    }

    const getColorRatingItems = () => {
        return colorData.map(({ id, title, color }) => {
            return (
                <ColorRatingItem
                    key={id}
                    colorCode={color}
                    title={title}
                    starClickHandler={starClickHandler(id)}
                    selectedStars={findColorDataById(id).rating}
                    removeClickHandler={removeClickHandler(id)}
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
