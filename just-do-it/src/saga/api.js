// Create fetch API function
export default function apiCall(url, method, raw) {
    // error
    let error;

    // Request data
    let requestData
    if (raw) {
        requestData = {
            method: method,
            body: raw,
            headers: {
                "Content-Type":  "application/json"
            }
        };
    } else {
        requestData = {
            method: method,
            headers: {
                "Content-Type":  "application/json"
            }
        };
    }
    return (
        fetch(url, requestData)
            .then(response => {
                switch (response.status) {
                    case 400:
                        error = 400;
                        break;
                    case 401:
                        error = 401;
                        break;
                    case 403:
                        error = 403;
                        break;
                    case 500:
                        error = 500;
                        break;
                    default:
                        break;
                }
                return response.json()
            })
            .then(res => {
                switch (error) {
                    case 400:
                        let message;
                        if (res.errors) {
                            if (res.errors[0]) {
                                message = res.errors[0].defaultMessage;
                            }
                        } else {
                            message = res.message;
                        }
                        const error_400 = { message };
                        throw error_400;
                    case 401:
                        const error_401 = { message: 'error'};
                        throw error_401;
                    case 403:
                        const error_403 = { message: 'error'};
                        throw error_403;
                    case 500:
                        const error_500 = { message: 'error'};
                        throw error_500;
                    default:
                        return res
                }
            })
    )
};