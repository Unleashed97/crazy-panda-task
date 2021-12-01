import React from 'react'

import './filtration.scss'

const Filtration = ({ handleInputChange }) => {
    return (
        <form action="" className="form">
            <label className="form__label" htmlFor="form__input">
                Filtration: &nbsp;
                <input
                    id="form__input"
                    className="form__input"
                    type="text"
                    placeholder="type your request here"
                    onChange={handleInputChange}
                />
            </label>
        </form>
    )
}

export default Filtration
