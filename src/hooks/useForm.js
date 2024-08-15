import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        const { name, type, value, checked } = e.target;

        setValues((state) => ({
            ...state,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        submitCallback(values);
    };

    return {
        values,
        changeHandler,
        submitHandler,
    };
}
