import arrow_left_white from './pagination_left_white.png'
import arrow_right_white from './pagination_right_white.png'
import arrow_left_black from './pagination_left_black.png'
import arrow_right_black from './pagination_right_black.png'
import "./Pagination.css"
import { useState } from 'react'

export const Pagination = ({ theme, pastes, pastesPerPage, currentPage, setCurrentPage }) => {


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pastes.length / pastesPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleMinus = () => {
        setCurrentPage(prev => prev - 1)
    }

    const handlePlus = () => {
        setCurrentPage(prev => prev + 1)
    }

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.innerText))
    }

    return (
        <div className='pagination'>
            <button className='pagination__arrow' disabled={currentPage === 1}>
                <img src={theme === "light" ? arrow_left_black : arrow_left_white} onClick={handleMinus} />
            </button>
            <div className='pagination__numbers'>
                {pageNumbers.map((number) => (
                    <p onClick={handleClick}>{number}</p>
                ))}
            </div>
            <button className='pagination__arrow' disabled={currentPage === Math.ceil(pastes / pastesPerPage)}>
                <img src={theme === "light" ? arrow_right_black : arrow_right_white} onClick={handlePlus} />
            </button>
        </div>
    )
}
