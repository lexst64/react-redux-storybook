import React from 'react'

const TitleH3 = ({ children, ...rest }) => {
    return (
        <h3
            className={'title-h3'}
            {...rest}
        >{children}</h3>
    )
}

export default TitleH3;
