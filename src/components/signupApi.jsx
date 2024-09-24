import axios from "axios";


export function addUser(item) {
    return axios.post('http://localhost:3000/accounts', item)
}