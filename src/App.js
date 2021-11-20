import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import Pagination from './components/Pagination'

import './scss/style.scss'

function App() {
    const [countries, setCountries] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(50)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageItems, setCurrentPageItems] = useState([])

    // sorting
    const [sortCategory, setSortCategory] = useState('Country')
    const [sortOrder, setSortOrder] = useState(true)
    // true is asc, false is desc

    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(
                'https://restcountries.com/v3.1/all',
            )
            setCountries(response.data)
        }
        getCountries()
    }, [])

    useEffect(() => {
        const sortCountries = () => {
            switch (sortCategory) {
                case 'Country':
                    setCountries(
                        countries.sort((a, b) => {
                            if (a.name.common === b.name.common) return 0
                            else if (sortOrder) {
                                return a.name.common > b.name.common ? 1 : -1
                            } else {
                                return a.name.common > b.name.common ? -1 : 1
                            }
                        }),
                    )
                    break
                case 'Capital':
                    setCountries(
                        countries.sort((a, b) => {
                            const first = a && a.capital
                            const second = b && b.capital
                            if (first === second) return 0
                            else if (first === undefined) return 1
                            else if (second === undefined) return -1
                            else if (sortOrder) {
                                return first > second ? 1 : -1
                            } else {
                                return first > second ? -1 : 1
                            }
                        }),
                    )
                    break
                case 'Area':
                    setCountries(
                        countries.sort((a, b) => {
                            return sortOrder ? a.area > b.area : a.area < b.area
                        }),
                    )
                    break
                case 'Population':
                    setCountries(
                        countries.sort((a, b) => {
                            return sortOrder
                                ? a.population > b.population
                                : a.population < b.population
                        }),
                    )
                    break
                default:
                    break
            }
        }
        sortCountries()
    }, [countries, sortCategory, sortOrder])

    useEffect(() => {
        // split countries into pages
        const getCurrentPageItems = () => {
            const lastItem = currentPage * itemsPerPage
            const firstItem = lastItem - itemsPerPage
            setCurrentPageItems(countries.slice(firstItem, lastItem))
        }
        getCurrentPageItems()
    }, [countries, currentPage, sortCategory, sortOrder])

    const paginationButtonClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // category
    const selectCategory = (category) => {
        if (category === sortCategory) {
            setSortOrder(!sortOrder)
        } else {
            setSortCategory(category)
            setSortOrder(true)
        }
    }

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
                    <Countries
                        countries={currentPageItems}
                        handleCategoryClick={selectCategory}
                        sortCategory={sortCategory}
                        sortOrder={sortOrder}
                    />
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={countries.length}
                        currentPageNumber={currentPage}
                        handlePagButtonClick={paginationButtonClick}
                    />
                </div>
            </section>
        </div>
    )
}

export default App
