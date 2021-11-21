import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import Pagination from './components/Pagination'
import Filtration from './components/Filtration'

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

    // filtration
    const [filtratedCountries, setFiltratedCountries] = useState([])
    const [inputValue, setInputValue] = useState('')

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
        setCurrentPage(1)
        setFiltratedCountries(
            countries.filter((country) => {
                if (
                    country.name.common &&
                    String(country.name.common)
                        .toLowerCase()
                        .includes(inputValue)
                ) {
                    return true
                } else if (
                    country.capital &&
                    String(country.capital).toLowerCase().includes(inputValue)
                ) {
                    return true
                } else if (
                    country.area &&
                    String(country.area).toLowerCase().includes(inputValue)
                ) {
                    return true
                } else if (
                    country.population &&
                    String(country.population)
                        .toLowerCase()
                        .includes(inputValue)
                ) {
                    return true
                } else return false
            }),
        )
    }, [countries, inputValue])

    useEffect(() => {
        const sortCountries = () => {
            switch (sortCategory) {
                case 'Country':
                    setFiltratedCountries(
                        filtratedCountries.sort((a, b) => {
                            if (a.name.common === b.name.common) return 0
                            else if (sortOrder) {
                                return new Intl.Collator().compare(
                                    a.name.common,
                                    b.name.common,
                                )
                            } else {
                                return (
                                    new Intl.Collator().compare(
                                        a.name.common,
                                        b.name.common,
                                    ) * -1
                                )
                            }
                        }),
                    )
                    break
                case 'Capital':
                    setFiltratedCountries(
                        filtratedCountries.sort((a, b) => {
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
                    setFiltratedCountries(
                        filtratedCountries.sort((a, b) => {
                            return sortOrder ? a.area > b.area : a.area < b.area
                        }),
                    )
                    break
                case 'Population':
                    setFiltratedCountries(
                        filtratedCountries.sort((a, b) => {
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
    }, [filtratedCountries, sortCategory, sortOrder])

    useEffect(() => {
        // split countries into pages
        const getCurrentPageItems = () => {
            const lastItem = currentPage * itemsPerPage
            const firstItem = lastItem - itemsPerPage
            setCurrentPageItems(filtratedCountries.slice(firstItem, lastItem))
        }
        getCurrentPageItems()
    }, [filtratedCountries, currentPage, itemsPerPage, sortCategory, sortOrder])

    // pagination
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

    // filtration
    const filtration = (e) => {
        const filterRequest = e.target.value.trim().toLowerCase()
        setInputValue(filterRequest)
    }

    return (
        <div className="wrapper">
            <section className="section">
                <h1 className="section__title">Crazy Panda test task</h1>
                <div className="section__content">
                    <Filtration handleInputChange={filtration} />
                    <Countries
                        countries={currentPageItems}
                        handleCategoryClick={selectCategory}
                        sortCategory={sortCategory}
                        sortOrder={sortOrder}
                    />
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={filtratedCountries.length}
                        currentPageNumber={currentPage}
                        handlePagButtonClick={paginationButtonClick}
                    />
                </div>
            </section>
        </div>
    )
}

export default App
