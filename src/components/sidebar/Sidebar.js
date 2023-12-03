import React, { useState } from 'react'
import "./sidebar.scss"
import { GrHostMaintenance } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import menu from '../../data/sidebar';
import SidebarItem from "./SidebarItemPri"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

const Sidebar = ({children}) => {
  const userRole = useSelector((state) => state.auth.user.role);

  const filteredMenu = menu.filter((item) => {
    return !item.requiredRole || (userRole && userRole === item.requiredRole);
  });

  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  const navigate = useNavigate()

  const goHome = () => {
    navigate("/");
  }

  return (
    <div className="layout">
        <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
            
          <div className="top_section">
            <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
              <GrHostMaintenance size={25} style={{ cursor: "pointer" }} onClick={goHome}/>
            </div>
            <div className="bars" style={{ marginLeft: isOpen ? "100px" : "0px" }}>
              <HiMenuAlt3 onClick={toggle}/>
            </div>
          </div>
          {filteredMenu.map((item, index) => {
            return <SidebarItem key={index} item={item} isOpen={isOpen} />
          })}
        </div>

        <main style={{ paddingLeft: isOpen ? "230px" : "60px", transition: "all .5s" }}>
            {children}
        </main>
    </div>
  )
}

export default Sidebar