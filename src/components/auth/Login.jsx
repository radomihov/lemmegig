import {useLogin} from "../../hooks/useAuth.js";
import {useForm} from "../../hooks/useForm.js";
import {Link, useNavigate} from "react-router-dom";

import logo from '../../assets/img/logo.png';

const initialValues = {email: '', password: ''};

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({email, password}) => {
        try {
            await login(email, password);
            navigate('/schedule');
        } catch (err) {
            console.log(err.message);
        }
    };

    const {values, changeHandler, submitHandler} = useForm(initialValues, loginHandler);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="mb-6 pb-10 md:mb-0">
                    <Link to="/e">
                        <img src={logo} alt="LemmeGIG Logo" style={{height: '50px'}}/>
                    </Link>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Влез в профила си
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имейл</label>
                                <input type="email" name="email" id="email" value={values.email}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Парола</label>
                                <input type="password" name="password" id="password" value={values.password}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="••••••••" required=""/>
                            </div>
                            {/*<div className="flex items-center justify-between">*/}
                            {/*    <div className="flex items-start">*/}
                            {/*        <div className="flex items-center h-5">*/}
                            {/*            <input id="remember" aria-describedby="remember" type="checkbox"*/}
                            {/*                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"*/}
                            {/*                   required=""/>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-3 text-sm">*/}
                            {/*            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Запомни ме</label>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <a href="#"*/}
                            {/*       className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Забравена парола?</a>*/}
                            {/*</div>*/}
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Вход
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Нямаш профил? <a href="/register"
                                                 className="font-medium text-primary-600 hover:underline dark:text-primary-500">Регистрирай
                                се</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
