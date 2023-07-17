import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkMode';

const Navbar = () => {
  const [toggleBtn, settoggleBtn] = useState(true)
  const {dispatch} = useContext(DarkModeContext)
  const handleToggle=()=>{
    dispatch({type: "TOGGLE"})
    settoggleBtn(!toggleBtn)
  }

  return (
    <div className="navbar">
      <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search...' />
            <SearchIcon className='icon-hide'/>
          </div>
          <div className="items">
            <div className="item">
              {toggleBtn ? (<DarkModeIcon className='icon' onClick={handleToggle} />) : (<SettingsBrightnessIcon className='icon' onClick={handleToggle}/>)}
            </div>
            <div className="item">
              <FullscreenExitIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationsIcon className='icon'/>
            </div>
            <div className="item">
              <ListOutlinedIcon className='icon'/>
            </div>
            <Link to="/users/123" style={{textDecoration: "none"}} >
            <div className="item">
              <img src='https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/b74b48f9-6c13-452e-8776-ea1ab9074953/74b9774e-a415-4499-8f1a-26e5e0940ecd/1280x720/match/image.jpg' className='avatar'/>
            </div>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar