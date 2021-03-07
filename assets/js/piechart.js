google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(arrayData) {
  var data = google.visualization.arrayToDataTable(arrayData);

  var options = {
    is3D: true,
    width: "100%",
    height: "500px"
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart_3d")
  );
  chart.draw(data, options);
}
