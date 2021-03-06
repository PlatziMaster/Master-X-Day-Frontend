import axios from "axios";

const token = "9a0f9a7794beb9e8f1c64b967852458b7509b2e421bead99db718d85f0631627";
const key = "82a7117a21f543428ff271cb419fd3de"

export default axios.create({
    baseURL: `https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`
    
});

