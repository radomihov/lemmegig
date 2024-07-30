
export const baseUrl=import.meta.env.VITE_API_BASE_URL;

type RequesterOptions = {
    method?: string;
    headers: Record <string, string>;
    body?: string;
};

async function requester(
                method: 'GET' | 'POST' | 'PUT' | 'DELETE',
                url: string,
                data?: JSON
                        ) {

    const options: RequesterOptions = {
        headers: {'Content-Type' : ''},
    };

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
        };

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    return response.json();
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');