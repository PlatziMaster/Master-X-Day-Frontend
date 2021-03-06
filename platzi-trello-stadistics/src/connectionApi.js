const button = document.getElementById("button");
button.addEventListener('click', () => {
    //getdashboard();
    getList();

});

getdashboard = () => {
    fetch("https://api.trello.com/1/boards/6043df7d663af602cf77c881?key=3ecdfc55093cc26752e7056b0834e1e4&token=57a87b374c6043be18dbc60f00962ba3a650c731b54df7f86b83e967becf22ec")
    .then((res)=>res.ok? Promise.resolve(res) : Promise.reject(res))
    .then((res)=>res.json()) 
    .then((res) => console.log(res)) 
 /*    .then((res) => {
        const list = document.getElementById('lista')
        for (const userInfo of res) {
            const itemList = document.createElement("Li");
             itemList.textContent=`${id} - ${}`; 
            list.appendChild(itemList);
        }
    }) */
}

getList = () => {
    fetch("https://api.trello.com/1/boards/6043df7d663af602cf77c881?key=3ecdfc55093cc26752e7056b0834e1e4&token=57a87b374c6043be18dbc60f00962ba3a650c731b54df7f86b83e967becf22ec")
    .then((res)=>res.ok? Promise.resolve(res) : Promise.reject(res))
    .then((res)=>res.json()) 
    .then((res) => console.log(res)) 
 /*    .then((res) => {
        const list = document.getElementById('lista')
        for (const userInfo of res) {
            const itemList = document.createElement("Li");
             itemList.textContent=`${id} - ${}`; 
            list.appendChild(itemList);
        }
    }) */
}