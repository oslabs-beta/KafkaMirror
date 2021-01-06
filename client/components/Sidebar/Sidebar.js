import React, { useState } from 'react';
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import './Sidebar.scss';
import logo from '../../assets/logo-icon.png';

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
          <img src={logo} alt='KafkaMirror-logo' onClick={sidebarToggle} />
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
            );
          })}
        </ul>
      </div>
      <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu '}>
        <ul className="sidebar-menu-items" onClick={sidebarToggle}>
          {/* @description:  maps through the object in the sidebaritems file and displays the appropriate menu items and icons*/}
          {SidebarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
