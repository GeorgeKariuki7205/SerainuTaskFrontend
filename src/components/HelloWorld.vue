<template>
  <v-container>
    <h2 style="text-align:center;font-family:'times new roman">First DashBoard.</h2>
    <v-divider></v-divider>
    <v-row>
      <v-col md="4">
        <v-card style="padding-left: 5%; padding-right: 5%; padding-bottom: 5%;height: 100%;">
          <v-card-title class="text-center">
            <b>Overall Threat Exposure Score.</b>
          </v-card-title>
          <v-card-subtitle style="color: black; text-align: center">
            <b>Exposure Score</b>
          </v-card-subtitle>
          <p style="font-size: 12px; margin-top: -3%">
            This core reflects the current exposure asociated with machines in
            your organisation.
          </p>
          <p style="font-size: 12px; margin-top: -3%">
            Score is potentially impacted by active exceptions.
          </p>
          <v-row>
            <v-col md="6" offset-md="3">
              <canvas
                id="canvas"
                style="margin-top: -30%"
                height="200"
                width="200"
              ></canvas>
            </v-col>

            <v-col
              md="12"
              offset-md="0"
              style="margin-top: -8%; text-align: center; font-size: 10px"
            >
              <svg height="16" width="16">
                <circle cx="8" cy="8" r="8" fill="green" />
                Sorry, your browser does not support inline SVG.
              </svg>
              0% - 25% Low
              <svg height="16" width="16">
                <circle cx="8" cy="8" r="8" fill="yellow" />
                Sorry, your browser does not support inline SVG.
              </svg>
              26% - 50% Medium
              <svg height="16" width="16">
                <circle cx="8" cy="8" r="8" fill="orange" />
                Sorry, your browser does not support inline SVG.
              </svg>
              51% - 75% High
              <svg height="16" width="16">
                <circle cx="8" cy="8" r="8" fill="red" />
                Sorry, your browser does not support inline SVG.
              </svg>
              76% - 100% Very High
            </v-col>
            <v-col>
              <canvas
                id="line"
                style="margin-top: -6%"
                height="90"
                width="200"
              ></canvas>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <template v-for="(data, index) in dataGetter">
        <v-col md="4" :key="index">
          <v-card
            style="
              padding-left: 5%;
              padding-right: 5%;
              padding-bottom: 5%;
              height: 100%;
            "
          >
            <v-card-title style="text-align: center; color: black">
              {{ data.indicatorDetails.description }}
            </v-card-title>
            <v-card-subtitle style="color: black; text-align: center">
              <b>TES Score For {{ data.indicatorDetails.name }} :</b>
            </v-card-subtitle>
            <v-simple-table>
              <template class="ma-3">
                <thead>
                  <tr style="background-color: #fcdede">
                    <td
                      style="
                        text-align: center;
                        font-size: 10px;
                        text-decoration: bold;
                      "
                    >
                      <b>CVEQ Domain</b>
                    </td>
                    <td style="text-align: center; font-size: 10px">
                      <b>CVEQ Threat Indicator</b>
                    </td>
                    <td style="text-align: center; font-size: 10px">
                      <b>Deteacted</b>
                    </td>
                    <td style="text-align: center; font-size: 10px">
                      <b>Validated</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(row, index) in data.CVECThreatIndicators">
                    <tr :key="index">
                      <td
                        :key="index + 'first'"
                        style="text-align: center; font-size: 10px"
                      >
                        {{ row.uniqueIdentifier }}
                      </td>
                      <td
                        :key="index + 'second'"
                        style="text-align: center; font-size: 10px"
                      >
                        {{ row.name }}
                      </td>

                      <v-tooltip
                        left
                        style="background-color: black; color: red"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="row.detacted >= 0 && row.detacted <= 1.25"
                            :key="index + 'third'"
                            style="
                              background-color: rgb(0, 255, 0, 0.4);
                              text-align: center;
                              font-size: 10px;
                            "
                          >
                            {{ row.detacted }}
                          </td>
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="row.detacted >= 1.26 && row.detacted <= 2.5"
                            :key="index + 'third'"
                            style="
                              background-color: yellow;
                              text-align: center;
                              font-size: 10px;
                            "
                          >
                            {{ row.detacted }}
                          </td>
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="row.detacted >= 2.6 && row.detacted <= 3.75"
                            :key="index + 'third'"
                            style="
                              background-color: orange;
                              text-align: center;
                              font-size: 10px;
                            "
                          >
                            {{ row.detacted }}
                          </td>
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="row.detacted >= 3.76 && row.detacted <= 5"
                            :key="index + 'third'"
                            style="
                              background-color: rgb(255, 0, 0, 0.4);
                              text-align: center;
                              font-size: 10px;
                            "
                          >
                            {{ row.detacted }}
                          </td>
                        </template>
                        <span>{{ row.name }}</span>
                      </v-tooltip>
                      <!-- STYLE BY COLOR. -->
                      <v-tooltip
                        left
                        style="background-color: black; color: red"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="
                              (row.validated / row.detacted) * 100 >= 0 &&
                                (row.validated / row.detacted) * 100 <= 25
                            "
                            :key="index + 'third'"
                            style="
                              background-color: rgb(0, 255, 0, 0.4);
                              text-align: center;
                              font-size: 10px;
                            "
                          >
                            {{ row.validated }}
                          </td>
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="
                              (row.validated / row.detacted) * 100 >= 26 &&
                                (row.validated / row.detacted) * 100 <= 50
                            "
                            :key="index + 'third'"
                            style="
                              background-color: yellow;
                              text-align: center;
                              font-size: 10px;
                            "
                          >
                            {{ row.validated }}
                          </td>
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="
                              (row.validated / row.detacted) * 100 >= 51 &&
                                (row.validated / row.detacted) * 100 <= 75
                            "
                            :key="index + 'third'"
                            style="
                              
                              background-color: orange;
                              text-align: center;
                              font-size: 10px;
                            "
                          >
                            {{ row.validated }}
                          </td>
                          <td
                            v-bind="attrs"
                            v-on="on"
                            v-if="
                              (row.validated / row.detacted) * 100 >= 76 &&
                                (row.validated / row.detacted) * 100 <= 100
                            "
                            :key="index + 'third'"
                            style="
                              text-align: center;
                              font-size: 10px;
                              
                              background-color: rgb(255, 0, 0, 0.4);
                            "
                          >
                            {{ row.validated }}
                          </td>
                        </template>
                        <span>{{ row.name }}</span>
                      </v-tooltip>
                    </tr>
                  </template>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import Chart from "chart.js";
