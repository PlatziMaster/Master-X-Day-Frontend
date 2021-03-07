let urls = [
    'https://api.trello.com/1/boards/6043b6b7c5a4cc2a8b71eaa9/cards?key=d19d98d88e0c3d667eaa30e55750de1f&token=e58553bb91a0b6f6aa5c06add1eb3b2a345bef8e6e754fcd02690d2416c1bd44',
    'https://api.trello.com/1/boards/6043b6b7c5a4cc2a8b71eaa9/lists?key=d19d98d88e0c3d667eaa30e55750de1f&token=e58553bb91a0b6f6aa5c06add1eb3b2a345bef8e6e754fcd02690d2416c1bd44',
    'https://api.trello.com/1/boards/6043b6b7c5a4cc2a8b71eaa9/memberships?key=d19d98d88e0c3d667eaa30e55750de1f&token=e58553bb91a0b6f6aa5c06add1eb3b2a345bef8e6e754fcd02690d2416c1bd44'
]

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: response : ${response.status} `)
    ));

    //Function for prompt
    function isEmpty(){
        if (tId.value == ""){
            return alert("The dashboard can't be read")
        }
    }
