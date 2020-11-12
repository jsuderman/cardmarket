import axios from "axios";

const url = "https://api.thesneakerdatabase.com/v1/sneakers?";

export default {

    GetSneaker: function() {
        return axios.get(url);
    }
}