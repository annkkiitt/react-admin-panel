import './sidebar.scss'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkMode';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}} >
                <span className='logo'>devankit</span>
            </Link>
        </div>

        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}} >
                <li>
                    <DashboardIcon className='icons'/>
                    <span>
                    Dashboard
                    </span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}} >
                <li>
                    <PersonOutlineOutlinedIcon className='icons'/>
                    <span>
                    Users
                    </span>
                </li>
                </Link>

                <Link to="/product" style={{textDecoration: "none"}} >
                <li>
                    <ProductionQuantityLimitsOutlinedIcon className='icons'/>
                    <span>
                    Products
                    </span>
                </li>
                </Link>
                <li>
                    <ViewStreamOutlinedIcon className='icons'/>
                    <span>
                    Order
                    </span>
                </li>
                <li>
                    <AirportShuttleIcon className='icons'/>
                    <span>
                    Delivery
                    </span>
                </li>

                <p className="title">USEFULL</p>

                <li>
                    <SsidChartIcon className='icons'/>
                    <span>
                    Stats
                    </span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icons'/>
                    <span>
                    Notifications
                    </span>
                </li>

                <p className="title">SERVICES</p>

                <li>
                    <DashboardIcon className='icons'/>
                    <span>
                    System Health
                    </span>
                </li>
                <li>
                    <DashboardIcon className='icons'/>
                    <span>
                    Settings
                    </span>
                </li>

                <p className="title">USER</p>

                <li>
                    <DashboardIcon className='icons'/>
                    <span>
                    Profile
                    </span>
                </li>
                <li>
                    <LogoutIcon className='icons'/>
                    <span>
                    Logout
                    </span>
                </li>
                
            </ul>
        </div>

        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type: 'DARK'})}></div>
            <div className="colorOption" onClick={()=> dispatch({type: 'LIGHT'})}></div>
        </div>
    </div>
  )
}

export default Sidebar