import main_img from "./main.png"
import './Main.css'

export const Main = () => {

    return (
        <main className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__text">
                        <p className="main__title">A simple app to share your notes</p>
                        <button className="main__btn">Create your account</button>
                        <a className="main__signin">Already a member? Sign in</a>
                    </div>
                    <div className="main__img">
                        <img src={main_img} />
                    </div>
                </div>
            </div>
        </main>
    )
}
