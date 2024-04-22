import React from 'react'
import './singlepage.css'
import imm from '../9_1712560561.jpg'
import { IoCloseOutline } from "react-icons/io5";

const SinglePage = () => {
    return (
        <div className='Box'>
            <div className="container">
                <div className="imagesec"><img src={imm} alt="" /></div>

                <div className="textsec">
                    <div className="asd">
                        <h1>Бизнес-ланч "Деловой"</h1>
                        <p><IoCloseOutline /></p>
                    </div>
                    <div className="qwert">
                        <p>- Мерджимек Ezo Gelin 1/2 порции.</p>
                        <p>- Искандар с говядиной</p>
                        <p>- Айс-ти 400 мл.</p>
                    </div>
                    <div className="buysec">
                        <hr />
                        <div className="price">
                            <h1>90 000</h1>

                            <button>купить</button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
