import React from 'react'
import StarRating from "../StarRating/StarRating";
import ColorElement from "./ColorElement";
import TitleH3 from "../TitleH3/TitleH3";
import RemoveButton from "../RemoveButton";

const ColorRatingItem = ({
    title,
    colorCode,
    starClickHandler,
    selectedStars,
    removeClickHandler,
}) => {
    return (
        <div className={'color-rating__item'}>
            <ColorElement colorCode={colorCode} />
            <div className={'color-rating__info'}>
                <StarRating
                    selectedStars={selectedStars}
                    clickHandler={starClickHandler}
                />
                <TitleH3>{title}</TitleH3>
            </div>
            <RemoveButton onClick={removeClickHandler} />
        </div>
    )
}

export default ColorRatingItem;
