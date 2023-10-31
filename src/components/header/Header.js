import './Header.css'
import logo from './logo.png'

export const Header = () => {


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
                    <div className='header__btns'>
                        <button type='submit' className='header__btn header__btn-signin'>Sign in</button>
                        <button type='submit' className='header__btn header__btn-join'>Join</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
