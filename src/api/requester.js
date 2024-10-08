

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function requester(method, url, data) {

    const options = {
        headers: {
            'Content-Type': '',
            'Accept': 'application/json',
        },
    };

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = JSON.parse(localStorage.getItem('auth'))?.token;
    if (token !== '') {
        options.headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(url, options);
    const result = await response?.json();

    if (!response.ok) {
        throw response;
    }

    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');