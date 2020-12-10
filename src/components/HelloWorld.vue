<template>
  <v-container>
    <v-row>
      <v-col cols="4" md="4">
        <v-card style="padding-left:5%;padding-right:5%;padding-bottom:5%;">
          <v-card-title class="text-center">
            <p>Top western road trips</p>
          </v-card-title>          
          <canvas
            id="canvas"
            style="margin-top: -30%"
            height="200"
            width="200"
          ></canvas>
        </v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card style="padding-left:5%;padding-right:5%;padding-bottom:5%;">
          <v-card-title> Top western road trips </v-card-title>          
          <v-simple-table>
            <template class="ma-3" v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
                <tr>
                  <td rowspan="2" class="text-left">Name</td>
                  <!-- <th class="text-left">Calories</th> -->
                </tr>

              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td style="background-color: green">{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card style="padding-left:5%;padding-right:5%;padding-bottom:5%;">
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          <canvas id="myChart" width="400" height="400"></canvas>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from "chart.js";
import Chart2 from "chartjs-gauge";
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  mounted() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Aqua"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 14],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    console.log(myChart);
    var ctx2 = document.getElementById("canvas").getContext("2d");

    var chart = new Chart2(ctx2, {
      type: "gauge",
      data: {
        datasets: [
          {
            value: 48,
            data: [25, 50, 75, 100],
            backgroundColor: ["green", "yellow", "orange", "red"],
            datalabels: {
              color: "#FFFFFF",
              backgroundColor: "rgba(0, 0, 0, 1.0)",
              borderWidth: 0,
              borderRadius: 5,
              font: {
                weight: "bold",
              },
              formatter: (value) => {
                if (value >= 0 && value <= 25) {
                  return "0% - 25%";
                } else if (value > 25 && value <= 50) {
                  return "26% - 50%";
                } else if (value > 51 && value <= 75) {
                  return "51% - 75%";
                } else if (value > 76 && value <= 100) {
                  return "76% - 100%";
                } else {
                  return " Unknown Value";
                }
              },
            },
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        needle: {
          radiusPercentage: 2,
          widthPercentage: 3.2,
          lengthPercentage: 80,
          color: "rgba(0, 0, 0, 1)",
        },
        valueLabel: {
          bottomMarginPercentage:-10,
          display: true,
          fontSize:15,
          formatter: (value) => {
            return Math.round(value) + " %  /  100%";
          },
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderRadius: 5,
          padding: {
            top: 10,
            bottom: 10,
          },
          margin:{
            top: 10,
          }
        },
      },
    });

    console.log(chart);
  },

  name: "HelloWorld",

  data: () => ({
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
  }),
};
</script>
