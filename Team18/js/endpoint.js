GetLists = () => {
    fetch("https://api.trello.com/1/boards/6043b6b7c5a4cc2a8b71eaa9/lists?key=d19d98d88e0c3d667eaa30e55750de1f&token=e58553bb91a0b6f6aa5c06add1eb3b2a345bef8e6e754fcd02690d2416c1bd44")
        .then((res) => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then((res) => res.json())
        .then((res) => console.log(res))

}

const GetDashBoardButton = document.getElementById("GetDashBoardButton");
GetDashBoardButton.addEventListener('click', () => {
    //GetDashBoard();
    GetLists();

});