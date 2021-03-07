class Board{
    constructor(baseUrl,apiKey,token){
        this.baseUrl = baseUrl,
        this.apiKey = apiKey,
        this.token = token
    }

    getUserName(){
        const url = ''.concat(this.baseUrl,'boards/DV7tLwJa/members?key=',this.apiKey,'&token=',this.token)
        let userNames = []
        fetch(url,{method: 'GET'})
        .then(data => data.json())
        .then(data=>{
            data.forEach(element => {
                userNames.push(element)
            });
        })
        return userNames
    }

    getCardNumber(){
        const url = ''.concat(this.baseUrl,'boards/DV7tLwJa/cards?key=',this.apiKey,'&token=',this.token)
        var cardAmount = []
        fetch(url)
        .then(data=>data.json())
        .then(data=>{
            cardAmount.push(data.length)
        })
        return cardAmount
    }

    getListNumber(){
        const url = ''.concat(this.baseUrl,'boards/DV7tLwJa/lists?key=',this.apiKey,'&token=',this.token)
        let ids = []
        fetch(url)
        .then(data=>data.json())
        .then(data=>{
        data.forEach(element => {
            ids.push(element)
        });
    })
        return ids
    }
    
}


var nu = new Board('https://api.trello.com/1/','ebcc59e452059a014878e41eb6bdcf60','0198c1f851374852c3d4cf9d8d6c9078e027ceb6ca30d56f167857410fb24c1c')

export default nu