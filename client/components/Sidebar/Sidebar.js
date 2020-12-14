import React, { useState } from 'react';
//icons to use from react-icons dependency
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import "./Sidebar.scss"; 
import { IconContext } from 'react-icons';


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const sidebarToggle = () => setSidebar(!sidebar);

  return (
    <> 
      <div className="sidebar">
        <NavLink to="#" className="app-logo">
          <SiIcons.SiApachekafka onClick={sidebarToggle} />
        </NavLink>
      </div> 
      {/* Might have to switch around truthy and falsy */}
      <nav className={sidebar ? 'sidebar-menu' : 'sidebar-menu active'}>
        <ul className='sidebar-menu-items'>
          {SidebarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  <span className="side-icon">{item.icon}</span>
                  <span className="side-text">{item.title}</span>
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
