import React from 'react'

import Button from '../Button/'

import './pagination.scss'

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
                    <Button
                        className={
                            currentPageNumber === item
                                ? 'btn btn--pagination active'
                                : 'btn btn--pagination'
                        }
                        onClick={() => handlePagButtonClick(item)}
                    >
                        <span className="btn__number">{item}</span>
                    </Button>
                </li>
            ))}
        </ul>
    )
}
export default Pagination
