import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Исправлен импорт

const Navbar = () => {
  const token = localStorage.getItem("token");
  let fullname = ""; // Инициализируем переменную fullname

  if (token) { // Проверяем наличие токена перед его декодированием
    const decode = jwtDecode(token, { type: true });
    fullname = decode.fullname; // Присваиваем значение fullname после декодирования
  }

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <h1>logo</h1>{" "}
            </Link>
          </div>
          <div className="links">
            <Link to="/delivery">
              <p>Yetkazib berish</p>
            </Link>
            <Link to="/contact">
              <p>Aloqa</p>
            </Link>
            <Link to="/about">
              <p>Biz haqimizda</p>
            </Link>
            {token === null ? (
              <Link to="/login">
                <button>Sign in</button>
              </Link>
            ) : (
              <p>{fullname}</p> // Отображаем fullname, если токен существует
            )}
            <button>Korzinka</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
