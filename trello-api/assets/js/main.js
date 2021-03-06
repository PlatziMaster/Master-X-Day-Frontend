const API_KEY = "5dbf0eeac5c2b1ee210e08d3f7402f9a";
const TOKEN = "8b05355e3869a07f53a9332b309ea0066596f9297bbc844aa8516a86d375778d";
const BASE_URL = "https://api.trello.com/1/";

init = async () => {
    let boards = await fetchData('members/me/boards?fields=name,url');   
    console.log( boards );
} 

fetchData = ( endpoint ) => {
    return new Promise( ( resolve, reject ) => {
        fetch(`${BASE_URL}${endpoint}&key=${API_KEY}&token=${TOKEN}`)
        .then( response => resolve (response.json()) )        
    });    
}

init();