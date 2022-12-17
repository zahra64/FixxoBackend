import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

export interface IMenuIconType{
  link: string
  icon: string
  quantity: string
  hideOnMobile: boolean
}

const MainMenuSection: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {  
    setShowMenu(!showMenu)
  }

  return (
    <nav className="mainmenu container">
        <NavLink className="logo" to="/" end>Fixxo.</NavLink>

      
        <div className={`menu-links ${ showMenu ? "d-grid": ""}`}>
            <NavLink className="menu-link" to="/" end>Home</NavLink>
            <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
            <NavLink className="menu-link" to="/products" >Products</NavLink>
            <NavLink className="menu-link" to="/contacts" end>Contacs</NavLink>
        </div>
        <div className="menu-icons">
          <NavLink to="/search" end className="menu-icon">
            <i className="fa-regular fa-magnifying-glass"></i>
          </NavLink>
          <NavLink to="/compare" end className="menu-icon">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme"></span>
            <i className="fa-regular fa-code-compare"></i>
          </NavLink>
          <NavLink to="/wishlist" end className="menu-icon">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme"></span>
            <i className="fa-regular fa-heart"></i>
          </NavLink>
          <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="show">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme"></span>
            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{totalQuantity}</span> */}
            <i className="fa-regular fa-bag-shopping"></i>
          </button>
          <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon">
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
</nav>
  )
}

export default MainMenuSection