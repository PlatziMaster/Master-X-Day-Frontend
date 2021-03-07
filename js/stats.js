const labels = ["To do", "In progress", "Completed"];
const dataPie = [4,4,2];
const dataBar = [4,4,2];
const tableInfo = document.getElementById("dataTable");
const countActivities = [];






const apiURLNames = "https://api.trello.com/1/boards/DV7tLwJa/lists?key=ebcc59e452059a014878e41eb6bdcf60&token=0198c1f851374852c3d4cf9d8d6c9078e027ceb6ca30d56f167857410fb24c1c";
const apiURLActivities = "https://api.trello.com/1/boards/DV7tLwJa/cards?key=ebcc59e452059a014878e41eb6bdcf60&token=0198c1f851374852c3d4cf9d8d6c9078e027ceb6ca30d56f167857410fb24c1c";

getListNames();
async function getListNames(){
    const res = await fetch(`${apiURLNames}`);
    const data = await res.json();

    getInfo(data);


}

function getInfo(data) {
    let idInfo = [];
    let idNumeber = [];
    let count = [];
    for(id in data) {
        
        idInfo.push(data[id].name);
        idNumeber.push(data[id].id);
    }


    idNumeber.forEach(id => {
        getActivitiesCount(id);  
    })

   
   drawTable(idInfo);

   drawCharts();
}


async function getActivitiesCount(id){
    let amount = 0; 
    const res = await fetch(`${apiURLActivities}`);
    const data = await res.json();

    for(list in data){
        if(id === data[list].idList) {
            amount++;
        }
    }
    countActivities.push(amount);
        
}






function drawCharts(){

    const pieChart = new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
        labels: labels,
        datasets: [{
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: dataPie
        }]
        },
        options: {
        title: {
          display: true,
          text: 'Percentage progress per state'
        }
        }
        });
        
        const barChart = new Chart(document.getElementById("bar-chart"), {
            type: 'horizontalBar',
            data: {
              labels: labels,
              datasets: [
                {
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                  data: [6,4,2,0]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Cards per list'
              }
            }
        });
        

}


function drawTable(labelNames){
   
    const col1 = labelNames[0];
    const col2 = labelNames[1];
    const col3 = labelNames[2];
    
    
    tableInfo.innerHTML = `
    <table class="informationTable">
            <tr>
              <th>Stage</th>
              <th>Total Activities</th>
              <th>Overall Percentage</th>
            </tr>
            <tr>
              <td>${col1}</td>
              <td>-</td>
              <td>0</td>
            </tr>
            <tr>
              <td>${col2}</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>${col3}</td>
              <td>0</td>
              <td>0</td>
            </tr>
            
           
          </table>
    
    `
}



