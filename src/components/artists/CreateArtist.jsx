import {useState} from "react";
import {useCreateArtists} from "../../hooks/useArtists.js";
import {useForm} from "../../hooks/useForm.js";
import {useNavigate} from "react-router-dom";


const initialValues = {
    name: '',
    image: '',
    genres: '',
    place: '',
    bio: ''
};

export default function CreateArtist() {
    const [error, setError] = useState('');
    const create = useCreateArtists()
    const navigate = useNavigate();

    const createArtistHandler = async ({name, image, genres, place, bio}) => {

        if (!name) {
            setError("Не e въведено име");
            return;
        }

        try {
            await create(name, image, genres, place, bio);
            navigate('/artists');
        } catch (err) {
            if (err.message) {
                setError(err.message);
            } else {
                setError("Невъзможна създаване.")
            }
        }
    };

    const {values, changeHandler, submitHandler} =
        useForm(initialValues, createArtistHandler);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Създай артист
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Име на
                                    артиста</label>
                                <input type="text" name="name" id="name" value={values.name}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="пр. най-яката банда" required=""/>
                            </div>
                            <div>
                                <label htmlFor="image"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Снимка</label>
                                <input type="text" name="image" id="image" value={values.image}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="линк (URL) към снимка"/>
                            </div>
                            <div>
                                <label htmlFor="genres"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Жанр</label>
                                <input type="text" name="genres" id="genres" value={values.genres}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="пр. рок, поп"/>
                            </div>
                            <div>
                                <label htmlFor="place"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Локация</label>
                                <input type="text" name="place" id="place" value={values.place}
                                       onChange={changeHandler}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="пр. Холивуд"/>
                            </div>
                            <div>
                                <label htmlFor="bio"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Кратка
                                    биография</label>
                                <textarea type="text-area" name="bio" id="bio" value={values.bio}
                                          onChange={changeHandler}
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Яката история на бандата ... в 100 знака ;)"/>
                            </div>

                            {error && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                    className="font-medium">{error}</span>
                                </p>
                            )}
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Създай
                                артист
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}