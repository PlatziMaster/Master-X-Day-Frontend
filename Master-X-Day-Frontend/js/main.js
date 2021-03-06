const key =  '799758b6d2edff3a9f96decc5aa77c54'
const token = '7293e5ec5d0a112bd673cdeb37d29f31738ca6f7c6997474ddfdab78b0985b2e'
const url = 'https://api.trello.com/1/members/me/boards?key=799758b6d2edff3a9f96decc5aa77c54&token=7293e5ec5d0a112bd673cdeb37d29f31738ca6f7c6997474ddfdab78b0985b2e'

fetch(url)
.then(response => response.json())
.then (data =>{
    console.log(data)
})
.catch(err=>console.log(err))