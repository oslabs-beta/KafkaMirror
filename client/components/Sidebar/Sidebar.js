import React, { useState } from 'react';
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import "./Sidebar.scss"; 


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  
  const sidebarToggle = () => setSidebar(!sidebar);

  const iconCloseSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar);
    }
  };

  return (
    <> 
      <div className="sidebarContainer">
        <NavLink to="#" className="app-logo">
          <SiIcons.SiApachekafka onClick={sidebarToggle} />
        </NavLink>
      </div>
      <div className="sidebar-icon-container">
        <ul className="sidebar-menu-icons" onClick={iconCloseSidebar}>
          {SidebarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName2}>
                <NavLink to={item.path}>
                  <span className="icon">{item.icon}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
          </div>
        <nav className={sidebar ? 'sidebar-menu' : 'sidebar-menu active'}>
        <ul className='sidebar-menu-items' onClick={sidebarToggle}>
          {SidebarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
        </nav>
    </>
  )
}

export default Sidebar;
