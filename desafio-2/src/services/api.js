import axios from "axios";

export const api = axios.create({
    eURL: 'https://api.github.com'    
})