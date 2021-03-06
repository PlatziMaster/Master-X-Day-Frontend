const key =  '1a2d88f8c99ace7c5391697413220037'
const token = 'c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'

const idBoard = "604396bd14073051b7c38da3"

const idList = "604396bd14073051b7c38da4"
const idList1 = "604396bd14073051b7c38da5"
const idList2 = "604396bd14073051b7c38da6"
const idcard = "6043bb4102cc60148dbeb8e0"

const urlList = 'https://api.trello.com/1/list/604396bd14073051b7c38da5?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'

const urlBoard = 'https://api.trello.com/1/boards/604396bd14073051b7c38da3?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44';


const urlcards = 'https://api.trello.com/1/cards/6043bb4102cc60148dbeb8e0?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'


 /** Get -> that provide us the lists from Trello **/
fetch(urlList)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById('listas')
    element.innerHTML = `
        <p>${data.name}</p>
    `
    console.log(data)
})
.catch(err=>console.log(err))


/** Get -> that provide us the boards from Trello**/
fetch(urlBoard)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById('boards')
    element.innerHTML = `
        <p>${data.name}</p>
    `
    console.log(data)
})
.catch(err=>console.log(err))


/** Get -> that provide us the cards from Trello **/
fetch(urlcards)
.then(response => response.json())
.then (data =>{
    let element = document.getElementById('prueba')
    element.innerHTML = `
        <p>${data.name}</p>
    `
    console.log(data)
})
.catch(err=>console.log(err))

