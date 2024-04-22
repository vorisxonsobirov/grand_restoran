import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="logotip">
                    <h1>LOGO</h1>
                </div>
                <div className="link">
                    <ul>
                        <li>
                            <a href="/">BIZ HAQIMIZDA</a>
                        </li>
                        <li>
                            <a href="/">MENU</a>
                        </li>
                        <li>
                            <a href="/">RESTORANLAR</a>
                        </li>
                        <li>
                            <a href="/">YETKAZIB BERISH</a>
                        </li>
                        <li>
                            <a href="/">GALEREYA</a>
                        </li>
                        <li>
                            <a href="/">ALOQA</a>
                        </li>
                        <li>
                            <a href="/">OMMAVIY TAKLIF</a>
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <ul>
                        <li>
                            <a href="/">BIZNES-LUNCH</a>
                        </li>
                        <li>
                            <a href="/">KABOB TO'PLAMLARI</a>
                        </li>
                        <li>
                            <a href="/">KOMBO</a>
                        </li>
                        <li>
                            <a href="/">BALIQLI TAOM</a>
                        </li>
                        <li>
                            <a href="/">DONARLAR</a>
                        </li>
                        <li>
                            <a href="/">KABOBLAR</a>
                        </li>
                        <li>
                            <a href="/">KOTLETLAR</a>
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <ul>
                        <li>
                            <a href="/">BURGERLAR</a>
                        </li>
                        <li>
                            <a href="/">GAZAKLAR VA GARNIRLAR</a>
                        </li>
                        <li>
                            <a href="/">PITSA</a>
                        </li>
                        <li>
                            <a href="/">PIDE</a>
                        </li>
                        <li>
                            <a href="/">SENDVICH VA LAVASHLAR</a>
                        </li>
                        <li>
                            <a href="/">HOT DOGLAR</a>
                        </li>
                        <li>
                            <a href="/">SHO'RVALAR</a>
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <ul>
                        <li>
                            <a href="/">SALATLAR</a>
                        </li>
                        <li>
                            <a href="/">SHIRINLIKLAR</a>
                        </li>
                        <li>
                            <a href="/">SOUSLAR</a>
                        </li>
                        <li>
                            <a href="/">LIMONADLAR</a>
                        </li>
                        <li><a href="/">MILKSHEYK</a></li>
                        <li><a href="/">SMUZI</a></li>
                        <li><a href="/">FRESH</a></li>
                        <li><a href="/">CHOY</a></li>
                        <li><a href="/">KOFE</a></li>
                        <li><a href="/">ICHIMLIKLAR</a></li>
                        <li><a href="/">SUV</a></li>
                    </ul>
                </div>
                <div className="address">
                    <a href="+998 71 202-02-02">+998 71 202-02-02</a>
                    <p>Har kuni soat 09:00 dan 00:00 gacha</p>
                    <div className="tarmoq">
                        <p>Ijtimoiy tarmoqlarda baham ko'ring</p>
                        <div className="icons">
                            <span>
                                <FaTelegram />
                            </span>
                            <span>
                                <FaFacebook />
                            </span>
                            <span>
                                <FaInstagramSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;