import auth_img from "./auth_img.png"
import eyeclosed from "./eyeclosed.png"
import eyeopened from "./eyeopened.png"
import "./Auth.css"
import auth_close from './auth_close.png'
import { useForm } from "react-hook-form"
import axios from "axios"
import Cookies from 'js-cookie';
import { useState } from "react"

export const Auth = ({ handleAuth, setToken }) => {
    const [showPass, setShowPass] = useState(false)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const setCookies = (token) => {
        Cookies.set("token", token, { expires: 7 });
        alert('We use cookes');
    }


    // const onSubmit = (data) => {
    //         const getResponse = async () => {
    //             let response = await fetch('https://fakestoreapi.com/auth/login', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json;charset=utf-8'
    //                 },
    //                 body: JSON.stringify(data)

    //             })
    //             // setToken(response)
    //            console.log(response);
    //         };
    //         getResponse()
    // }
    const onSubmit = async (user) => {
        const config = {
            method: 'POST',
            url: 'https://fakestoreapi.com/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: user.username,
                password: user.password
            }),
        }
        const { data } = await axios(config)
        console.log(data);
        setToken(data.token)
        setCookies(data.token)
    }

    // const onSubmit = (data) => console.log(data)

    console.log(watch("username")) // watch input value by passing the name of it

    return (
        <div className="auth">
            <div className="auth__wrapper">
                <div className="auth__close" onClick={handleAuth}>
                    <img src={auth_close} />
                </div>
                <div className="auth__img">
                    <img src={auth_img} />
                    <div className="auth__color"></div>
                </div>
                <h2 className="auth__title">Welcome back!</h2>
                <div >
                    <form className="auth__form"
                        onSubmit={handleSubmit(onSubmit)}>

                        <input className="auth__inp"
                            placeholder="Enter your username"
                            {...register("username", { required: true })}
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.username?.type === "required" && (
                            <p className="auth__error" role="alert">Username is required</p>
                        )}
                        <div className="auth__showpass">
                            <input className="auth__inp"
                                placeholder="Enter your password"
                                type={showPass ? "text" : "password"}
                                {...register("password", { required: "Password is required" })}
                                aria-invalid={errors.mail ? "true" : "false"}
                            />
                            <div className="auth__eye">
                                <img src={showPass ? eyeopened : eyeclosed} onClick={handleShowPass} />
                            </div>
                        </div>
                        {errors.password && <p className="auth__error" role="alert">{errors.password.message}</p>}

                        <button className="auth__btn" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
