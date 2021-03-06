const labels = ["To do", "In progress", "Completed"];
const dataPie = [4,4,2];
const dataBar = [4,4,2];
const tableInfo = document.getElementById("dataTable");


drawCharts();

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
        

        drawTable();
}


function drawTable(){
    tableInfo.innerHTML = `
    <table class="informationTable">
            <tr>
              <th>Stage</th>
              <th>Total Activities</th>
              <th>Overall Percentage</th>
            </tr>
            <tr>
              <td>To do</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>In progress</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Completed</td>
              <td>0</td>
              <td>0</td>
            </tr>
            
           
          </table>
    
    `
}



