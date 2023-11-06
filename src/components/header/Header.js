import './Header.css'
import logo from './logo_white.png'
import { NavLink } from 'react-router-dom'


export const Header = ({ setToken }) => {
    const handleClick = () => setToken(false)



    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <div className='header__img'>
                            <img src={logo} />
                        </div>
                        <p className='header__name'>Postebin</p>
                    </div>
                    <nav className='header__btns'>
                        <NavLink to='/home' className='header__btn'>Home</NavLink>
                        <NavLink to='/acc' className='header__btn'>Your account</NavLink>
                        <button type='submit' className='header__btn header__btn-logout' onClick={handleClick}>Log out</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
