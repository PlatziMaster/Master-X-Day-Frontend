import axios from "axios";



export default axios.create({
    baseURL: 'https://api.trello.com/1/'   
});

