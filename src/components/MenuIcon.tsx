import React from 'react'
import { NavLink } from 'react-router-dom'


export interface IMenuIconType{
  link: string
  icon: string
  quantity: string
  hideOnMobile: boolean
}

const MenuIcon: React.FC<IMenuIconType> = ({link, icon, quantity, hideOnMobile}) => {
  return (
    // <NavLink className="menu-icon" to={link} end>
   
   <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""}`}  to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon

// const MenuIcon = ({link, icon, quantity, hideOnMobile, hideOnTablet}) => {
{/* <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""} ${hideOnTablet ? "hideOnTablet" : ""}`}  to={link} end> */}