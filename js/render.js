
import board from './api.js'


console.log(board.getCardNumber());

 const renderHtmlTodo = () =>{
    const template = `
    <div class="listblocks__card"></div>
    `
    const todo = document.createElement('div')
    todo.innerHTML = template
    return todo.firstElementChild
}

