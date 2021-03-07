  let tab1 = document.getElementById('todos');
  
    tab1.addEventListener('click', e => {
         
    let activeTab = document.getElementsByClassName('lists__title--active');
    let activePanel = document.getElementsByClassName('listblocks__list'); 
    let todos = document.getElementById('todolist');
    let inprocess = document.getElementById('inprocesslist');
    let done = document.getElementById('donelist');
    let clickedTab = e.currentTarget;

        console.log(clickedTab);
        console.log(clickedTab.id);


        activeTab[0].classList.add('lists__title');
        activeTab[0].classList.remove('lists__title--active');
        clickedTab.classList.add('lists__title--active');
        clickedTab.classList.remove('lists__title');
        
        activePanel[0].classList.add('listblocks__list--hidden');
        activePanel[0].classList.remove('listblocks__list');
        
        if (clickedTab.id === 'todos') {
          todos.classList.add('listblocks__list');
          todos.classList.remove('listblocks__list--hidden');
        }

        if (clickedTab.id === 'inprocess') {
          inprocess.classList.add('listblocks__list');
          inprocess.classList.remove('listblocks__list--hidden');
        }

        if (clickedTab.id === 'done') {
            done.classList.add('listblocks__list');
            done.classList.remove('listblocks__list--hidden');
          }
 });

 let tab2 = document.getElementById('inprocess');
  
    tab2.addEventListener('click', e => {
         
    let activeTab = document.getElementsByClassName('lists__title--active');
    let activePanel = document.getElementsByClassName('listblocks__list'); 
    let todos = document.getElementById('todolist');
    let inprocess = document.getElementById('inprocesslist');
    let done = document.getElementById('donelist');
    let clickedTab = e.currentTarget;

        console.log(clickedTab);
        console.log(clickedTab.id);


        activeTab[0].classList.add('lists__title');
        activeTab[0].classList.remove('lists__title--active');
        clickedTab.classList.add('lists__title--active');
        clickedTab.classList.remove('lists__title');
        
        activePanel[0].classList.add('listblocks__list--hidden');
        activePanel[0].classList.remove('listblocks__list');
        
        if (clickedTab.id === 'todos') {
          todos.classList.add('listblocks__list');
          todos.classList.remove('listblocks__list--hidden');
        }

        if (clickedTab.id === 'inprocess') {
          inprocess.classList.add('listblocks__list');
          inprocess.classList.remove('listblocks__list--hidden');
        }

        if (clickedTab.id === 'done') {
            done.classList.add('listblocks__list');
            done.classList.remove('listblocks__list--hidden');
          }
 });

 let tab3 = document.getElementById('done');
  
    tab3.addEventListener('click', e => {
         
    let activeTab = document.getElementsByClassName('lists__title--active');
    let activePanel = document.getElementsByClassName('listblocks__list'); 
    let todos = document.getElementById('todolist');
    let inprocess = document.getElementById('inprocesslist');
    let done = document.getElementById('donelist');
    let clickedTab = e.currentTarget;

        console.log(clickedTab);
        console.log(clickedTab.id);


        activeTab[0].classList.add('lists__title');
        activeTab[0].classList.remove('lists__title--active');
        clickedTab.classList.add('lists__title--active');
        clickedTab.classList.remove('lists__title');
        
        activePanel[0].classList.add('listblocks__list--hidden');
        activePanel[0].classList.remove('listblocks__list');
        
        if (clickedTab.id === 'todos') {
          todos.classList.add('listblocks__list');
          todos.classList.remove('listblocks__list--hidden');
        }

        if (clickedTab.id === 'inprocess') {
          inprocess.classList.add('listblocks__list');
          inprocess.classList.remove('listblocks__list--hidden');
        }

        if (clickedTab.id === 'done') {
            done.classList.add('listblocks__list');
            done.classList.remove('listblocks__list--hidden');
          }
 });
