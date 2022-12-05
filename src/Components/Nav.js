import React from 'react'
import '../App.css'
// import { menu } from './Menu'
export default function
    ({ currCategory, filterItem }) {



    return (
        <div>
            <div className='container btns1'>
                {currCategory.map((elem, i) => {
                    return <button key={i} type="" className='btn btn-warning btns' onClick={() => { filterItem(elem) }}>{elem}</button>
                })}
            </div>
        </div>
    )
}
