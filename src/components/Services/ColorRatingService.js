import React, {createContext, useState} from 'react';
import colorData from '../../data/colorData.json'
import {getDeepCopy} from "../../utils";

export const colorRatingServiceContext = createContext(null)

export const ColorRatingServiceContextProvider = ({children, defaultState}) => {
    const [colorRatings, setColorRatings] = useState(defaultState || colorData)

    const setColorRatingsHandler = (id, rating) => {
        const colorRatingsCopy = getDeepCopy(colorRatings)
        const ratingObj = colorRatingsCopy.find(rating => rating.id === id)
        ratingObj && (ratingObj.rating = rating)
        setColorRatings(colorRatingsCopy)
    }

    return (
        <colorRatingServiceContext.Provider value={{
            colorRatings,
            setColorRatings: setColorRatingsHandler
        }}>
            {children}
        </colorRatingServiceContext.Provider>
    )
}