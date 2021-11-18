import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './scss/style.scss'

function App() {
    const [countries, setCountries] = useState([])

    const itemsPerPage = 50

    const getCountries = async () => {
        try {
            const response = await axios.get(
                'https://restcountries.com/v3.1/all',
            )
            let countriesArray = []
            response.data.forEach((obj) => {
                countriesArray.push({
                    name: obj?.name.common,
                    capital: obj.capital ? obj.capital[0] : 'unknown',
                    area: obj?.area,
                    population: obj?.population,
                })
            })

            setCountries([...countriesArray])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
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

                    <div className="table__wrapper">
                        <table className="table">
                            <thead className="table__header">
                                <tr className="table__row">
                                    <th className="table__cell table__cell--head">
                                        Country
                                    </th>
                                    <th className="table__cell table__cell--head">
                                        Capital
                                    </th>
                                    <th className="table__cell table__cell--head">
                                        Area
                                    </th>
                                    <th className="table__cell table__cell--head">
                                        Population
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="table__body">
                                {countries &&
                                    countries.map((country, index) => (
                                        <tr
                                            className="table__row"
                                            key={country.name + index}
                                        >
                                            <td className="table__cell table__cell--body">
                                                {country.name}
                                            </td>
                                            <td className="table__cell table__cell--body">
                                                {country.capital}
                                            </td>
                                            <td className="table__cell table__cell--body">
                                                {country.area}
                                            </td>
                                            <td className="table__cell table__cell--body">
                                                {country.population}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
