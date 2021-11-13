import React from 'react'
import { ImCross } from 'react-icons/im'

const RemoveButton = ({ color, size, ...rest}) => {
    return (
        <ImCross
            style={{ cursor: 'pointer' }}
            color={color}
            size={size}
            {...rest}
        />
    )
}

export default RemoveButton
