
import { API } from '../../config';
import cookie from 'js-cookie'


export const getPackage = () => {
    return fetch(`/api/packages`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
