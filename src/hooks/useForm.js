import {useState} from "react";
export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues)

    //TODO: add support for checkbox
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setValues(state => ({
            ...state,
            [name]: value,
        }))
    }

    const submitHandler = (e)=> {
        e.preventDefault();
        submitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler
    }
}