import { useState} from "react";
import {useEditGig, useGetOneGig} from "../../hooks/useGigs.js";
import {useForm} from "../../hooks/useForm.js";
import {useNavigate, useParams} from "react-router-dom";
import {Spinner} from "flowbite-react";

const initialValues = {
    name: '',
    description: '',
    fee: '',
    is_public: false,
    image: ''
};

export default function EditGig() {
    const {id} = useParams();
    const {gig, isLoading} = useGetOneGig(id);
    const edit = useEditGig();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const editGigHandler = async ({name, description, fee, is_public, image}) => {

        if (!name) {
            setError("Не e въведено име");
            return;
        }

        try {
            await edit(id, name, description, fee, is_public, image);
            navigate(`/gigs/${id}`);
        } catch (err) {
            if (err.message) {
                setError(err.message);
            } else {
                setError("Невъзможно редактиране.")
            }
        }
    };
    const {values, changeHandler, submitHandler} =
        useForm(Object.assign(initialValues, gig), editGigHandler);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    {isLoading ? (
                        <div className="flex justify-center items-center pt-20 pb-20">
                            <Spinner size="lg"/>
                        </div>
                    ) : (
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Редактирай участие
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Име на
                                    участието</label>
                                <input type="text" name="name" id="name" value={values?.name ?? ''}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <div>
                                <label htmlFor="image"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Снимка</label>
                                <input type="text" name="image" id="image" value={values?.image ?? ''}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="fee"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Вход</label>
                                <input type="text" name="fee" id="fee" value={values?.fee ?? ''}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Кратко
                                    описание</label>
                                <textarea type="text-area" name="description" id="description"
                                          value={values?.description ?? ''}
                                          onChange={changeHandler}
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div className="flex flex-wrap">
                                <input type="checkbox" name="is_public" id="is_public" value={values.is_public}
                                       onChange={changeHandler}/>
                                <label htmlFor="is_public"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-5">Публично
                                    събитие</label>
                            </div>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-sm dark:text-gray-400">
                                Променяй срещите и дните на участие от режим преглед на събитието.</p>

                            {error && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                    className="font-medium">{error}</span>
                                </p>
                            )}
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Запази
                                участие
                            </button>
                        </form>
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
}