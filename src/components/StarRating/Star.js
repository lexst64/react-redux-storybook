import React from 'react'
import { FaStar } from 'react-icons/fa'

// stateless component / pure component
const Star = ({ selected = false, ...rest }) => {
    return (
        <FaStar
            {...rest}
            color={selected ? 'yellow' : 'grey'}
        />
    )
}

export default Star
