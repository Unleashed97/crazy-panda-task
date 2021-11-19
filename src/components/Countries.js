import React from 'react'

const Countries = ({ countries }) => {
    return (
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
                        <th className="table__cell table__cell--head">Area</th>
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
                                key={country.name.common + index}
                            >
                                <td className="table__cell table__cell--body">
                                    {country.name.common}
                                </td>
                                <td className="table__cell table__cell--body">
                                    {country.capital
                                        ? country.capital[0]
                                        : 'unknown'}
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
    )
}

export default Countries
