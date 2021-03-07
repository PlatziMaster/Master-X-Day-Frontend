const key =  '1a2d88f8c99ace7c5391697413220037'
const token = 'c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'

const idBoard = "604396bd14073051b7c38da3"

const idList = "604396bd14073051b7c38da4"
const idList1 = "604396bd14073051b7c38da5"
const idList2 = "604396bd14073051b7c38da6"

const idCardList = "6043bb394deed00275fa227b"


const urlList = 'https://api.trello.com/1/list/604396bd14073051b7c38da4?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'
const urlList1 = 'https://api.trello.com/1/list/604396bd14073051b7c38da5?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'
const urlList2 = 'https://api.trello.com/1/list/604396bd14073051b7c38da6?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'

const urlBoard = 'https://api.trello.com/1/boards/604396bd14073051b7c38da3?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44';

const urlcardslist = 'https://api.trello.com/1/cards/6043bb394deed00275fa227b?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'
const urlCardslist1 = 'https://api.trello.com/1/cards/6044001b1ac9b64c75c4c22a?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'


const urlCardsList2 = 'https://api.trello.com/1/cards/6043bb4102cc60148dbeb8e0?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'
const urlCardsList3 = 'https://api.trello.com/1/cards/604396d6f0d57d1da5fd9058?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'


const idmiembro = 'https://api.trello.com/1/members/6043bbcf190a3f6bd0b31611?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'
const idmiembro2 = 'https://api.trello.com/1/members/604395f6a3759c40bf81695c?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'
const idmiembro3 = 'https://api.trello.com/1/members/6043bbc71a1e421b33ea5d27?key=1a2d88f8c99ace7c5391697413220037&token=c719c5ceb460648640d2fba3d1e356be33e30cbcd3a523bc12ddbcf4824c3b44'


 /** Get que trae los miembros de del equipo **/
 fetch(idmiembro)
 .then(response => response.json())
 .then (data =>{
    let elemento = document.getElementById('miembro1')
    elemento.innerHTML = `
        <h4>${data.fullName}</h4>
    `
     console.log(data)
 })
 .catch(err=>console.log(err))

 /** Get que trae los miembros de del equipo **/
 fetch(idmiembro2)
 .then(response => response.json())
 .then (data =>{
    let elemento = document.getElementById('miembro')
    elemento.innerHTML = `
        <h4>${data.fullName}</h4>
    `
     console.log(data)
 })
 .catch(err=>console.log(err))

  /** Get que trae los miembros de del equipo **/
  fetch(idmiembro3)
  .then(response => response.json())
  .then (data =>{
     let elemento = document.getElementById('miembro2')
     elemento.innerHTML = `
         <h4>${data.fullName}</h4>
     `
      console.log(data)
  })
  .catch(err=>console.log(err))

  

 /** Get que trae las listas de Trello **/
fetch(urlList)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById('listas')
    element.innerHTML = `
        <p>${data.name}</p>
    `
})
.catch(err=>console.log(err))


 /** Get que trae las listas de Trello **/
 fetch(urlList1)
 .then(response => response.json())
 .then (data =>{
 
     let element = document.getElementById('segunda')
     element.innerHTML = `
         <p>${data.name}</p>
     `
 })
 .catch(err=>console.log(err))

  /** Get que trae las listas de Trello **/
  fetch(urlList2)
  .then(response => response.json())
  .then (data =>{
  
      let element = document.getElementById('hecho')
      element.innerHTML = `
          <p>${data.name}</p>
      `
  })
  .catch(err=>console.log(err))




/** Get que trae los cards de Trello de la lista **/
fetch(urlcardslist)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById('prueba')
    element.innerHTML = `
        <p>${data.name}</p>
    `
})
.catch(err=>console.log(err))


/** Get que trae los cards de Trello de la lista 1 **/
fetch(urlCardslist1)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById('prueba1')
    element.innerHTML = `
        <p>${data.name}</p>
    `
})
.catch(err=>console.log(err))


/** Get que trae los cards de Trello de la lista 2 **/
fetch(urlCardsList2)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById('otraPruebita')
    element.innerHTML = `
        <p>${data.name}</p>
    `

    console.log(data)
})
.catch(err=>console.log(err))



/** Get que trae los cards de Trello de la lista 2 **/
    fetch(urlCardsList3)
    .then(response => response.json())
    .then (data =>{
    
        let element = document.getElementById('final')
        element.innerHTML = `
            <p>${data.name}</p>
        `
    })
    .catch(err=>console.log(err))






/** Get que trae los tableros de Trello**/
fetch(urlBoard)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById('boards')
    element.innerHTML = `
        <p>${data.name}</p>
    `
})
.catch(err=>console.log(err))











