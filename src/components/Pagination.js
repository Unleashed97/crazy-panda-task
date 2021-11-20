import React from 'react'

const Pagination = ({
    itemsPerPage,
    totalItems,
    currentPageNumber,
    handlePagButtonClick,
}) => {
    const numberOfPages = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        numberOfPages.push(i)
    }

    return (
        <ul className="pagination">
            {numberOfPages.map((item) => (
                <li className="pagination__item" key={item}>
                    <button
                        className={
                            currentPageNumber === item ? 'btn active' : 'btn'
                        }
                        onClick={() => handlePagButtonClick(item)}
                    >
                        <span className="btn__number">{item}</span>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Pagination
