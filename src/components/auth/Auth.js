import auth_img from "./auth_img.png"
import "./Auth.css"
import auth_close from './auth_close.png'
import { useForm } from "react-hook-form"

export const Auth = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className="auth">
            <div className="auth__wrapper">
                <div className="auth__close">
                    <img src={auth_close} />
                </div>
                <div className="auth__img">
                    <img src={auth_img} />
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
                            <p className="auth__error" role="alert">Username name is required</p>
                        )}
                        <input className="auth__inp"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.password && <p className="auth__error" role="alert">{errors.password.message}</p>}

                        <button className="auth__btn" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
