import Star from './Star'

const StarRating = ({
    totalStars = 5,
    style,
    selectedStars = 1,
    clickHandler,
    ...rest
}) => {

    const getStars = () => {
        return Array(totalStars).fill(null)
            .map((_, index) => (
                <Star
                    key={index}
                    onClick={() => clickHandler(index)}
                    selected={index < selectedStars}
                />
            ))
    }

    return (
        <div
            className={'star-rating'}
            style={{ padding: '5px', ...style }}
            {...rest}
        >
            {getStars()}
            {selectedStars} of {totalStars}
        </div>
    )
}

export default StarRating
