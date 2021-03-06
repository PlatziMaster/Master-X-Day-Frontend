const button = document.getElementById("button");
button.addEventListener('click', () => {
    getdashboard();

});

getdashboard = () => {
    fetch("https://api.trello.com/1/boards/%7B6043cb72ae0b4b23d1dd8690%7D?key=%7B7b763abd9e2cec104a280f13b4075fcd%7D&token=%7B80dbe63416c0d24c60bff4c76f8544051f0f38832a3e08b72ed7b2f137cf8b58%7D")
    .then((res)=>res.ok? Promise.resolve(res) : Promise.reject(res))
    /* .then((res)=>res.json()) */
    /* .then((res) => console.log(res)) */
    .then((res) => {
        const list = document.getElementById('lista')
        for (const userInfo of res) {
            const itemList = document.createElement("Li");
            /* itemList.textContent=`${id} - ${}`; */
            list.appendChild(itemList);
        }
    })
}