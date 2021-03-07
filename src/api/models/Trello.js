import axios from 'axios'
import config from '../config/index.js'

export default class Trello
{
    constructor ()
    {
        this.httpClient = axios
        this.headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
    }

    async getUserInformation ()
    {
       try {
           const response = await this.httpClient({
               method: 'get',
               url: `${config.API_URL}/1/members/me?key=${config.API_KEY}&token=${config.API_TOKEN}`,
               headers: this.headers,
           })

           if (response.status !== 200) {
                throw new Error()
           }

           return response.data
       } catch (error) {
           console.error(error)
       }
    }

    async getMembershipsOfABoardById (boardId)
    {
        try {
            const response = await this.httpClient({
                method: 'get',
                url: `${config.API_URL}/1/boards/${boardId}/memberships?key=${config.API_KEY}&token=${config.API_TOKEN}`,
                headers: this.headers,
            })

            if (response.status !== 200) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async getABoardById (boardId)
    {
        try {
            const response = await this.httpClient({
                method: 'get',
                url: `${config.API_URL}/1/boards/${boardId}?key=${config.API_KEY}&token=${config.API_TOKEN}`,
                headers: this.headers,
            })

            if (response.status !== 200) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async getListsOnABoardById (boardId)
    {
        try {
            const response = await this.httpClient({
                method: 'get',
                url: `${config.API_URL}/1/boards/${boardId}/lists?key=${config.API_KEY}&token=${config.API_TOKEN}`,
                headers: this.headers,
            })

            if (response.status !== 200) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async getAListById (listId)
    {
        try {
            const response = await this.httpClient({
                method: 'get',
                url: `${config.API_URL}/1/lists/${listId}?key=${config.API_KEY}&token=${config.API_TOKEN}`,
                headers: this.headers,
            })

            if (response.status !== 200) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async getCardsInAListById (listId)
    {
        try {
            const response = await this.httpClient({
                method: 'get',
                url: `${config.API_URL}/1/lists/${listId}/cards?key=${config.API_KEY}&token=${config.API_TOKEN}`,
                headers: this.headers,
            })

            if (response.status !== 200) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async getACardById (cardId)
    {
        try {
            const response = await this.httpClient({
                method: 'get',
                url: `${config.API_URL}/1/cards/${cardId}?key=${config.API_KEY}&token=${config.API_TOKEN}`,
                headers: this.headers,
            })

            if (response.status !== 200) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.error(error)
        }
    }
}
