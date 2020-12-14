import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

export const SidebarItems = [
  {
    title: 'Home',
    path: '/',
    icon: <SiIcons.SiHomeassistant />,
    cName: 'sidebar-text'
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <RiIcons.RiDashboardLine />,
    cName: 'sidebar-text'
  },
  {
    title: 'Mirror',
    path: '/mirror',
    icon: <GiIcons.GiMirrorMirror />,
    cName: 'sidebar-text'
  },
  {
    title: 'Logs',
    path: '/logs',
    icon: <GiIcons.GiHalfLog />,
    cName: 'sidebar-text'
  },
  {
    title: 'Streams',
    path: '/streams',
    icon: <GiIcons.GiSplashyStream />,
    cName: 'sidebar-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <RiIcons.RiTeamLine />,
    cName: 'sidebar-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <RiIcons.RiQuestionnaireLine />,
    cName: 'sidebar-text'
  }
]