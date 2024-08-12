import {useState} from "react";
import {useRegister} from "../../hooks/useAuth.js";
import {useForm} from "../../hooks/useForm.js";
import {Link, useNavigate} from "react-router-dom";

import logo from '../../assets/img/logo.png';


const initialValues = { name: '', email: '', password: '', confirmPassword: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister()
    const navigate = useNavigate();

    const registerHandler = async ({name, email, password, confirmPassword}) => {

        if (!name){
            setError("Не са въведени имена");
            return;
        }

        if (!email){
            setError("Не е въведен имейл");
            return;
        }

        // const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!pattern.test(email)) {
        //     setError("Невалиден имейл");
        //     return;
        // }

        if (password !== confirmPassword){
            setError("Паролите не съвпадат");
            return;
        }

        try {
            await register(name, email, password);
            navigate('/');
        } catch (err) {
            if (err.message) {
                setError(err.message);
            } else {
                setError("Невъзможна регистрация. Възможно е да има вече потребител с този имейл.")
            }
        }
    };

    const {values, changeHandler, submitHandler} =
        useForm(initialValues, registerHandler);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="mb-6 pb-10 md:mb-0">
                    <Link to="/">
                        <img src={logo} alt="LemmeGIG Logo" style={{height: '50px'}}/>
                    </Link>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Създай профил
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Име</label>
                                <input type="text" name="name" id="name" value={values.name}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Иван Иванов" required=""/>
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имейл</label>
                                <input type="email" name="email" id="email" value={values.email}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Парола</label>
                                <input type="password" name="password" id="password" value={values.password}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="••••••••" required=""/>
                            </div>
                            <div>
                                <label htmlFor="confirm-password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Повтори
                                    парола</label>
                                <input type="password" name="confirmPassword" id="confirm-password"  value={values.confirmPassword}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="••••••••" required=""/>
                            </div>
                            {error && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                    className="font-medium">{error}</span>
                                </p>
                            )}
                            {/*<div className="flex items-start">*/}
                            {/*    <div className="flex items-center h-5">*/}
                            {/*        <input id="terms" aria-describedby="terms" type="checkbox"*/}
                            {/*               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"*/}
                            {/*               required=""/>*/}
                            {/*    </div>*/}
                            {/*    <div className="ml-3 text-sm">*/}
                            {/*        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I*/}
                            {/*            accept*/}
                            {/*            the <a*/}
                            {/*                className="font-medium text-primary-600 hover:underline dark:text-primary-500"*/}
                            {/*                href="#">Terms and Conditions</a></label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Създай
                                профил
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Вече имаш профил? <a href="/login"
                                                     className="font-medium text-primary-600 hover:underline dark:text-primary-500">Влез
                                тук</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}