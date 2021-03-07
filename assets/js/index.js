let cardContainer = null;
let myModal = null;
let jsonData = null;
let tagsContainer = null;
let totalCards = null;

const loadData = async () => {
  cardContainer = document.getElementById("cards-container");
  tagsContainer = document.getElementById("tags-container");
  totalCards = document.getElementById("total-cards");
  myModal = new bootstrap.Modal(document.getElementById("cardModal"), {
    keyboard: false
  });
  jsonData = await init();
  setTimeout(() => {
    createCards(jsonData);
  }, 1000);
};

const createCards = (jsonData) => {
  console.log(cardContainer);
  console.log(jsonData.length);
  jsonData.forEach((element, index) => {
    let numCards = getNumCards(element);
    let card = `
      <div class="col-12 col-md-4 col-sm-6">
        <div class="card">
          <div class="card-header">
            ${element.name}
            <div id="id_api"></div>
          </div>
          <div class="card-body pl-4 pr-4">
            <h5 class="card-title">Member´s Name:</h5>
            <div class="row">
              <ul class="list-group list-group-flush">`;
    element.members.forEach((member) => {
      card += `<li class="list-group-item">* ${member.name}</li>`;
    });
    card += `               
              </ul>
              <div id="members"></div>
            </div>
            <div class="row pt-3 text-center">
              <div class="col-6">
                <h4>
                  <span class="badge bg-success"
                    >Cards: ${numCards}
                    <div id="num_cards"></div
                  ></span>
                </h4>
              </div>
              <div class="col-6">
                <h4>
                  <span class="badge bg-success"
                    >List: ${element.lists}
                    <div id="num_lists"></div
                  ></span>
                </h4>
              </div>
            </div>
          </div>
          <div class="card-footer bg-dark">
            <div class="row justify-content-center">
              <button
                type="button"                
                class="btn btnPlatzi m-3"
                onclick="openModal( ${index})"        
              >
                View progress
              </button>
            </div>
          </div>
        </div>
      </div>      
    `;

    cardContainer.innerHTML += card;
  });
};

const getNumCards = (element) => {
  let numCards = 0;
  element.listData.forEach((list) => {
    numCards += list.numCards;
  });

  return numCards;
};

const openModal = (index) => {
  let cardInfo = jsonData[index];
  let numCards = getNumCards(cardInfo);
  totalCards.innerHTML = `Total cards : ${numCards}`;
  let cardsPerList = [];
  cardsPerList[0] = ["Task", "Board"];

  tagsContainer.innerHTML = "";
  cardInfo.listData.forEach((list, i) => {
    setCardTag(list);
    cardsPerList[i + 1] = [list.name, list.numCards];
  });

  drawChart(cardsPerList);
  myModal.show();
};

const setCardTag = (item) => {
  let tagHtml = `
    <div class="col-md-4 col-sm-12">
      <h3>
        <span class="badge bg-success">${item.name} ${item.numCards}</span>
      </h3>
    </div>  
  `;
  tagsContainer.innerHTML += tagHtml;
};

loadData();
