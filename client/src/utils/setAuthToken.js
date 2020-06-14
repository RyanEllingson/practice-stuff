import axios from "axios";

const setAuthToken = function(uid) {
    if (uid) {
        axios.defaults.headers.common["Authorization"] = uid;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;