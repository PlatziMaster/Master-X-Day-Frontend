const urlBase = 'https://api.trello.com/1/'
const apiKey = 'ebcc59e452059a014878e41eb6bdcf60'
const token = '0198c1f851374852c3d4cf9d8d6c9078e027ceb6ca30d56f167857410fb24c1c'


function getNames(urlBase,token) {
    const url = ''.concat(urlBase,'members/me/boards?key=',apiKey,'&token=',token)
    fetch(url)
    .then((result)=>result.json())
    .then((data)=>{
        data.forEach(e => {
            console.log(e.memberships)
        });
    })
}
getNames(urlBase,token)
