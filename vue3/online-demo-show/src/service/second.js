import axios from "./config";

export const getSecond = () => {
    axios.get('/second')
}