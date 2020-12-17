import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

export const SidebarItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <RiIcons.RiDashboardLine />,
    cName: 'sidebar-text',
    cName2: 'sidebar-icon'
  },
  {
    title: 'Mirror',
    path: '/mirror',
    icon: <GiIcons.GiMirrorMirror />,
    cName: 'sidebar-text',
    cName2: 'sidebar-icon'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <FiIcons.FiSettings />,
    cName: 'sidebar-text',
    cName2: 'sidebar-icon'
  }
]

// export const SidebarItems2 = [
//   {
//     title: 'Home',
//     path: '/',
//     icon: <SiIcons.SiHomeassistant />,
//     cName: 'sidebar-text',
//     cName2: 'sidebar-icon'
    
//   },
//   {
//     title: 'Dashboard',
//     path: '/',
//     icon: <RiIcons.RiDashboardLine />,
//     cName: 'sidebar-text',
//     cName2: 'sidebar-icon'
//   },
//   {
//     title: 'Mirror',
//     path: '/mirror',
//     icon: <GiIcons.GiMirrorMirror />,
//     cName: 'sidebar-text',
//     cName2: 'sidebar-icon'
//   },
//   {
//     title: 'Logs',
//     path: '/logs',
//     icon: <GiIcons.GiHalfLog />,
//     cName: 'sidebar-text',
//     cName2: 'sidebar-icon'
//   },
//   {
//     title: 'Streams',
//     path: '/streams',
//     icon: <GiIcons.GiSplashyStream />,
//     cName: 'sidebar-text',
//     cName2: 'sidebar-icon'
//   },
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <RiIcons.RiTeamLine />,
//     cName: 'sidebar-text'
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <RiIcons.RiQuestionnaireLine />,
//     cName: 'sidebar-text',
//     cName2: 'sidebar-icon'
//   }
// ]