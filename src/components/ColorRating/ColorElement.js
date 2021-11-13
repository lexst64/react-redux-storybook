import React from 'react'

const ColorElement = ({ style, colorCode, ...rest }) => {
    return (
        <div
            className={'color-element'}
            style={{
                width: '50px',
                height: '50px',
                backgroundColor: colorCode,
                ...style
            }}
            {...rest}
        />
    )
}

export default ColorElement;
