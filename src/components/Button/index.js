import React from 'react'

import './button.scss'

const index = ({ className, onClick, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default index
