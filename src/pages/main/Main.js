import main_img from "./main.png"
import logo from './logo_black.png'
import './Main.css'
import { Auth } from "../../components/auth/Auth"
import { Registration } from "../../components/registration/Registration"
import { useState } from "react"

export const Main = ({ setLogedin, setToken, setGuideId}) => {
    const [openAuth, setOpenAuth] = useState(false)
    const [openReg, setOpenReg] = useState(false)

    const handleAuth = () => {
        setOpenAuth(!openAuth)
    }

    const handleReg = () => {
        setOpenReg(!openReg)
    }

    return (
        <div>
            <section className="topbar">
                <div className="container">
                    <div className="topbar__wrapper">
                        <div className="topbar__logo">
                            <div className='topbar__img'>
                                <img src={logo} />
                            </div>
                            <p className='topbar__name'>Postebin</p>
                        </div>
                        <div className='topbar__btns'>
                            <button type='submit' className='topbar__btn topbar__btn-signin' onClick={handleAuth}>Sign in</button>
                            <button type='submit' className='topbar__btn topbar__btn-join' onClick={handleReg}>Join</button>
                        </div>
                    </div>
                    <div style={{ display: openAuth ? 'block' : 'none' }}>
                        <Auth setLogedin={setLogedin} handleAuth={handleAuth} setToken={setToken} />
                        <div className='topbar__overlay'></div>
                    </div>
                    <div style={{ display: openReg ? 'block' : 'none' }}>
                        <Registration handleReg={handleReg} setLogedin={setLogedin} />
                        <div className='topbar__overlay'></div>
                    </div>
                </div>
            </section>

            <main className="main">
                <div className="container">
                    <div className="main__wrapper">
                        <div className="main__text">
                            <p className="main__title">A simple app to share your notes</p>
                            <button className="main__btn" onClick={handleReg}>Create your account</button>
                            <a className="main__signin" onClick={handleAuth}>Already a member? Sign in</a>
                        </div>
                        <div className="main__img">
                            <img src={main_img} />
                            <div className="main__animation main__animation-pink float"></div>
                            <div className="main__animation main__animation-green float"></div>
                            <div className="main__animation main__animation-yellow float"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
