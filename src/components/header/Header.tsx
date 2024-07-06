import { FC } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import "./header.scss";

const Header: FC = () => {
  return (
    <>
      <div className="header__top container">
        <div className="header__top__left">
          <FaPhone />
          <p className="header__top__text">
            8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00
          </p>
        </div>
        <div className="header__top__right">
          <MdOutlineLogout />
          <p>Войти / Регистрация</p>
        </div>
      </div>
      <header className="header">
        <nav className="header__nav container">
          <h3 className="header__nav__logo">PORTEN</h3>
          <ul className="header__nav__list">
            <li className="header__nav__item">Понравилось</li>
            <li className="header__nav__item">личный кабинет</li>
            <li className="header__nav__item">настройки</li>
            <li className="header__nav__item">
              <FaShoppingCart />
            </li>
            <li className="header__nav__item">
              <IoSearch />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
