<template>
  <v-container>
    <v-divider></v-divider>
    <h2 style="text-align:center;font-family:'times new roman">
      Second DashBoard.
    </h2>
    <v-divider></v-divider>
    <v-row>
      <v-col md="4">
        <v-card
          style="
            padding-left: 5%;
            padding-right: 5%;
            padding-bottom: 5%;
            height: 100%;
          "
        >
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

            <v-row>
              <v-col md="6" offset-md="3">
                <canvas
                  :id="'canvasGuage' + index"
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
              <v-col> </v-col>
            </v-row>
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
                              background-color: rgb(255, 0, 0, 0.4);
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
                              (row.validated / row.detacted) * 100 >= 51 &&
                                (row.validated / row.detacted) * 100 <= 75
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
                              (row.validated / row.detacted) * 100 >= 76 &&
                                (row.validated / row.detacted) * 100 <= 100
                            "
                            :key="index + 'third'"
                            style="
                              text-align: center;
                              font-size: 10px;
                              background-color: rgb(0, 255, 0, 0.4);
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
        <v-card style="padding-left: 5%; padding-right: 5%; padding-bottom: 5%">
      <v-card-title class="text-center">
        <b>Cyber Score Summary.</b>
      </v-card-title>
      
        <v-row align-content="center" justify="center" align-md="center">
          <template v-for="(data, index2) in dataGetter">
          <v-col md="2" :key="index2">
           <v-card-subtitle style="color:black;text-align:center;text-decoration:bold;"> <b>{{ data.indicatorDetails.description }}</b> </v-card-subtitle> 
            <canvas
              :id="'canvasGuageInitial' + index2"
              style="margin-top: -25%"
              height="200"
              width="200"
            ></canvas>
          </v-col>
          
          </template>
          <v-col
              md="12"
              offset-md="0"
              style="margin-top: -2%; text-align: center; font-size: 10px"
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
        </v-row>
      
    </v-card>
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
  methods: {},
  created() {},
  mounted() {
    // ! looping through the charts.
    console.log("Start.");
    var total = 0;
    var validatedAdditionSummation = 0;
    var detectedAdditionSummation = 0;
    console.log(this.$store.state.NavigationModule.dataState);
    for (const key in this.$store.state.NavigationModule.dataState) {
      total = total + 1;
      console.log("This is the data looping " + key);
      console.log(this.$store.state.NavigationModule.dataState[key]);

      var validatedAddition = 0;
      var detectedAddition = 0;
      for (const key2 in this.$store.state.NavigationModule.dataState[key]
        .CVECThreatIndicators) {
        validatedAddition =
          validatedAddition +
          this.$store.state.NavigationModule.dataState[key]
            .CVECThreatIndicators[key2].validated;
        detectedAddition =
          detectedAddition +
          this.$store.state.NavigationModule.dataState[key]
            .CVECThreatIndicators[key2].detacted;
        // console.log("Detected "+ this.$store.state.NavigationModule.dataState[key].CVECThreatIndicators[key2].detacted );
        // console.log("Validated "+this.$store.state.NavigationModule.dataState[key].CVECThreatIndicators[key2].validated );
      }
      console.log("validatedAddition " + validatedAddition);
      console.log("detectedAddition " + detectedAddition);
      validatedAdditionSummation =
        validatedAdditionSummation + validatedAddition;
      detectedAdditionSummation = detectedAdditionSummation + detectedAddition;
      var valueToBeInPercentage = (validatedAddition / detectedAddition) * 100;
      var className = "canvasGuage" + key;
      var idName = "canvasGuageInitial" + key;
      console.log(className);
      var ctx = document.getElementById(className).getContext("2d");
      var ctxInitail = document.getElementById(idName).getContext("2d");
      var charts2 = new Chart2(ctxInitail, {
        type: "gauge",
        data: {
          datasets: [
            {
              value: valueToBeInPercentage,
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
      console.log(charts2);
      var charts = new Chart2(ctx, {
        type: "gauge",
        data: {
          datasets: [
            {
              value: valueToBeInPercentage,
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

      console.log(charts);
    }

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

    var totalValidationGuage =
      (validatedAdditionSummation / detectedAdditionSummation) * 100;

    console.log(chart3);
    var chart = new Chart2(ctx2, {
      type: "gauge",
      data: {
        datasets: [
          {
            value: totalValidationGuage,
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

    // ! looping for the guage charts.
  },

  name: "HelloWorld",

  data: () => ({}),
};
</script>
