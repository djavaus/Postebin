import './BurgerMenu.css'
import burger_menu_black from './burger_menu_black.png'
import burger_menu_white from './burger_menu_white.png'
import close_black from './close_black.png'
import close_white from './close_white.png'
import { ThemeContext } from '../../App'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';



export const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const theme = useContext(ThemeContext);

  const handleOpen = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className='menu' >
      <div className='menu__wrapper'>
        <div className='menu__icon' onClick={handleOpen}   >
      {openMenu ?  <img src={theme === 'light' ? close_black : close_white} />   :  <img src={theme === 'light' ? burger_menu_black : burger_menu_white} />}
          {/* <img src={theme === 'light' ? burger_menu_black : burger_menu_white} />  */}
        </div>
        <div className='menu__nav' style={{
      display: openMenu ? "block" : "none"
    }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/public">Public Pastes</NavLink>
          <NavLink to="/acc">Account</NavLink>
        </div>
      </div>
    </div>
  );
};