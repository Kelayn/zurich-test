import axios, {AxiosError} from 'axios';
import rateLimit from 'axios-rate-limit';

const http = rateLimit(axios.create(), {maxRequests: 6, perMilliseconds: 1000});
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const useApi = () => {
    function errorHandler(e: AxiosError<any>) {
        if (e.response?.data?.message) {
            console.error(e.response.data.message )
        }
        console.error('something went wrong while fetching data');
        throw e;
    }

    /**
     * Function to make raw requests to server
     */
    function rawRequest(method: string, url: string, data = {}) : Promise<any> {
        const methodLower = method.toLowerCase();
        return http({
            method: method.toLowerCase(),
            url: new URL(url, API_URL).toString(),
            params: methodLower === 'get' ? data : {},
            data: methodLower === 'get' ? {} : data,
        })
            .then((response) => response.data)
            .catch(errorHandler);
    }

    return {
        rawRequest
    }
}
