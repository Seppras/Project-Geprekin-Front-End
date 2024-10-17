// Data for the charts
const chartData = {
  in: {
    labels: ["AK", "AB", "Tepung", "Marinasi", "Beras", "Sambal", "LunchBox"],
    data: [100, 277, 279, 500, 603, 600, 2000],
  },
  out: {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    data: [1, 2, 3, 4, 5, 6, 7],
  },
};

function updateTotalAmount(data) {
  const total = data.reduce((acc, value) => acc + value, 0);
  document.getElementById("totalAmount").textContent = `Rp ${total}`;
}

// Initialize Chart
const ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: chartData.in.labels,
    datasets: [
      {
        label: "Transfer",
        data: chartData.in.data,
        backgroundColor: [
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.8)",
        ],
        borderColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
        borderRadius: {
          topLeft: 16, // 1rem equals 16px
          topRight: 16,
          bottomLeft: 16,
          bottomRight: 16,
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
      datalabels: {
        color: "#fff",
        align: "center",
        anchor: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: 9999,
        padding: 4,
        offset: 10,
        formatter: function (value) {
          return value + " " + "Kg";
        },
        font: {
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});

function updateChart() {
  const selectedOption = document.getElementById("chartSelect").value;
  const selectedData = chartData[selectedOption].data;
  myChart.data.labels = chartData[selectedOption].labels;
  myChart.data.datasets[0].data = selectedData;
  myChart.update();
  updateTotalAmount(selectedData);
}

// Initialize the chart with the default selection
document.addEventListener("DOMContentLoaded", () => {
  updateChart();
});
