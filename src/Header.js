import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header' >
      <h1>I am header</h1>
      <MenuIcon />
      <img className='header_logo' src="https://www.nicepng.com/png/detail/891-8915842_youtube-logo-free-png-small-youtube-logo-png.png" alt="" />
      <input type="text" />
      <SearchIcon />
    </div>
  )
}

export default Header
