import axios from "axios"

export default class API {
    getAPI(params) {
        return axios.get('https://api.publicapis.org/entries', {
            params: params
        })
    }
}

