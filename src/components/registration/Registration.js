import registratio_img from "./registration_img.png"
import "./Registration.css"
import reg_close from './reg_close.png'
import { useForm } from "react-hook-form"
import { users } from '../Users'

export const Registration = ({ handleReg, setLogedin}) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // const onSubmit = (data) => {
    //     const response = async () => {
    //         await fetch('', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //     };
    //     response()
    // }

    const onSubmit = (data) => {
        setLogedin(true)
        console.log(data)
    }


    console.log(watch("username")) // watch input value by passing the name of it

    return (
        <div className="registration">
            <div className="registration__wrapper">
                <div className="registration__close" onClick={handleReg}>
                    <img src={reg_close} />
                </div>
                <div className="registration__img">
                    <img src={registratio_img} />
                    <div className="registration__color"></div>
                </div>
                <h2 className="registration__title">Registration</h2>
                <div >
                    <form className="registration__form"
                        onSubmit={handleSubmit(onSubmit)}>

                        <input className="registration__inp"
                            placeholder="Enter your username"
                            {...register("username", { required: true })}
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.username?.type === "required" && (
                            <p className="registration__error" role="alert">Username name is required</p>
                        )}
                        <input className="registration__inp"
                            placeholder="Enter your e-mail"
                            {...register("mail", { required: "E-mail is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p className="registration__error" role="alert">{errors.mail.message}</p>}
                        <input className="registration__inp"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.password && <p className="registration__error" role="alert">{errors.password.message}</p>}

                        <button className="registration__btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// Написать функцию, которая принимает два параметра: длину пароля и символы, 
//из которых он состояит. Например, (4, ['a','b','c'])

// function gen(len, arr) {
//     if (len === 0) {
//         return [''];
//     }
//     return arr.flatMap(char => gen(len - 1, arr).map(password => char + password))
// }
// console.log(gen(5, ['a','b','c','d']));

 