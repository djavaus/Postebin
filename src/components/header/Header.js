import './Header.css'
import logo from './logo_white.png'
import logo_black from './logo_black.png'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'

export const Header = ({ setToken, theme }) => {
    const handleClick = () => {
        setToken("")
        Cookies.remove("token");
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <div className='header__img'>
                            <img src={theme === "light" ? logo_black : logo} />
                        </div>
                        <p className='header__name'>Pastebin Light</p>
                    </div>
                    <nav className='header__btns'>
                        <NavLink to='/' className='header__btn'>Home</NavLink>
                        <NavLink to='/public' className='header__btn'>Public pastes</NavLink>
                        <NavLink to='/acc' className='header__btn'>Your pastes</NavLink>
                        <NavLink to='/'><button type='submit' className='header__btn header__btn-logout' onClick={handleClick}>Log out</button></NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
