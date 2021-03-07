import http from "../http-common";

const token = "9a0f9a7794beb9e8f1c64b967852458b7509b2e421bead99db718d85f0631627";
const key = "82a7117a21f543428ff271cb419fd3de"

class ApiService {
    getBoards() {
        return http.get(`members/me/boards?key=${key}&token=${token}`);
    }

    getCards( idBoard){
        return http.get(`boards/${idBoard}/cards?key=${key}&token=${token}`);
    }
}

export default new ApiService();