import Chart2 from "chartjs-gauge";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dataGetter"]),
  },
  mounted() {
    // var ctx = document.getElementById("myChart").getContext("2d");
    // var myChart = new Chart(ctx, {
    //   type: "bar",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Aqua"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [12, 19, 3, 5, 2, 3, 14],
    //         backgroundColor: [
    //           "rgba(255, 99, 102, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(255, 159, 64, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)",
    //         ],
    //         borderColor: [
    //           "rgba(255, 99, 102, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 159, 64, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)",
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             beginAtZero: true,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
    // console.log(myChart);
    var ctx2 = document.getElementById("canvas").getContext("2d");
    var ctx3 = document.getElementById("line").getContext("2d");

    var chart3 = new Chart(ctx3, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "rate",
            steppedLine: true,
            data: [5, 8, 4, 10, 3, 1, 7],
            borderColor: "blue",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Exposure score over time. ",
        },
      },
    });
    console.log(chart3);
    var chart = new Chart2(ctx2, {
      type: "gauge",
      data: {
        datasets: [
          {
            value: 48,
            data: [25, 50, 75, 100],
            backgroundColor: ["green", "yellow", "orange", "red"],
            // datalabels: {
            //   color: "#FFFFFF",
            //   backgroundColor: "rgba(0, 0, 0, 1.0)",
            //   borderWidth: 0,
            //   borderRadius: 5,
            //   font: {
            //     weight: "bold",
            //   },
            //   formatter: (value) => {
            //     if (value >= 0 && value <= 25) {
            //       return "0% - 25%";
            //     } else if (value > 25 && value <= 50) {
            //       return "26% - 50%";
            //     } else if (value > 51 && value <= 75) {
            //       return "51% - 75%";
            //     } else if (value > 76 && value <= 100) {
            //       return "76% - 100%";
            //     } else {
            //       return " Unknown Value";
            //     }
            //   },
            // },
          },
        ],
      },
      // plugins: [ChartDataLabels],
      options: {
        needle: {
          radiusPercentage: 2,
          widthPercentage: 3.2,
          lengthPercentage: 80,
          color: "rgba(0, 0, 0, 1)",
        },
        valueLabel: {
          bottomMarginPercentage: -13,
          display: true,
          fontSize: 10,
          formatter: (value) => {
            return Math.round(value) + " %  /  100%";
          },
          color: "rgba(255, 255, 255, 1)",
          // color: "rgba(0, 0, 0, 1)",
          // backgroundColor: "rgba(0, 0, 0, 1)",
          borderRadius: 5,
          padding: {
            top: 7,
            bottom: 7,
          },
          margin: {
            top: 10,
          },
        },
      },
    });

    console.log(chart);
  },
    created() {
    
  },
  name: "HelloWorld",

  data: () => ({}),
};
</script>
