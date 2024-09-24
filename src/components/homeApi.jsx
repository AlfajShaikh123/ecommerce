import axios from "axios";

export function addFev(id,data) {
    return axios.put(`http://localhost:3000/accounts/${id}`,{fev:data})
}

export function fetchHomeData(id) {
    return axios.get('http://localhost:3000/accounts', id)
}