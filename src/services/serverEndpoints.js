const base_url = 'http://13.232.189.133:3000';

export async function get_remote_data(method, endpoint, data = null, headers = null) {
    let res;
    if (headers) {
        headers['Content-Type'] = 'application/json';
    } else {
        headers = {
            'Content-Type': 'application/json'
        };
    }
    var fetchOptions = {};
    if (method === 'GET') {
        fetchOptions = {
            method: method,
            headers: headers,
        }
    } else {
        if (data) {
            fetchOptions = {
                method: method,
                headers: headers,
                body: JSON.stringify(data)
            }
        } else {
            fetchOptions = {
                method: method,
                headers: headers
            }
        }
    }
    await fetch(base_url + endpoint, fetchOptions)
    .then((response) => response.json())
    .then((responseData) => {
        res = responseData;
    })
    .catch((error) => {
        console.log(`There has been a problem with your fetch operation: ${error.message}`);
        throw error;
    });
    return await res;
}

export async function get_remote_data_with_get(url, header) {
    let res;
    await fetch(url, {
        method: 'GET',
        headers: header,
    })
    .then((response) => response.json())
    .then((responseData) => {
        data = responseData;
    })
    .catch(function (error) {
        console.log(`There has been a problem with your fetch operation: ${error.message}`);
        throw error;
    });
    return await res;
}