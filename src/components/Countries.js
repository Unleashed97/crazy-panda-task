import React from 'react'

const Countries = ({
    countries,
    handleCategoryClick,
    sortCategory,
    sortOrder,
}) => {
    const categories = ['Country', 'Capital', 'Area', 'Population']

    return (
        <div className="table__wrapper">
            <table className="table">
                <thead className="table__header">
                    <tr className="table__row">
                        {categories.map((category, index) => (
                            <th
                                className="table__cell table__cell--head"
                                key={category + index}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category} &nbsp;
                                {category === sortCategory ? (
                                    sortOrder ? (
                                        <svg width="8" height="10">
                                            <path d="M0 6 L4 0 L8 6 L0 6" />
                                        </svg>
                                    ) : (
                                        <svg width="8" height="10">
                                            <path d="M0 0 L8 0 L4 6 L0 0" />
                                        </svg>
                                    )
                                ) : (
                                    <svg width="8" height="14">
                                        <path d="M0 6 L4 0 L8 6 L0 6 M0 8 L8 8 L4 14 L0 8" />
                                    </svg>
                                )}
                            </th>
                        ))}
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
                                <td
                                    className={
                                        country?.capital
                                            ? 'table__cell table__cell--body'
                                            : 'table__cell table__cell--body table__cell--unknown'
                                    }
                                >
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
