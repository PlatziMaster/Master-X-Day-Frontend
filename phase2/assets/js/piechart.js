google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Board"],
    ["TO DO 11", 11],
    ["PROGRESS 2", 2],
    ["DONE 2", 2]
  ]);

  var options = {
    is3D: true,
    width: 270
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart_3d")
  );
  chart.draw(data, options);
}