import * as axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://127.0.0.1:5000/',
    // headers: {pswd: "super secret key"}
})

export const shishaAPI = {
    initial(){
        return instance.post(`create_all_for_db`, {pswd: "super secret key"})
        
    },
    getShishaList(){
        return instance.get(`1`)
        .then(response => {
            return response.data;
        });
    },
};