import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'

import './scss/style.scss'

function App() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(
                'https://restcountries.com/v3.1/all',
            )
            setCountries(response.data)
        }

        getCountries()
    }, [])

    return (
        <div className="wrapper">
            <section className="section">
                <h1 className="section__title">Crazy Panda test task</h1>
                <div className="section__content">
                    <form action="" className="form">
                        <label className="form__label" htmlFor="form__input">
                            Filtration: &nbsp;
                            <input
                                id="form__input"
                                className="form__input"
                                type="text"
                                placeholder="type your request here"
                            />
                        </label>
                    </form>
                    <Countries countries={countries} />
                    <ul className="pagination">
                        <li className="pagination__item">
                            <button className="btn">
                                <span className="btn__number">1</span>
                            </button>
                        </li>
                        <li className="pagination__item">
                            <button className="btn">
                                <span className="btn__number">2</span>
                            </button>
                        </li>
                        <li className="pagination__item">
                            <button className="btn">
                                <span className="btn__number">3</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default App
