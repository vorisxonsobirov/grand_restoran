import React from 'react'
import imm from '../9_1712560561.jpg'
import './foods.css'

const Foods = () => {
    return (
        <div className='Box'>
            <div className="container">
                <div className="imgbox"><img src={imm} alt="" /></div>
                <div className="textsection">
                    <a href=""><h1>Бизнес-ланч "Деловой"</h1></a>

                    <p>- Мерджимек Ezo Gelin 1/2 порции. - Искандар с говядиной - Айс-ти 400 мл.</p>
                </div>
                <div className="buysection">
                    <h1 className='price'>90 000</h1>

                    <button className='buy'>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default Foods
