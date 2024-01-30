import React from 'react'
import logo from '../../assets/images/logo.png'
import openMenu from '../../assets/images/open-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../../assets/images/cart-icon.png'
import SuccessMsg from '../../components/SuccessMsg'
import ResetLocation from '../../helpers/ResetLocation'

const Header = ({ loginModal,
  productsQuantity,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin, activateLoginModal }) => {
  return (
    <header>
      {loginModal}
      <nav className="main-nav flex-container flex-row txt-center">
        <NavLink
          onClick={() => {
            ResetLocation()
            hideMenu()
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white"
        >
          <img
            width="50"
            height="50"
            className="logo"
            src={logo}
            alt="4:20 logo"
          />
          <h1>
            {/* and Kitchen */}
            {/* <span>и доставка еды</span> */}
          </h1>
        </NavLink>
        <ul className={`navigation-menu flex-row pop-font ${isModalActive ? 'active' : ''}`}>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#cd0275',
                  }
                  : {}
              }
              className="txt-white"
              to="/"
            >
              Домой
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#cd0275',
                  }
                  : {}
              }
              className="txt-white"
              to="/menu"
            >
              Меню
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/blog"
            >
              Blog
            </NavLink>
          </li> */}
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#cd0275',
                  }
                  : {}
              }
              className="txt-white"
              to="/about"
            >
              О Нас
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#cd0275',
                  }
                  : {}
              }
              className="txt-white"
              to="/contact"
            >
              Контакты
            </NavLink>
          </li>
          {validLogin ? <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#cd0275',
                  }
                  : {}
              }
              className="txt-white"
              to="/profile"
            >
              Профиль
            </NavLink>
          </li> : null}
          <li>
            <div className="login-and-cart">
              {/* {validLogin ? (
                <Link
                  to="/"
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation()
                    handleLogout()
                  }}
                >
                  Выход
                </Link>
              ) : (
                <div
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation()
                    activateLoginModal()
                  }}
                >
                  Вход
                </div>
              )} */}
              <NavLink
                className="cart-btn active-button-style txt-white"
                to="/cart"
                onClick={() => {
                  ResetLocation()
                  hideMenu()
                }}
              >
                <img src={Cart} alt="" aria-hidden="true" />
                <p>Ваш заказ</p>
                <p>({productsQuantity})</p>
              </NavLink>
            </div>
          </li>
        </ul>
        <img
          width="50"
          height="50"
          className="burger-bars"
          src={isModalActive ? closeMenu : openMenu}
          alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
      <SuccessMsg />
    </header>
  )
}
// }


export default Header;