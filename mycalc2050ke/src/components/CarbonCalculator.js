
// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const CarbonCalculator = () => {

  const [websocket, setWebsocket] = useState(null);
    const [electricityCurrentVal, setElectricityCurrentVal] = useState(0);
    const [hydrogenCurrentVal, setHydrogenCurrentVal] = useState(0);
    const [otherEnergyCurrentVal, setOtherEnergyCurrentVal] = useState(0);
    const [wasteManagementCurrentVal, setWasteManagementCurrentVal] = useState(0);
    const [agricultureCurrentVal, setAgricultureCurrentVal] = useState(0);
    const [industryCurrentVal, setIndustryCurrentVal] = useState(0);
    const [buildingResidentialCurrentVal, setBuildingResidentialCurrentVal] = useState(0);
    const [buildingNonResidentialCurrentVal, setBuildingNonResidentialCurrentVal] = useState(0);
    const [transportDomesticCurrentVal, setTransportDomesticCurrentVal] = useState(0);
    const [transportInternationalCurrentVal, setTransportInternationalCurrentVal] = useState(0);
    const [totalEmmissionsCurrentVal, setTotalEmmissionsCurrentVal] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);
    const [resultShow, setResultShow] = useState(0);

    useEffect(() => {
        const wsUrl = "wss://kcert.ilabafrica.ac.ke/_/ws/?s=429604ac2c1f3440be301977c504df08cefeb66b053ad6572b8e6108fbfc8870=ZXWN3HQNAOLDFZNWDKLAFUH2UONHYU24TYHRVFMIEZKPXFKO";

        const websocket = new WebSocket(wsUrl);
        const getInitValueWb = () => {
          // Implement logic for getInitValueWb
          console.log("Initial value from WebSocket fetched.");
      };
  
      const getValueWb = () => {
          // Implement logic for getValueWb
          console.log("Value from WebSocket fetched.");
      };

        websocket.onmessage = (event) => {
            console.log("Message received:", event.data);
            // Update state variables with received data
        };

        websocket.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };

        websocket.onclose = (event) => {
            if (event.wasClean) {
                console.log("WebSocket closed cleanly.");
            } else {
                console.error("WebSocket connection died.");
                // Reconnect logic if needed
            }
        };

        return () => {
            websocket.close();
        };
    }, []);

    const goToResults = () => {
      window.location.href =
      "results-page.html?" +
      "electricity_current_val=" +
      electricityCurrentVal +
      "&hydrogen_current_val =" +
      hydrogenCurrentVal +
      "&other_energy_current_val=" +
      otherEnergyCurrentVal +
      "&waste_management_current_val=" +
      wasteManagementCurrentVal +
      "&agriculture_current_val=" +
      agricultureCurrentVal +
      "&industry_current_val=" +
      industryCurrentVal +
      "&building_residential_current_val=" +
      buildingResidentialCurrentVal +
      "&building_non_residential_current_val=" +
      buildingNonResidentialCurrentVal +
      "&transport_domestic_current_val=" +
      transportDomesticCurrentVal +
      "&transport_international_current_val=" +
      transportInternationalCurrentVal +
      "&total_emmissions_current_val=" +
      totalEmmissionsCurrentVal +
      "&electricity_val=" +
      electricityCurrentVal +
      "&hydrogen_val=" +
      hydrogenCurrentVal +
      "&other_energy_val=" +
      otherEnergyCurrentVal +
      "&waste_management_val=" +
      wasteManagementCurrentVal +
      "&agriculture_val=" +
      agricultureCurrentVal +
      "&industry_val=" +
      industryCurrentVal +
      "&building_residential_val=" +
      buildingResidentialCurrentVal +
      "&building_non_residential_val=" +
      buildingNonResidentialCurrentVal +
      "&transport_domestic_val=" +
      transportDomesticCurrentVal +
      "&transport_international_val=" +
      transportInternationalCurrentVal +
      "&total_emmissions_val=" +
      totalEmmissionsCurrentVal;
  };


  const closeFloatingCard1 = () => {
    // Define logic to close floating card 1
    console.log('Closing Floating Card 1');
  };

  const closeForm = () => {
    // Define logic to close form
    console.log('Closing Form');
  };

  const closeFloatingCard2 = () => {
    // Define logic to close floating card 2
    console.log('Closing Floating Card 2');
  };

  const closeFloatingCard3 = () => {
    // Define logic to close floating card 3
    console.log('Closing Floating Card 3');
  };

  const closeFloatingCard4 = () => {
    // Define logic to close floating card 4
    console.log('Closing Floating Card 4');
  };
    return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="keywords" content="2050, calculator, kenya, My 2050 Calculator" />
  <meta
    name="description"
    content="Website to calculate to the total Kenyan Carbon Emission in the atmosphere depending on various factors"
  />
  <meta name="author" content="Martin Maina Mbote" />
  <title>My2050 Carbon Calculator</title>
  <link rel="icon" type="image/ico" href="Assets/SU_favicon.ico" />
  <link
    href="https://fonts.googleapis.com/css2?family=Helvetica:wght@500&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      html::-webkit-scrollbar {\n        width: 0.1vw;\n      }\n\n      #car1 {\n        animation-name: car-1;\n        animation-duration: 15s;\n        animation-iteration-count: infinite;\n        animation-fill-mode: forwards;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 5.3vw;\n        left: 35vw;\n        top: 30.1vw;\n      }\n\n      @keyframes car-1 {\n        0% {\n          top: 20.7vw;\n          left: 4.3vw;\n        }\n\n        55% {\n          top: 30.5vw;\n          left: 36.5vw;\n        }\n\n        100% {\n          top: 38vw;\n          left: 60vw;\n        }\n      }\n\n      #electric-white {\n        animation-name: car-1;\n        animation-duration: 15s;\n        animation-iteration-count: infinite;\n        animation-fill-mode: forwards;\n        transition: opacity 0.5s;\n        opacity: 0;\n        position: absolute;\n        width: 5.5vw;\n        left: 34.25vw;\n        top: 29.8vw;\n      }\n\n      @keyframes car-1 {\n        0% {\n          top: 20.4vw;\n          left: 3.55vw;\n        }\n\n        55% {\n          top: 30.2vw;\n          left: 35.75vw;\n        }\n\n        100% {\n          top: 37.7vw;\n          left: 59.25vw;\n        }\n      }\n\n      #blue-lorry {\n        animation-name: bluelorry;\n        animation-duration: 15s;\n        animation-iteration-count: infinite;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 11.5vw;\n        left: 6vw;\n        top: 20.15vw;\n        rotate: -0.6deg;\n      }\n\n      @keyframes bluelorry {\n        0% {\n          /*opacity: 0;*/\n          top: 20vw;\n          left: 6vw;\n        }\n\n        /*10%{\n                    opacity: 1;\n                }*/\n\n        50% {\n          left: 37.7vw;\n          top: 29.7vw;\n        }\n\n        100% {\n          left: 59vw;\n          top: 36.3vw;\n        }\n      }\n\n      #blue-lorry-electric {\n        animation-name: bluelorry-electric;\n        animation-duration: 15s;\n        animation-iteration-count: infinite;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 11.5vw;\n        rotate: -0.6deg;\n        opacity: 0;\n      }\n\n      @keyframes bluelorry-electric {\n        0% {\n          top: 20.5vw;\n          left: 6vw;\n        }\n\n        50% {\n          left: 37.1vw;\n          top: 29.8vw;\n        }\n\n        100% {\n          left: 59vw;\n          top: 36.3vw;\n        }\n      }\n\n      #red-lorry {\n        animation-name: redlorry;\n        animation-duration: 8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 9vw;\n      }\n\n      @keyframes redlorry {\n        0% {\n          left: 59vw;\n          top: 13.2vw;\n        }\n\n        100% {\n          left: 36vw;\n          top: 6vw;\n        }\n      }\n\n      #red-lorry-electric {\n        animation-name: redlorry;\n        animation-duration: 8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 8vw;\n        opacity: 0;\n      }\n\n      @keyframes redlorry {\n        0% {\n          left: 59vw;\n          top: 13.2vw;\n        }\n\n        100% {\n          left: 36vw;\n          top: 6vw;\n        }\n      }\n\n      #bus-right-corner {\n        animation-name: rightbus;\n        animation-duration: 18s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 9vw;\n      }\n\n      @keyframes rightbus {\n        0% {\n          left: 91vw;\n          top: 9.4vw;\n        }\n\n        100% {\n          top: 40vw;\n          left: 28vw;\n        }\n      }\n\n      #bus-right-corner-electric {\n        animation-name: rightbus;\n        animation-duration: 18s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 9vw;\n      }\n\n      @keyframes rightbus {\n        0% {\n          left: 91vw;\n          top: 9.4vw;\n        }\n\n        100% {\n          top: 40vw;\n          left: 28vw;\n        }\n      }\n\n      #parliament-parked-cars {\n        transition: opacity 1s, top 1s;\n        position: absolute;\n        width: 10vw;\n        left: 38vw;\n        top: 26.4vw;\n      }\n\n      #red-bus-on-highway {\n        animation-name: redbusonhighway;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 0.5s;\n        position: absolute;\n        z-index: 30;\n        width: 9vw;\n      }\n\n      @keyframes redbusonhighway {\n        0% {\n          top: -2.9vw;\n          left: 53.55vw;\n        }\n\n        100% {\n          left: -6vw;\n          top: 26vw;\n        }\n      }\n\n      #red-bus-on-highway1-electric1 {\n        animation-name: redbusonhighway;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 0.5s;\n        position: absolute;\n        z-index: 30;\n        width: 9vw;\n      }\n\n      @keyframes redbusonhighway {\n        0% {\n          top: -2.9vw;\n          left: 53.55vw;\n        }\n\n        100% {\n          left: -6vw;\n          top: 26vw;\n        }\n      }\n\n      #red-bus-on-highway1 {\n        animation-name: redbusonhighway1;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1s;\n        position: absolute;\n        z-index: 40;\n        width: 9vw;\n      }\n\n      @keyframes redbusonhighway1 {\n        0% {\n          top: -3vw;\n          left: 50vw;\n        }\n\n        100% {\n          top: 24.4vw;\n          left: -6.2vw;\n        }\n      }\n\n      #red-bus-on-highway1-electric {\n        animation-name: redbusonhighway1;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1s;\n        position: absolute;\n        z-index: 40;\n        width: 9vw;\n      }\n\n      @keyframes redbusonhighway1 {\n        0% {\n          top: -3vw;\n          left: 50vw;\n        }\n\n        100% {\n          top: 24.4vw;\n          left: -6.2vw;\n        }\n      }\n\n      #red-car-right-side {\n        animation-name: rightcar;\n        animation-duration: 18s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 0.9s;\n        position: absolute;\n        width: 6.15vw;\n      }\n\n      @keyframes rightcar {\n        0% {\n          left: 93.5vw;\n          top: 9.5vw;\n        }\n\n        100% {\n          top: 39vw;\n          left: 33vw;\n        }\n      }\n\n      #red-car-right-side-electric {\n        animation-name: rightcarElectric;\n        animation-duration: 18s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 0.9s;\n        position: absolute;\n        opacity: 0;\n        width: 5vw;\n      }\n\n      @keyframes rightcarElectric {\n        0% {\n          left: 95.2vw;\n          top: 9.5vw;\n        }\n\n        100% {\n          top: 39vw;\n          left: 34.2vw;\n        }\n      }\n\n      #tram {\n        animation-name: tramcar;\n        animation-duration: 18s;\n        animation-iteration-count: infinite;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 16vw;\n        z-index: 10;\n      }\n\n      @keyframes tramcar {\n        0% {\n          left: 54.3vw;\n          top: 17.9vw;\n        }\n\n        50% {\n          left: 29vw;\n          top: 10vw;\n        }\n\n        100% {\n          left: 54.3vw;\n          top: 17.9vw;\n        }\n      }\n\n      #greycar-next-kcc {\n        animation-name: greycar1;\n        animation-duration: 8s;\n        animation-iteration-count: infinite;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 5.3vw;\n        z-index: 15;\n      }\n\n      @keyframes greycar1 {\n        0% {\n          left: 54vw;\n          top: 21vw;\n        }\n\n        100% {\n          left: 37vw;\n          top: 15.5vw;\n        }\n      }\n\n      #electric-blue {\n        animation-name: greycar1;\n        animation-duration: 8s;\n        animation-iteration-count: infinite;\n        transition: opacity 0.5s;\n        opacity: 0;\n        position: absolute;\n        width: 5.3vw;\n        z-index: 15;\n      }\n\n      @keyframes greycar1 {\n        0% {\n          left: 54vw;\n          top: 21vw;\n        }\n\n        100% {\n          left: 37vw;\n          top: 15.5vw;\n        }\n      }\n\n      #second-greycar-next-kcc {\n        animation-name: secondgreycar1;\n        animation-duration: 4s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        z-index: 10;\n        width: 5.6vw;\n      }\n\n      @keyframes secondgreycar1 {\n        0% {\n          left: 37.5vw;\n          top: 14.5vw;\n        }\n\n        100% {\n          left: 51.5vw;\n          top: 19vw;\n        }\n      }\n\n      #second-greycar-next-kcc-electric {\n        animation-name: secondgreycar1;\n        animation-duration: 4s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        z-index: 10;\n        width: 5.6vw;\n        opacity: 0;\n      }\n\n      @keyframes secondgreycar1 {\n        0% {\n          left: 37.5vw;\n          top: 14.5vw;\n        }\n\n        100% {\n          left: 51.5vw;\n          top: 19vw;\n        }\n      }\n\n      #red-car-on-highway {\n        animation-name: redcarhighway;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        z-index: 25;\n        width: 6.15vw;\n      }\n\n      @keyframes redcarhighway {\n        0% {\n          left: 53.7vw;\n          top: -1.5vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 26.5vw;\n        }\n      }\n\n      #red-car-on-highway-2 {\n        animation-name: redcarhighway2;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 25;\n      }\n\n      @keyframes redcarhighway2 {\n        0% {\n          left: 50.9vw;\n          top: -1.8vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 24.8vw;\n        }\n      }\n\n      #red-car-on-highway-3 {\n        animation-name: redcarhighway3;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 2s;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 25;\n      }\n\n      @keyframes redcarhighway3 {\n        0% {\n          left: 50.9vw;\n          top: -1.8vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 24.8vw;\n        }\n      }\n\n      #red-car-on-highway-4 {\n        animation-name: redcarhighway4;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 4s;\n        position: absolute;\n        z-index: 25;\n        width: 6.15vw;\n      }\n\n      @keyframes redcarhighway4 {\n        0% {\n          left: 53.7vw;\n          top: -1.5vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 26.5vw;\n        }\n      }\n\n      #black-car-on-highway-cover-up-right-lane {\n        animation-name: redcarhighway;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        position: absolute;\n        z-index: 25;\n        width: 6.15vw;\n      }\n\n      @keyframes redcarhighway {\n        0% {\n          left: 53.7vw;\n          top: -1.5vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 26.5vw;\n        }\n      }\n\n      #black-car-on-highway-cover-up-right-lane1 {\n        animation-name: redcarhighway2;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 25;\n      }\n\n      @keyframes redcarhighway2 {\n        0% {\n          left: 50.9vw;\n          top: -1.8vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 24.8vw;\n        }\n      }\n\n      #black-car-on-highway-cover-up-right-lane2 {\n        animation-name: redcarhighway3;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        animation-delay: 2s;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 25;\n      }\n\n      @keyframes redcarhighway3 {\n        0% {\n          left: 50.9vw;\n          top: -1.8vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 24.8vw;\n        }\n      }\n\n      #black-car-on-highway-cover-up-right-lane3 {\n        animation-name: redcarhighway4;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        animation-delay: 4s;\n        position: absolute;\n        z-index: 25;\n        width: 6.15vw;\n      }\n\n      @keyframes redcarhighway4 {\n        0% {\n          left: 53.7vw;\n          top: -1.5vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 26.5vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up-right-lane {\n        animation-name: redcarhighway;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        position: absolute;\n        z-index: 25;\n        width: 6.15vw;\n      }\n\n      @keyframes redcarhighway {\n        0% {\n          left: 53.7vw;\n          top: -1.5vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 26.5vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up-right-lane1 {\n        animation-name: redcarhighway2;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 25;\n      }\n\n      @keyframes redcarhighway2 {\n        0% {\n          left: 50.9vw;\n          top: -1.8vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 24.8vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up-right-lane2 {\n        animation-name: redcarhighway3;\n        animation-duration: 7s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        animation-delay: 2s;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 25;\n      }\n\n      @keyframes redcarhighway3 {\n        0% {\n          left: 50.9vw;\n          top: -1.8vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 24.8vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up-right-lane3 {\n        animation-name: redcarhighway4;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        opacity: 0;\n        animation-delay: 4s;\n        position: absolute;\n        z-index: 25;\n        width: 6.15vw;\n      }\n\n      @keyframes redcarhighway4 {\n        0% {\n          left: 53.7vw;\n          top: -1.5vw;\n        }\n\n        100% {\n          left: -4vw;\n          top: 26.5vw;\n        }\n      }\n\n      #left-train {\n        animation-name: lefttrain;\n        animation-duration: 17s;\n        animation-iteration-count: infinite;\n        transition: opacity 0.8s;\n        z-index: 40;\n        position: absolute;\n        width: 40vw;\n      }\n\n      @keyframes lefttrain {\n        0% {\n          left: -36vw;\n          top: 13vw;\n        }\n\n        50% {\n          left: -10.9vw;\n          top: 1vw;\n        }\n\n        100% {\n          left: -36vw;\n          top: 13vw;\n        }\n      }\n\n      #right-train {\n        animation-name: righttrain;\n        animation-duration: 17s;\n        animation-iteration-count: infinite;\n        transition: opacity 0.5s;\n        position: absolute;\n        z-index: 30;\n        width: 40vw;\n      }\n\n      @keyframes righttrain {\n        0% {\n          left: 22vw;\n          top: -11.5vw;\n        }\n\n        50% {\n          left: -10vw;\n          top: 4vw;\n        }\n\n        100% {\n          left: -31vw;\n          top: 14.1vw;\n        }\n      }\n\n      #plane {\n        animation-name: KQplane;\n        animation-duration: 24s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 22.5vw;\n        z-index: 50;\n      }\n\n      @keyframes KQplane {\n        0% {\n          /*opacity: 0;*/\n          left: -16vw;\n          top: 2vw;\n        }\n\n        /*3%{\n                    opacity: 1;\n                }*/\n\n        50% {\n          left: 77vw;\n          top: 35vw;\n        }\n\n        100% {\n          left: 77vw;\n          top: 35vw;\n        }\n      }\n\n      #blue-bus-on-highway {\n        animation-name: highwaybus;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        z-index: 40;\n        width: 9vw;\n      }\n\n      @keyframes highwaybus {\n        0% {\n          top: 20.6vw;\n          left: -6.2vw;\n        }\n\n        100% {\n          top: -3vw;\n          left: 42.5vw;\n        }\n      }\n\n      #results-button-style-data {\n        position: absolute;\n        width: 6.5vw;\n        height: 4vw;\n        left: 91vw;\n        top: 35.5vw;\n        background-color: #f0a800;\n        border-radius: 4%;\n        border-style: solid;\n        border-color: white;\n        border-width: 0.15vw;\n      }\n\n      #results-button-text-style {\n        position: absolute;\n        width: 3.1vw;\n        top: 36vw;\n        left: 92.7vw;\n        font-family: "Helvetica", sans-serif;\n        font-size: 0.8vw;\n        font-weight: normal;\n        text-align: center;\n        color: #ffffff;\n      }\n\n      #greenLorry {\n        animation-name: greenlorry;\n        animation-duration: 8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 8.5vw;\n      }\n\n      @keyframes greenlorry {\n        0% {\n          left: 53vw;\n          top: 36.3vw;\n        }\n\n        100% {\n          left: 0;\n          top: 20.3vw;\n        }\n      }\n\n      #green-lorry-electric {\n        animation-name: greenlorry;\n        animation-duration: 8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        width: 8.5vw;\n        opacity: 0;\n      }\n\n      @keyframes greenlorry {\n        0% {\n          left: 53vw;\n          top: 36vw;\n        }\n\n        100% {\n          left: 0;\n          top: 20vw;\n        }\n      }\n\n      #black-car-on-highway {\n        animation-name: blackcar;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 0.8s;\n        position: absolute;\n        z-index: 40;\n        width: 6.15vw;\n      }\n\n      @keyframes blackcar {\n        0% {\n          top: 21vw;\n          left: -4vw;\n        }\n\n        100% {\n          left: 43.5vw;\n          top: -2vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up {\n        animation-name: blackcar;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 0.8s;\n        position: absolute;\n        opacity: 0;\n        z-index: 40;\n        width: 6.15vw;\n      }\n\n      @keyframes blackcar {\n        0% {\n          top: 21vw;\n          left: -4vw;\n        }\n\n        100% {\n          left: 43.5vw;\n          top: -2vw;\n        }\n      }\n\n      #black-car-on-highway1 {\n        animation-name: blackcar1;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 2s;\n        position: absolute;\n        z-index: 40;\n        width: 6.15vw;\n      }\n\n      @keyframes blackcar1 {\n        0% {\n          top: 21vw;\n          left: -4vw;\n        }\n\n        100% {\n          left: 43.5vw;\n          top: -2vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up1 {\n        animation-name: blackcar1;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 2s;\n        position: absolute;\n        opacity: 0;\n        z-index: 40;\n        width: 6.15vw;\n      }\n\n      @keyframes blackcar1 {\n        0% {\n          top: 21vw;\n          left: -4vw;\n        }\n\n        100% {\n          left: 43.5vw;\n          top: -2vw;\n        }\n      }\n\n      #green-small-car-on-highway {\n        animation-name: greenhighwaycar;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1.3s;\n        position: absolute;\n        z-index: 40;\n        width: 6.15vw;\n      }\n\n      @keyframes greenhighwaycar {\n        0% {\n          left: -4vw;\n          top: 21.1vw;\n        }\n\n        100% {\n          left: 43.4vw;\n          top: -1.8vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up3 {\n        animation-name: greenhighwaycar;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1.3s;\n        position: absolute;\n        z-index: 40;\n        width: 6.15vw;\n        opacity: 0;\n      }\n\n      @keyframes greenhighwaycar {\n        0% {\n          left: -4vw;\n          top: 21.1vw;\n        }\n\n        100% {\n          left: 43.4vw;\n          top: -1.8vw;\n        }\n      }\n\n      #green-small-car-on-highway1 {\n        animation-name: greenhighwaycar1;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1.3s;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 40;\n      }\n\n      @keyframes greenhighwaycar1 {\n        0% {\n          left: -3.6vw;\n          top: 22.6vw;\n        }\n\n        100% {\n          left: 47.1vw;\n          top: -2vw;\n        }\n      }\n\n      #green-small-car-on-highway-cover-up4 {\n        animation-name: greenhighwaycar1;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1.3s;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 40;\n        opacity: 0;\n      }\n\n      @keyframes greenhighwaycar1 {\n        0% {\n          left: -3.6vw;\n          top: 22.6vw;\n        }\n\n        100% {\n          left: 47.1vw;\n          top: -2vw;\n        }\n      }\n\n      #black-car-on-highway-cover-up {\n        animation-name: greenhighwaycar1;\n        animation-duration: 6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1.3s;\n        position: absolute;\n        width: 6.15vw;\n        z-index: 40;\n        opacity: 0;\n      }\n\n      @keyframes greenhighwaycar1 {\n        0% {\n          left: -3.6vw;\n          top: 22.6vw;\n        }\n\n        100% {\n          left: 47.1vw;\n          top: -2vw;\n        }\n      }\n\n      #black-car-on-highway-cover-up1 {\n        animation-name: greenhighwaycar;\n        animation-duration: 5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        animation-delay: 1.3s;\n        position: absolute;\n        z-index: 40;\n        width: 6.15vw;\n        opacity: 0;\n      }\n\n      @keyframes greenhighwaycar {\n        0% {\n          left: -4vw;\n          top: 21.1vw;\n        }\n\n        100% {\n          left: 43.4vw;\n          top: -1.8vw;\n        }\n      }\n\n      #plane-above-station {\n        animation-name: plane-abv-station;\n        animation-duration: 8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 0.5s;\n        position: absolute;\n        z-index: 110;\n        width: 24vw;\n      }\n\n      @keyframes plane-abv-station {\n        0% {\n          left: 16vw;\n          top: -7vw;\n        }\n\n        50% {\n          left: -19vw;\n          top: 7vw;\n        }\n\n        100% {\n          left: -19vw;\n          top: 7vw;\n        }\n      }\n\n      #smoke-level-1-1 {\n        animation-name: smoke-up;\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-out;\n        transition: display 0.5s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: white;\n        z-index: 45;\n      }\n\n      @keyframes smoke-up {\n        0% {\n          width: 0.3vw;\n          height: 0.3vw;\n          top: 24vw;\n          left: 26.45vw;\n          opacity: 0.8;\n        }\n\n        100% {\n          width: 8vw;\n          height: 8vw;\n          top: 7vw;\n          left: 23vw;\n          opacity: 0;\n        }\n      }\n\n      #smoke-level-1-2 {\n        animation-name: smoke-up-1;\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-out;\n        transition: display 0.5s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: white;\n        z-index: 45;\n      }\n\n      @keyframes smoke-up-1 {\n        0% {\n          width: 0.3vw;\n          height: 0.3vw;\n          top: 24vw;\n          left: 26.45vw;\n          opacity: 0.8;\n        }\n\n        100% {\n          width: 9vw;\n          height: 9vw;\n          top: 7vw;\n          left: 26.45vw;\n          opacity: 0;\n        }\n      }\n\n      #smoke-level-1-3 {\n        animation-name: smoke-up-2;\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-out;\n        transition: display 0.5s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: white;\n        z-index: 45;\n      }\n\n      @keyframes smoke-up-2 {\n        0% {\n          width: 0.3vw;\n          height: 0.3vw;\n          top: 24vw;\n          left: 26.45vw;\n          opacity: 0.8;\n        }\n\n        100% {\n          width: 6vw;\n          height: 6vw;\n          top: 6vw;\n          left: 23vw;\n          opacity: 0;\n        }\n      }\n\n      #smoke-level-1-1-chimney-2 {\n        animation-name: smoke-up-2-chimney;\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-out;\n        transition: display 0.5s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: white;\n        z-index: 45;\n      }\n\n      @keyframes smoke-up-2-chimney {\n        0% {\n          width: 0.3vw;\n          height: 0.3vw;\n          top: 24vw;\n          left: 25.15vw;\n          opacity: 0.8;\n        }\n\n        100% {\n          width: 6vw;\n          height: 6vw;\n          top: 6vw;\n          left: 23vw;\n          opacity: 0;\n        }\n      }\n\n      #smoke-level-1-1-chimney-3 {\n        animation-name: smoke-up-3-chimney;\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-out;\n        transition: display 0.5s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: white;\n        z-index: 45;\n      }\n\n      @keyframes smoke-up-3-chimney {\n        0% {\n          width: 0.3vw;\n          height: 0.3vw;\n          top: 23.7vw;\n          left: 23.85vw;\n          opacity: 0.8;\n        }\n\n        100% {\n          width: 6vw;\n          height: 6vw;\n          top: 7vw;\n          left: 21vw;\n          opacity: 0;\n        }\n      }\n\n      #power-bubble-lvl-1 {\n        animation-name: power-rolling;\n        animation-duration: 2.8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        transition: opacity 1s;\n      }\n\n      #power-bubble-lvl-2 {\n        animation-name: power-rolling;\n        animation-duration: 2.8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.15s;\n        transition: opacity 1s;\n      }\n\n      #power-bubble-lvl-3 {\n        animation-name: power-rolling;\n        animation-duration: 2.8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.3s;\n        transition: opacity 1s;\n      }\n\n      #power-bubble-lvl-4 {\n        animation-name: power-rolling;\n        animation-duration: 2.8s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.45s;\n        transition: opacity 1s;\n      }\n\n      @keyframes power-rolling {\n        0% {\n          left: 95vw;\n          top: 11.45vw;\n        }\n\n        90% {\n          width: 0.6vw;\n          height: 0.6vw;\n        }\n\n        100% {\n          left: 80.75vw;\n          top: 1.65vw;\n          width: 0vw;\n          height: 0vw;\n        }\n      }\n\n      #geo-power-bubble-lvl-1 {\n        animation-name: geo-power-rolling;\n        animation-duration: 2.2s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        transition: opacity 1s;\n        z-index: 20;\n      }\n\n      #geo-power-bubble-lvl-2 {\n        animation-name: geo-power-rolling;\n        animation-duration: 2.2s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.15s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        transition: opacity 1s;\n        z-index: 20;\n      }\n\n      #geo-power-bubble-lvl-3 {\n        animation-name: geo-power-rolling;\n        animation-duration: 2.2s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.3s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        transition: opacity 1s;\n        z-index: 20;\n      }\n\n      #geo-power-bubble-lvl-4 {\n        animation-name: geo-power-rolling;\n        animation-duration: 2.2s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.45s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        transition: opacity 1s;\n        z-index: 20;\n      }\n\n      @keyframes geo-power-rolling {\n        0% {\n          left: 72.6vw;\n          top: 12.5vw;\n        }\n\n        90% {\n          width: 0.6vw;\n          height: 0.6vw;\n        }\n\n        100% {\n          left: 80.75vw;\n          top: 1.75vw;\n          width: 0vw;\n          height: 0vw;\n        }\n      }\n\n      #nuclear-power-bubble-lvl-1 {\n        animation-name: nuclear-power-rolling;\n        animation-duration: 2.5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        z-index: 20;\n      }\n\n      #nuclear-power-bubble-lvl-2 {\n        animation-name: nuclear-power-rolling;\n        animation-duration: 2.5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.15s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        z-index: 20;\n      }\n\n      #nuclear-power-bubble-lvl-3 {\n        animation-name: nuclear-power-rolling;\n        animation-duration: 2.5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.3s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        z-index: 20;\n      }\n\n      #nuclear-power-bubble-lvl-4 {\n        animation-name: nuclear-power-rolling;\n        animation-duration: 2.5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.45s;\n        position: absolute;\n        border-radius: 50%;\n        background-color: lightskyblue;\n        z-index: 20;\n      }\n\n      @keyframes nuclear-power-rolling {\n        0% {\n          left: 58vw;\n          top: 1.43vw;\n        }\n\n        90% {\n          width: 0.6vw;\n          height: 0.6vw;\n        }\n\n        100% {\n          left: 81.5vw;\n          top: 1.95vw;\n          width: 0vw;\n          height: 0vw;\n        }\n      }\n\n      #turbine-blades {\n        animation-name: turbine-rolling;\n        animation-duration: 2.5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n      }\n\n      @keyframes turbine-rolling {\n        0% {\n          transform: rotate(0deg);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n\n      #geothermal-smoke {\n        animation-name: geo-smoke;\n        animation-duration: 4.5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n      }\n\n      @keyframes geo-smoke {\n        0% {\n          top: 1vw;\n        }\n\n        50% {\n          opacity: 0.5;\n        }\n\n        100% {\n          top: -6vw;\n          opacity: 0;\n        }\n      }\n\n      #nuclear-smoke {\n        animation-name: nuclar-smoke;\n        animation-duration: 4s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 0.7s;\n      }\n\n      @keyframes nuclar-smoke {\n        0% {\n          top: -1vw;\n        }\n\n        100% {\n          top: -5vw;\n          opacity: 0;\n        }\n      }\n\n      #nuclear-lvl-1 {\n        transition: opacity 1s;\n      }\n\n      #nuclear-lvl-2 {\n        transition: opacity 1s;\n      }\n\n      #nuclear-lvl-3 {\n        transition: opacity 1s;\n      }\n\n      #nuclear-lvl-4 {\n        transition: opacity 1s;\n      }\n\n      #geo-lvl-4 {\n        transition: opacity 1s;\n      }\n\n      #geo-lvl-3 {\n        transition: opacity 1s;\n      }\n\n      #geo-lvl-2 {\n        transition: opacity 1s;\n      }\n\n      #geo-lvl-1 {\n        transition: opacity 1s;\n      }\n\n      #hep-lvl-4 {\n        transition: opacity 1s;\n      }\n\n      #hep-lvl-3 {\n        transition: opacity 1s;\n      }\n\n      #hep-lvl-2 {\n        transition: opacity 1s;\n      }\n\n      #turbine-1 {\n        transition: opacity 1s;\n      }\n\n      #turbine-2 {\n        transition: opacity 1s;\n      }\n\n      #turbine-3 {\n        transition: opacity 1s;\n      }\n\n      #turbine-4 {\n        transition: opacity 1s;\n      }\n\n      #geo-powerline {\n        transition: opacity 1s;\n      }\n\n      #nuc-powerline {\n        transition: opacity 1s;\n      }\n\n      #hep-powerline {\n        transition: opacity 1s;\n      }\n\n      #house-appliances-lv1 {\n        transition: opacity 0.5s;\n      }\n\n      #house-appliances-lv2 {\n        transition: opacity 0.5s;\n      }\n\n      #house-appliances-lv3 {\n        transition: opacity 0.5s;\n      }\n\n      #house-appliances-lv4 {\n        transition: opacity 0.5s;\n      }\n\n      .slider {\n        -webkit-appearance: none;\n        width: 6.65vw;\n        height: 0.9vw;\n        border-radius: 0.25vw;\n        background: #ffffff;\n        cursor: pointer;\n      }\n\n      .slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 1.55vw;\n        height: 1.55vw;\n        border-radius: 50%;\n        background: #f0a800;\n        border: 0.1vw solid white;\n        cursor: pointer;\n      }\n\n      .slider::-moz-range-thumb {\n        width: 1.55vw;\n        height: 1.55vw;\n        border-radius: 50%;\n        background: #f0a800;\n        cursor: pointer;\n      }\n    '
    }}
  />
  <div id="animation">
    <div id="background-image">
      <img
        src="Assets/Background/background-update-october.webp"
        style={{
          position: "absolute",
          width: "100vw",
          left: "0vw",
          top: "0vw",
          zIndex: 0
        }}
      />
    </div>
    <div id="vehicles">
      <img src="Assets/Car1.webp" id="car1" />
      <img src="Assets/Car1.webp" id="greycar-next-kcc" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-south-east.webp"
        id="electric-white"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-north-west.webp"
        id="electric-blue"
      />
      <img src="Assets/vehicles/Cars/Car11.webp" id="second-greycar-next-kcc" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-south-east.webp"
        id="second-greycar-next-kcc-electric"
      />
      <img
        src="Assets/vehicles/Cars/parked-cars.webp"
        id="parliament-parked-cars"
      />
      <img src="Assets/blue-lorry.webp" id="blue-lorry" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-lorry-1-south-east.webp"
        id="blue-lorry-electric"
      />
      <img src="Assets/red-lorry.webp" id="red-lorry" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-lorry-1-north-west.webp"
        id="red-lorry-electric"
      />
      <img src="Assets/bus.webp" id="bus-right-corner" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-bus-south-west.webp"
        id="bus-right-corner-electric"
      />
      <img src="Assets/bus.webp" id="red-bus-on-highway1" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-bus-south-west.webp"
        id="red-bus-on-highway1-electric"
      />
      <img src="Assets/bus.webp" id="red-bus-on-highway" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-bus-south-west.webp"
        id="red-bus-on-highway1-electric1"
      />
      <img src="Assets/Car4.webp" id="red-car-right-side" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-south-west.webp"
        id="red-car-right-side-electric"
      />
      <img src="Assets/Car4.webp" id="red-car-on-highway" />
      <img src="Assets/Car4.webp" id="red-car-on-highway-2" />
      <img src="Assets/Car4.webp" id="red-car-on-highway-3" />
      <img src="Assets/Car4.webp" id="red-car-on-highway-4" />
      <img src="Assets/Train1.webp" id="tram" />
      <img src="Assets/Train2.webp" id="left-train" />
      <img src="Assets/Train4.webp" id="right-train" />
      <img src="Assets/KQ_Plane.webp" id="plane" />
      <img src="Assets/travel-bus.webp" id="blue-bus-on-highway" />
      {/* <img src="Assets/vehicles/Aircrafts/helicopter.webm" id="choppa"
          style="position: absolute; left: 0vw; top: 0; width: 100vw; z-index: 50;"> */}
      <img src="Assets/vehicles/Cars/green-lorry.webp" id="greenLorry" />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-lorry-2-north-west.webp"
        id="green-lorry-electric"
      />
      <img
        src="Assets/vehicles/Cars/black-car.webp"
        id="black-car-on-highway"
      />
      <img
        src="Assets/vehicles/Cars/black-car.webp"
        id="black-car-on-highway1"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-north-east.webp"
        id="green-small-car-on-highway-cover-up"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-north-east.webp"
        id="green-small-car-on-highway-cover-up1"
      />
      <img
        src="Assets/vehicles/Cars/green-small-car.webp"
        id="green-small-car-on-highway-cover-up-right-lane"
      />
      <img
        src="Assets/vehicles/Cars/green-small-car.webp"
        id="green-small-car-on-highway-cover-up-right-lane1"
      />
      <img
        src="Assets/vehicles/Cars/green-small-car.webp"
        id="green-small-car-on-highway-cover-up-right-lane2"
      />
      <img
        src="Assets/vehicles/Cars/green-small-car.webp"
        id="green-small-car-on-highway-cover-up-right-lane3"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-north-east.webp"
        id="black-car-on-highway-cover-up"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-north-east.webp"
        id="black-car-on-highway-cover-up1"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-south-west.webp"
        id="black-car-on-highway-cover-up-right-lane"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-south-west.webp"
        id="black-car-on-highway-cover-up-right-lane1"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-south-west.webp"
        id="black-car-on-highway-cover-up-right-lane2"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-south-west.webp"
        id="black-car-on-highway-cover-up-right-lane3"
      />
      <img
        src="Assets/vehicles/Cars/green-small-car.webp"
        id="green-small-car-on-highway"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-north-east.webp"
        id="green-small-car-on-highway-cover-up3"
      />
      <img
        src="Assets/vehicles/Cars/green-small-car.webp"
        id="green-small-car-on-highway1"
      />
      <img
        src="Assets/vehicles/Cars/electric-cars/electric-car-1-north-east.webp"
        id="green-small-car-on-highway-cover-up4"
      />
      <img
        src="Assets/vehicles/Aircrafts/KQ_PlaneFlip.webp"
        id="plane-above-station"
      />
    </div>
    <div id="buildings">
      <img
        src="Assets/new/Assets_KCert(ZIP)/green-building.webp"
        style={{
          position: "absolute",
          left: "3.4vw",
          top: "0.7vw",
          width: "95vw",
          zIndex: 0
        }}
      />
      <img
        src="Assets/factory-building.webp"
        style={{
          position: "absolute",
          left: "11.6vw",
          width: "20vw",
          top: "23vw",
          zIndex: 10
        }}
      />
      <img
        src="Assets/Background/overlays/expressway-overlay.webp"
        style={{
          position: "absolute",
          left: "0vw",
          top: 0,
          width: "100vw",
          zIndex: 20
        }}
      />
      <img
        src="Assets/small-blue-building.webp"
        style={{
          position: "absolute",
          left: "51vw",
          width: "7vw",
          top: "15.5vw",
          zIndex: 20
        }}
      />
      <img
        src="Assets/Buildings-images/Parliament.webp"
        style={{
          position: "absolute",
          left: "2.1vw",
          top: "0.8vw",
          width: "95vw",
          zIndex: 45
        }}
      />
      <img
        src="Assets/Buildings-images/KICC.webp"
        style={{
          position: "absolute",
          left: "0vw",
          top: 0,
          width: "100vw",
          zIndex: 45
        }}
      />
      <img
        src="Assets/Background/overlays/railwaystation-right-shade.webp"
        style={{
          position: "absolute",
          width: "95vw",
          left: "-1vw",
          zIndex: 40
        }}
      />
      <img
        src="Assets/Buildings-images/foreground-building-update.webp"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45
        }}
      />
      <img
        src="Assets/Buildings-images/HouseAppliancesLv1.webp"
        id="house-appliances-lv1"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45
        }}
      />
      <img
        src="Assets/Buildings-images/HouseAppliancesLv2.webp"
        id="house-appliances-lv2"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45
        }}
      />
      <img
        src="Assets/Buildings-images/HouseAppliancesLv3.webp"
        id="house-appliances-lv3"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45
        }}
      />
      <img
        src="Assets/Buildings-images/HouseAppliancesLv4.webp"
        id="house-appliances-lv4"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45
        }}
      />
    </div>
    <div id="charging-station-parking-section">
      <div>
        <img
          src="Assets/vehicles/Cars/electric-cars/charging-station/level-2-charging-station.webp"
          id="charging-station-level-2"
          style={{
            position: "absolute",
            width: "88vw",
            left: "5.5vw",
            top: "1.8vw",
            transition: "opacity 0.5s"
          }}
        />
        <img
          src="Assets/vehicles/Cars/electric-cars/charging-station/level-3-charging-station.webp"
          id="charging-station-level-3"
          style={{
            position: "absolute",
            width: "88vw",
            left: "5.5vw",
            top: "1.8vw",
            transition: "opacity 0.5s"
          }}
        />
        <img
          src="Assets/vehicles/Cars/electric-cars/charging-station/level-4-charging-station.webp"
          id="charging-station-level-4"
          style={{
            position: "absolute",
            width: "88vw",
            left: "5.5vw",
            top: "1.8vw",
            transition: "opacity 0.5s"
          }}
        />
      </div>
    </div>
    <div
      id="solar-panels-script-id"
      style={{ position: "absolute", zIndex: 45 }}
    >
      <div id="parliament-solar-panels" style={{ transition: "opacity 0.5s" }}>
        <div id="first-pair">
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "32.8vw",
              top: "21.6vw"
            }}
          />
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "33.65vw",
              top: "21.88vw"
            }}
          />
        </div>
        <div id="second-pair">
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "35.5vw",
              top: "22.5vw"
            }}
          />
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "36.3vw",
              top: "22.75vw"
            }}
          />
        </div>
        <div id="third-pair">
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "38.1vw",
              top: "23.35vw"
            }}
          />
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "38.9vw",
              top: "23.64vw"
            }}
          />
        </div>
        <div id="fourth-pair">
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "36.5vw",
              top: "24.2vw"
            }}
          />
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2vw",
              left: "37.3vw",
              top: "24.5vw"
            }}
          />
        </div>
      </div>
      <div
        id="green-building-solar-panels"
        style={{ transition: "opacity 0.5s" }}
      >
        <img
          src="Assets/Background/overlays/solar-panel.webp"
          style={{
            position: "absolute",
            width: "2vw",
            left: "61.8vw",
            top: "10.4vw"
          }}
        />
        <img
          src="Assets/Background/overlays/solar-panel.webp"
          style={{
            position: "absolute",
            width: "2vw",
            left: "62.7vw",
            top: "10.7vw"
          }}
        />
        <img
          src="Assets/Background/overlays/solar-panel.webp"
          style={{
            position: "absolute",
            width: "2vw",
            left: "63.6vw",
            top: "11vw"
          }}
        />
        {/* 0.9 0.3 */}
        <img
          src="Assets/Background/overlays/solar-panel.webp"
          style={{
            position: "absolute",
            width: "2vw",
            left: "64.5vw",
            top: "11.3vw"
          }}
        />
      </div>
      <div id="farm-house-solar-panels" style={{ transition: "opacity 0.5s" }}>
        <img
          src="Assets/Background/overlays/solar-panel.webp"
          style={{
            position: "absolute",
            width: "2vw",
            left: "84vw",
            top: "9.5vw"
          }}
        />
      </div>
      <div
        id="foreground-building-solar-panels"
        style={{ transition: "opacity 0.5s" }}
      >
        <div id="foreground-building-first-pair">
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2.5vw",
              left: "52.1vw",
              top: "25.2vw"
            }}
          />
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2.5vw",
              left: "53vw",
              top: "25.5vw"
            }}
          />
        </div>
        <div id="foreground-building-second-pair">
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2.5vw",
              left: "47.65vw",
              top: "23.9vw"
            }}
          />
          <img
            src="Assets/Background/overlays/solar-panel.webp"
            style={{
              position: "absolute",
              width: "2.5vw",
              left: "48.6vw",
              top: "24.2vw"
            }}
          />
        </div>
      </div>
    </div>
    <div id="smoke-effect">
      <div id="smoke-level-1">
        <div id="chimney-1">
          <div id="smoke-level-1-1" />
          <div id="smoke-level-1-2" />
          <div id="smoke-level-1-3" />
        </div>
        <div id="chimney-2">
          <div id="smoke-level-1-1-chimney-2" />
        </div>
        <div id="chimney-3">
          <div id="smoke-level-1-1-chimney-3" />
        </div>
      </div>
    </div>
    <div id="building-insulation">
      <img
        src="Assets/Background/overlays/insulators-lv1.webp"
        id="insulatorlv1"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45,
          transition: "opacity 1s, top 1s"
        }}
      />
      <img
        src="Assets/Background/overlays/insulators-lv2.webp"
        id="insulatorlv2"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45,
          transition: "opacity 1s, top 1s"
        }}
      />
      <img
        src="Assets/Background/overlays/insulators-lv3.webp"
        id="insulatorlv3"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45,
          transition: "opacity 1s, top 1s"
        }}
      />
      <img
        src="Assets/Background/overlays/insulators-lv4.webp"
        id="insulatorlv4"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.2vw",
          zIndex: 45,
          transition: "opacity 1s, top 1s"
        }}
      />
    </div>
    <div id="pipes-overlay">
      <img
        src="Assets/Background/overlays/pipes-level-2.webp"
        id="pipe-level-2"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.55vw",
          transition: "opacity 1s, top 1s"
        }}
      />
      <img
        src="Assets/Background/overlays/pipes-level-3.webp"
        id="pipe-level-3"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0.55vw",
          transition: "opacity 1s, top 1s"
        }}
      />
      {/* <img src="Assets/Background/overlays/pipes-level-4.webp" id="pipe-level-4"
          style="position: absolute; width: 99vw; top: 0.55vw; transition: opacity 1s, top 1s;"> */}
    </div>
    <div id="wind-turbines-static">
      <div id="wind-turbine-pair-1" style={{ transition: "opacity 0.5s" }}>
        <img
          src="Assets/Buildings-images/wind-turbine-pole.webp"
          style={{
            position: "absolute",
            width: "17vw",
            left: "-0.05vw",
            top: "-1.3vw"
          }}
        />
        <img
          src="Assets/Buildings-images/wind-turbine-blades.webp"
          id="turbine-blades"
          style={{
            position: "absolute",
            width: "6vw",
            left: "5.5vw",
            top: "0.35vw"
          }}
        />
      </div>
      <div id="wind-turbine-pair-2" style={{ transition: "opacity 0.5s" }}>
        <img
          src="Assets/Buildings-images/wind-turbine-pole.webp"
          style={{
            position: "absolute",
            width: "17vw",
            left: "2.95vw",
            top: "-1.3vw"
          }}
        />
        <img
          src="Assets/Buildings-images/wind-turbine-blades.webp"
          id="turbine-blades"
          style={{
            position: "absolute",
            width: "6vw",
            left: "8.5vw",
            top: "0.35vw"
          }}
        />
      </div>
      <div id="wind-turbine-pair-3" style={{ transition: "opacity 0.5s" }}>
        <img
          src="Assets/Buildings-images/wind-turbine-pole.webp"
          style={{
            position: "absolute",
            width: "17vw",
            left: "5.95vw",
            top: "-1.3vw"
          }}
        />
        <img
          src="Assets/Buildings-images/wind-turbine-blades.webp"
          id="turbine-blades"
          style={{
            position: "absolute",
            width: "6vw",
            left: "11.5vw",
            top: "0.35vw"
          }}
        />
      </div>
      <div id="wind-turbine-pair-4" style={{ transition: "opacity 0.5s" }}>
        <img
          src="Assets/Buildings-images/wind-turbine-pole.webp"
          style={{
            position: "absolute",
            width: "17vw",
            left: "8.9vw",
            top: "-1.3vw"
          }}
        />
        <img
          src="Assets/Buildings-images/wind-turbine-blades.webp"
          id="turbine-blades"
          style={{
            position: "absolute",
            width: "6vw",
            left: "14.5vw",
            top: "0.35vw"
          }}
        />
      </div>
    </div>
    <div id="nuclear-geo-hep-section">
      <img
        src="Assets/Buildings-images/nuclear-lv1.webp"
        id="nuclear-lvl-1"
        style={{ position: "absolute", width: "99vw", top: "0vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/nuclear-lv2.webp"
        id="nuclear-lvl-2"
        style={{ position: "absolute", width: "99vw", top: "0vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/nuclear-lv3.webp"
        id="nuclear-lvl-3"
        style={{ position: "absolute", width: "99vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/geo-lv4.webp"
        id="geo-lvl-4"
        style={{ position: "absolute", width: "99vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/geo-lvl-3.webp"
        id="geo-lvl-3"
        style={{ position: "absolute", width: "99vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/geo-lvl-2.webp"
        id="geo-lvl-2"
        style={{ position: "absolute", width: "99vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/geo-lvl-1.webp"
        id="geo-lvl-1"
        style={{ position: "absolute", width: "99vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/powerStation.webp"
        style={{ position: "absolute", width: "99vw", zIndex: 20 }}
      />
      <img
        src="Assets/Buildings-images/hep-lv3.webp"
        id="hep-lvl-4"
        style={{ position: "absolute", width: "99vw", left: "1vw" }}
      />
      <img
        src="Assets/Buildings-images/hep-lv2.webp"
        id="hep-lvl-3"
        style={{ position: "absolute", width: "99vw", left: "1vw" }}
      />
      <img
        src="Assets/Buildings-images/hep-lv1.webp"
        id="hep-lvl-2"
        style={{ position: "absolute", width: "99vw", left: "1vw" }}
      />
      <div id="nuclear-geothermal-smoke-effects">
        <div
          id="geothermal-smoke"
          style={{
            position: "absolute",
            left: "73.2vw",
            top: "3vw",
            width: "4vw",
            height: "4vw",
            borderRadius: "50%",
            backgroundColor: "white",
            zIndex: 20,
            opacity: "0.5"
          }}
        />
        <div
          id="nuclear-smoke"
          style={{
            position: "absolute",
            left: "59.9vw",
            top: "1.2vw",
            width: "4vw",
            height: "4vw",
            borderRadius: "50%",
            backgroundColor: "white",
            zIndex: 20,
            opacity: "0.5",
            transition: "opacity 1s ease"
          }}
        />
      </div>
      <div id="hep-powerLine-section">
        <img
          src="Assets/Buildings-images/HEP-PowerLine-straight.webp"
          style={{ position: "absolute", width: "99vw", zIndex: 20 }}
        />
        <div id="power-bubbles">
          <div
            id="power-bubble-lvl-1"
            style={{
              position: "absolute",
              left: "95vw",
              top: "11.45vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 30
            }}
          />
          <div
            id="power-bubble-lvl-2"
            style={{
              position: "absolute",
              left: "95vw",
              top: "11.45vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="power-bubble-lvl-3"
            style={{
              position: "absolute",
              left: "95vw",
              top: "11.45vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="power-bubble-lvl-4"
            style={{
              position: "absolute",
              left: "95vw",
              top: "11.45vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
        </div>
      </div>
      <div id="geo-powerLine-section">
        <img
          src="Assets/Buildings-images/geothermal-Powerline-straight.webp"
          style={{ position: "absolute", width: "99vw", zIndex: 20 }}
        />
        <div id="geothermal-power-bubbles">
          <div
            id="geo-power-bubble-lvl-1"
            style={{
              position: "absolute",
              left: "72.6vw",
              top: "12.5vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="geo-power-bubble-lvl-2"
            style={{
              position: "absolute",
              left: "72.6vw",
              top: "12.5vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="geo-power-bubble-lvl-3"
            style={{
              position: "absolute",
              left: "72.6vw",
              top: "12.5vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="geo-power-bubble-lvl-4"
            style={{
              position: "absolute",
              left: "72.6vw",
              top: "12.5vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
        </div>
      </div>
      <div id="nuclear-powerLine-section">
        <img
          src="Assets/Buildings-images/nuclear-powerLine-straight.webp"
          id="nuclear-straight-powerline"
          style={{ position: "absolute", width: "99vw", zIndex: 20 }}
        />
        <div id="nuclear-power-bubbles">
          <div
            id="nuclear-power-bubble-lvl-1"
            style={{
              position: "absolute",
              left: "58vw",
              top: "1.43vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="nuclear-power-bubble-lvl-2"
            style={{
              position: "absolute",
              left: "58vw",
              top: "1.43vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="nuclear-power-bubble-lvl-3"
            style={{
              position: "absolute",
              left: "58vw",
              top: "1.43vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
          <div
            id="nuclear-power-bubble-lvl-4"
            style={{
              position: "absolute",
              left: "58vw",
              top: "1.43vw",
              width: "0.6vw",
              height: "0.6vw",
              borderRadius: "50%",
              backgroundColor: "lightskyblue",
              zIndex: 20
            }}
          />
        </div>
      </div>
    </div>
    <div id="bio-energy-section">
      <img
        src="Assets/Buildings-images/Bioenergy-Lv1.webp"
        id="bioenergy-lvl-1"
        style={{
          position: "absolute",
          width: "98vw",
          top: "0vw",
          left: "2vw",
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/Bioenergy-Lv2.webp"
        id="bioenergy-lvl-2"
        style={{
          position: "absolute",
          width: "98vw",
          top: "0vw",
          left: "2vw",
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/Bioenergy-Lv3.webp"
        id="bioenergy-lvl-3"
        style={{
          position: "absolute",
          width: "98vw",
          top: "0vw",
          left: "2vw",
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/Bioenergy-Lv4.webp"
        id="bioenergy-lvl-4"
        style={{
          position: "absolute",
          width: "98vw",
          top: "0vw",
          left: "2vw",
          transition: "opacity 0.5s"
        }}
      />
    </div>
    <div id="carbon-capture-section">
      <img
        src="Assets/Buildings-images/CarbonCapture-Lv2.webp"
        id="carbon-capture-lvl-2"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0vw",
          left: "0.45vw",
          zIndex: 10,
          opacity: 0,
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/CarbonCapture-Lv3.webp"
        id="carbon-capture-lvl-3"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0vw",
          left: "0.45vw",
          zIndex: 10,
          opacity: 0,
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/CarbonCapture-Lv4.webp"
        id="carbon-capture-lvl-4"
        style={{
          position: "absolute",
          width: "99vw",
          top: "0vw",
          left: "0.45vw",
          zIndex: 10,
          opacity: 0,
          transition: "opacity 0.5s"
        }}
      />
    </div>
    <div id="forestry-section">
      <img
        src="Assets/Buildings-images/Forestry-Lv1.webp"
        id="forestry-lvl-1"
        style={{
          position: "absolute",
          width: "99vw",
          left: "0vw",
          top: "0vw",
          zIndex: 50,
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/Forestry-Lv2.webp"
        id="forestry-lvl-2"
        style={{
          position: "absolute",
          width: "99vw",
          left: "0vw",
          top: "0vw",
          zIndex: 50,
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/Forestry-Lv3.webp"
        id="forestry-lvl-3"
        style={{
          position: "absolute",
          width: "99vw",
          left: "0vw",
          top: "0vw",
          zIndex: 50,
          transition: "opacity 0.5s"
        }}
      />
      <img
        src="Assets/Buildings-images/Forestry-Lv4.webp"
        id="forestry-lvl-4"
        style={{
          position: "absolute",
          width: "99vw",
          left: "0vw",
          top: "0vw",
          zIndex: 50,
          transition: "opacity 0.5s"
        }}
      />
    </div>
  </div>
  <div
    id="animation-delay-bug-overlay"
    style={{
      position: "absolute",
      width: "7vw",
      height: "5vw",
      top: "0vw",
      left: "0vw",
      backgroundColor: "#b0d6a4",
      zIndex: 40
    }}
  />
  <div
    id="right-side-meter"
    style={{ position: "absolute", zIndex: 60, display: "none" }}
  >
    <img
      src="Assets/Meter-Background.webp"
      style={{
        position: "absolute",
        width: "5.3vw",
        left: "93vw",
        top: "5.4vw"
      }}
    />
    <img
      src="Assets/Meter-Lever.webp"
      style={{
        position: "absolute",
        width: "1.9vw",
        top: "9.5vw",
        left: "94.7vw",
        opacity: "0.9"
      }}
    />
    <img
      src="Assets/CO<sub>2</sub>-meter-background.webp"
      style={{ position: "absolute", width: "9vw", top: "4.7vw", left: "88vw" }}
    />
    <div
      id="yellow-background"
      style={{
        position: "absolute",
        width: "1.7vw",
        height: "8.85vw",
        left: "94.8vw",
        top: "17vw",
        backgroundColor: "#f0a800",
        borderRadius: "4%"
      }}
    />
    <p
      style={{
        position: "absolute",
        width: "7vw",
        left: "89.15vw",
        top: "5vw",
        fontFamily: '"Helvetica", sans-serif',
        fontSize: "1vw",
        fontWeight: "normal",
        textAlign: "center",
        color: "#ffffff"
      }}
    >
      CO&nbsp;&nbsp;&nbsp;e METER
    </p>
    <p
      style={{
        position: "absolute",
        width: "6vw",
        left: "88.3vw",
        top: "5.45vw",
        fontFamily: '"Helvetica", sans-serif',
        fontSize: "0.9vw",
        fontWeight: "normal",
        textAlign: "center",
        color: "#ffffff"
      }}
    >
      2
    </p>
  </div>
  <div
    id="right-side-meter-lower-version"
    style={{ position: "absolute", zIndex: 60 }}
  >
    <div
      id="yellow-background"
      style={{
        position: "absolute",
        width: "6.7vw",
        height: "5vw",
        left: "91vw",
        top: "27.5vw",
        backgroundColor: "#f0a800",
        borderRadius: "8%"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "6.7vw",
          height: "1.2vw",
          borderRadius: "0.5vw 0.5vw 0vw 0vw",
          backgroundColor: "#ffffff"
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "Helvetica",
            fontSize: "0.75vw",
            fontWeight: "bold",
            color: "#054170",
            lineHeight: "0vw"
          }}
        >
          CO<sub>2</sub>e METER
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          width: "4.5vw",
          height: "2vw",
          top: "1.6vw",
          left: "0.5vw",
          borderRadius: "0.5vw",
          backgroundColor: "#054170",
          border: "0.1vw solid white"
        }}
      >
        <p
          id="co-meter-text"
          style={{
            textAlign: "center",
            marginTop: "0.3vw",
            fontFamily: "Helvetica",
            fontSize: "1.3vw",
            color: "white"
          }}
        >
          0%
        </p>
      </div>
      <div
        id="CO<sub>2</sub>-meter-pop-up-button"
        style={{
          position: "absolute",
          top: "2.2vw",
          left: "5.4vw",
          width: "0.9vw",
          height: "0.9vw",
          borderRadius: "50%",
          backgroundColor: "white",
          cursor: "pointer"
        }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "0vw",
            fontFamily: "Helvetica",
            fontSize: "0.9vw"
          }}
        >
          i
        </p>
      </div>
      {/* <div
          style="margin-top: 3.95vw; margin-left: auto; margin-right: auto; width: 5.35vw; height: 0.7vw; border-radius: 0.15vw; box-shadow: 0.05vw 0.05vw 0.05vw black inset; background-color: white;">
      </div> */}
      <p
        style={{
          textAlign: "center",
          marginTop: "3.75vw",
          fontFamily: "Helvetica",
          fontWeight: "bold",
          fontSize: "0.9vw",
          color: "#054170"
        }}
      >
        Percent
      </p>
    </div>
  </div>
  <div
    id="CO<sub>2</sub>-meter-info-pop-up"
    style={{
      position: "absolute",
      width: "19.3vw",
      height: "7.4vw",
      left: "79vw",
      top: "19vw",
      backgroundColor: "white",
      border: "0.2vw solid #054170",
      fontFamily: "Helvetica",
      fontSize: "1.01vw",
      display: "none"
    }}
  >
    <p style={{ position: "absolute", left: "0.45vw", lineHeight: "1.22vw" }}>
      The meter is showing the difference of Kenya's greenhouse gas emissions in
      2050 between the chosen scenario and the predicted business as usual
      scenario as a percentage.
    </p>
    <div
      id="triangle"
      style={{
        position: "absolute",
        top: "7.4vw",
        left: "16vw",
        width: "0vw",
        height: "0vw",
        borderLeft: "0.7vw solid transparent",
        borderRight: "0.7vw solid transparent",
        borderTop: "1.1vw solid white"
      }}
    />
  </div>
  <div
    id="co-meter-text-background"
    style={{
      position: "absolute",
      left: "94.3vw",
      width: "3.4vw",
      top: "10vw",
      height: "1.8vw",
      backgroundColor: "rgb(26, 64, 109)",
      border: "0.2vw solid white",
      zIndex: 65,
      borderRadius: "0.5vw",
      transition: "top 0.5s",
      display: "none"
    }}
  >
    <p
      id="co-meter-text"
      style={{
        fontFamily: '"Helvetica", sans-serif',
        fontSize: "1vw",
        fontWeight: "normal",
        textAlign: "center",
        color: "#ffffff",
        lineHeight: "0vw"
      }}
    >
      100%
    </p>
  </div>
  <div id="lower-section">
    <div id="blue-rectangle-background">
      <img
        src="Assets/Rectangle-2-noborder.webp"
        style={{
          position: "absolute",
          left: "0vw",
          top: "33.8vw",
          height: "15.5vw",
          zIndex: 55
        }}
      />
      <img
        src="Assets/Rectangle-2-noborder.webp"
        style={{
          position: "absolute",
          right: "0vw",
          top: "33.8vw",
          height: "15.5vw",
          zIndex: 55
        }}
      />
    </div>
    <div id="icons" style={{ position: "absolute", zIndex: 60 }}>
      <div id="all-sliders-background">
        <img
          src="Assets/Slider_ALL.webp"
          style={{
            position: "absolute",
            width: "85.36vw",
            top: "39.85vw",
            left: "2.55vw"
          }}
        />
      </div>
      <div id="yellow-lines">
        <div
          id="yellow-border-btwn-sliders"
          style={{
            position: "absolute",
            width: "0.1vw",
            height: "7.9vw",
            left: "16.9vw",
            top: "39.2vw",
            backgroundColor: "#f0a800",
            borderRadius: "10%",
            opacity: "0.7"
          }}
        />
        <div
          id="yellow-border-btwn-sliders"
          style={{
            position: "absolute",
            width: "0.1vw",
            height: "7.9vw",
            left: "35.5vw",
            top: "39.2vw",
            backgroundColor: "#f0a800",
            borderRadius: "10%",
            opacity: "0.7"
          }}
        />
        <div
          id="yellow-border-btwn-sliders"
          style={{
            position: "absolute",
            width: "0.1vw",
            height: "7.9vw",
            left: "54.1vw",
            top: "39.2vw",
            backgroundColor: "#f0a800",
            borderRadius: "10%",
            opacity: "0.7"
          }}
        />
        <div
          id="yellow-border-btwn-sliders"
          style={{
            position: "absolute",
            width: "0.1vw",
            height: "7.9vw",
            left: "77.5vw",
            top: "39.2vw",
            backgroundColor: "#f0a800",
            borderRadius: "10%",
            opacity: "0.7"
          }}
        />
      </div>
      <div id="transport-section">
        <p
          style={{
            position: "absolute",
            left: "5.25vw",
            top: "46.3vw",
            fontFamily: '"Helvetica", sans-serif',
            fontSize: "1vw",
            fontWeight: "normal",
            textAlign: "center",
            color: "#ffffff"
          }}
        >
          TRANSPORT
        </p>
      
        <div id="travel-demand-section">
        <Link to="/traveldemandinfopage">
            <div
              id="hover-effect-container"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "4vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/transport-demand.webp"
                id="transport-demand-icon"
                style={{
                  position: "absolute",
                  width: "3.5vw",
                  top: "0.7vw",
                  left: "0.5vw",
                  transition: "transform 0.4s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  width: "3.1vw",
                  top: "2.45vw",
                  left: "0.65vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
                
              >
                
                Travel Demand
                
              </p>
              
              {/* <div style="position: absolute; width: 100%; height: 100%; background-color: black; cursor: pointer;">
                      </div> */}
                      
            </div>
            </Link>
        
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-14"
                  style="position: absolute; width: 1.46vw; left: 5.4vw; top: 39.81vw; transition: top 0.5s; z-index: 90;"> */}
          <div id="button-background">
            <div
              onclick="travelDemandKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.95vw",
                left: "5.7vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
            />
            <div
              onclick="travelDemandKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "5.7vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
            />
            <div
              onclick="travelDemandKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "5.7vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
            />
            <div
              onclick="travelDemandKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.5vw",
                left: "5.7vw",
                top: "39.8vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
              
            />
            
          </div>
          
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "2.75vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
          
        </div>
       
       
        <div id="Technology-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-13"
                  style="position: absolute; width: 1.46vw; left: 10.4vw; top: 39.81vw; transition: top 0.5s; z-index: 90;"> */}
         <Link to="/lightvehiclesinfopage">
            <div
              id="hover-effect-container-lightvehicles"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "9vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/light-vehicles.webp"
                id="light-vehicles-image"
                style={{
                  position: "absolute",
                  width: "2vw",
                  top: "0.7vw",
                  left: "1.3vw",
                  transition: "transform 0.4s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  width: "3.1vw",
                  top: "2.8vw",
                  left: "0.4vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                
                Technology
              </p>
              {/* <div style="position: absolute; width: 100%; height: 100%; background-color: black; cursor: pointer;">
                      </div> */}
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="lightVehiclesKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.95vw",
                left: "10.7vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
            />
            <div
              onclick="lightVehiclesKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "10.7vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
            />
            <div
              onclick="lightVehiclesKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "10.7vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
            />
            <div
              onclick="lightVehiclesKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "10.7vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0,
                zIndex: 90
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-technology-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "7.75vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
        </div>
        <div
          id="kuficha-rada"
          style={{
            position: "absolute",
            backgroundColor: "#054170",
            width: "15vw",
            height: "6.9vw",
            zIndex: 60,
            top: "39.8vw",
            left: "1.5vw"
          }}
        />
        <img
          src="Assets/Slider-background.webp"
          style={{
            position: "absolute",
            width: "2.9vw",
            top: "39.85vw",
            left: "5.5vw",
            zIndex: 60
          }}
        />
        <img
          src="Assets/Slider-background.webp"
          style={{
            position: "absolute",
            width: "2.9vw",
            top: "39.85vw",
            left: "10.5vw",
            zIndex: 60
          }}
        />
        
      </div>
      
      <div id="buildings-section">
        <p
          style={{
            position: "absolute",
            left: "23vw",
            top: "46.3vw",
            fontFamily: '"Helvetica", sans-serif',
            fontSize: "1vw",
            fontWeight: "normal",
            textAlign: "center",
            color: "#ffffff"
          }}

        >
          BUILDINGS
        </p>
        
        <div id="travel-demand-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-11"
                  style="position: absolute; width: 1.46vw; left: 19.1vw; top: 39.81vw; transition: top 0.5s;"> */}
        <Link to="/behaviourinfopage">
            <div
              id="hover-effect-container-housingappliances"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "17.6vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/house-temp-icon.webp"
                id="housing-appliances-image"
                style={{
                  position: "absolute",
                  width: "2vw",
                  top: "0.7vw",
                  left: "1.2vw",
                  transition: "transform 0.4s"
                }}
              
              />
        
              <p
                style={{
                  position: "absolute",
                  top: "2.4vw",
                  left: "0vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}

              >
      
                Housing Appliances
              </p>
              
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="behaviourKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.95vw",
                left: "19.4vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="behaviourKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "19.4vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="behaviourKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "19.4vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="behaviourKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "19.4vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-housing-appliances-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "16.3vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
     
        </div>
       
        <div id="Lighting-Appliances-section">
        
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-10"
                  style="position: absolute; width: 1.46vw; left: 24.45vw; top: 39.81vw; transition: top 0.5s;"> */}
          <Link to = "/efficiencyinfopage">
            <div
              id="hover-effect-container-lightingappliances"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "23vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/efficiency.webp"
                id="lighting-appliances-image"
                style={{
                  position: "absolute",
                  width: "2vw",
                  top: "0.7vw",
                  left: "1.2vw",
                  transition: "transform 0.4s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.4vw",
                  left: "0vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Lighting &amp; Appliances
              </p>
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="efficiencyKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.95vw",
                left: "24.7vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="efficiencyKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "24.7vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="efficiencyKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "24.7vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="efficiencyKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "24.7vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-lighting-appliances-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "21.7vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
               
        </div>
        
          <div id="Hot-Water-section">
          <Link to="/heatingsystemsinfopage">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-9"
                  style="position: absolute; width: 1.46vw; left: 30.3vw; top: 39.81vw; transition: top 0.5s;"> */}
        
            <div
              id="hover-effect-container-hotwater"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "28.8vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/heating.webp"
                id="hot-water-image"
                style={{
                  position: "absolute",
                  width: "2.7vw",
                  top: "0.7vw",
                  left: "0.85vw",
                  transition: "transform 0.4s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.8vw",
                  left: "0.65vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
            
              >
                Hot Water
              </p>
              
            </div>
            </Link> 
          <div id="button-background">
            <div
              onclick="heatingKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.95vw",
                left: "30.6vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="heatingKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "30.6vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="heatingKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "30.6vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="heatingKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "30.6vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-hot-water-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "27.5vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
          
        </div>
      
      </div>
      <div id="industry-ccs-hydrogen-section">
        <p
          style={{
            position: "absolute",
            width: "20vw",
            left: "35vw",
            top: "46.3vw",
            fontFamily: '"Helvetica", sans-serif',
            fontSize: "1vw",
            fontWeight: "normal",
            textAlign: "center",
            color: "#ffffff"
          }}
        >
          INDUSTRY &amp; CCS
        </p>
        <div id="carbon-intensity-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-8"
                  style="position: absolute; width: 1.46vw; left: 38.22vw; top: 39.81vw; transition: top 0.5s;"> */}
       <Link to="/carbonintensityinfopage">
            <div
              id="hover-effect-container-carbon-intensity"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "36.8vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/carbon-intensity.webp"
                id="carbon-intensity-image"
                style={{
                  position: "absolute",
                  width: "2vw",
                  top: "0.5vw",
                  left: "1.2vw",
                  transition: "transform 0.4s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.4vw",
                  left: "0vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Carbon Intensity
              </p>
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="carbonIntensityKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "38.51vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="carbonIntensityKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "38.51vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="carbonIntensityKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "38.51vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="carbonIntensityKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "38.51vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-carbon-intensity-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "35.5vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
        
        </div>
        <div id="Carbon-Capture-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-7"
                  style="position: absolute; width: 1.46vw; left: 44vw; top: 39.81vw; transition: top 0.5s;"> */}
      <Link to="/carboncaptureinfopage">
            <div
              id="hover-effect-container-carboncapture"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "42.3vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/carbon-capture.webp"
                id="carbon-capture-image"
                style={{
                  position: "absolute",
                  width: "2.3vw",
                  top: "0.6vw",
                  left: "1.05vw",
                  transition: "transform 0.4s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.4vw",
                  left: "0vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Carbon Capture
              </p>
              {/* <div style="position: absolute; width: 100%; height: 100%; background-color: black; cursor: pointer;">
                      </div> */}
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="carbonKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "44.25vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="carbonKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "44.25vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="carbonKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "44.25vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="carbonKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "44.25vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-carbon-capture-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "41.2vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
               
        </div>

        <div id="Hydroelectric-Power-section">
        
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-6"
                  style="position: absolute; width: 1.46vw; left: 49.3vw; top: 39.81vw; transition: top 0.5s;"> */}
         <Link to="/hydroelectricpowerinfopage">
            <div
              id="hover-effect-container-hydro"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "48vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/hydro-power-icon.png"
                id="hydro-image"
                style={{
                  position: "absolute",
                  width: "2.1vw",
                  top: "0.6vw",
                  left: "1.22vw",
                  transition: "transform 0.4s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.4vw",
                  left: "0vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Hydroelectric Power
              </p>
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="hydrogenKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "49.6vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="hydrogenKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "49.6vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="hydrogenKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "49.6vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="hydrogenKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "49.6vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-hydro-electric-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "46.6vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
         
        </div>
      </div>
      <div id="low-carbon-electricity-section">
        <p
          style={{
            position: "absolute",
            width: "20vw",
            left: "56vw",
            top: "46.3vw",
            fontFamily: '"Helvetica", sans-serif',
            fontSize: "1vw",
            fontWeight: "normal",
            textAlign: "center",
            color: "#ffffff"
          }}
        >
          ELECTRICITY
        </p>
        <div id="nuclear-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-5"
                  style="position: absolute; width: 1.46vw; left: 56.35vw; top: 39.81vw; transition: top 0.5s;"> */}
<Link to="/nuclearinfopage">
              <div
              id="hover-effect-container-nuclear"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "55vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/nuclear-icon.webp"
                id="nuclear-image"
                style={{
                  position: "absolute",
                  width: "2vw",
                  top: "0.7vw",
                  left: "1.15vw",
                  transition: "transform 0.2s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.8vw",
                  left: "0.9vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
              
              Nuclear
              </p>
          
            </div>
            </Link>
          <div id="button-background">
      
          
            <div
              onclick="nuclearKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "56.65vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
              
            />
            <div
              onclick="nuclearKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "56.65vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="nuclearKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "56.65vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="nuclearKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "56.65vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            
          </div>
         
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-nuclear-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "53.6vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}           
          />
       
        </div>
       
        <div id="wind-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-4"
                  style="position: absolute; width: 1.46vw; left: 61.74vw; top: 39.81vw; transition: top 0.5s;"> */}
         <Link to="/windinfopage">
            <div
              id="hover-effect-container-windmill"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "60vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/windmill-icon.webp"
                id="windmill-image"
                style={{
                  position: "absolute",
                  width: "2.5vw",
                  top: "0.7vw",
                  left: "1.15vw",
                  transition: "transform 0.2s"
                }}
                
              />
              
              <p
                style={{
                  position: "absolute",
                  top: "2.8vw",
                  left: "1.4vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
                
              >
                Wind
              </p>
            </div>
            </Link>  
          <div id="button-background">
            <div
              onclick="windKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "62.05vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="windKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "62.05vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="windKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "62.05vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="windKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "62.05vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-wind-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "59vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
       
          />
             
        </div>
        <div id="solar-section">
        
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-3"
                  style="position: absolute; width: 1.46vw; left: 67.4vw; top: 39.81vw; transition: top 0.5s;"> */}
         <Link to="/solarinfopage">
            <div
              id="hover-effect-container-solar"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "65.8vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/solar-icon.webp"
                id="solar-image"
                style={{
                  position: "absolute",
                  width: "2.2vw",
                  top: "0.75vw",
                  left: "0.9vw",
                  transition: "transform 0.2s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.8vw",
                  left: "1.4vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Solar
              </p>
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="solarKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "67.65vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="solarKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "67.65vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="solarKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "67.65vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="solarKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "67.65vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-solar-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "64.7vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
          
        </div>
      
        <div id="geothermal-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-2"
                  style="position: absolute; width: 1.46vw; left: 72.935vw; top: 39.81vw; transition: top 0.5s;"> */}
     <Link to="/geotheramlpage">
            <div
              id="hover-effect-container-geothermal"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "71.5vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/geothermal-icon.png"
                id="geo-image"
                style={{
                  position: "absolute",
                  width: "2.4vw",
                  top: "0.7vw",
                  left: "0.95vw",
                  transition: "transform 0.2s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.8vw",
                  left: "0.35vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Geothermal
              </p>
            </div>
          </Link>
          <div id="button-background">
            <div
              onclick="waveKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "73.25vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="waveKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "73.25vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="waveKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "73.25vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="waveKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "73.25vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-geothermal-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "70.2vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
        </div>
      </div>
      <div id="land-bioenergy-waste-section">
        <p
          style={{
            position: "absolute",
            width: "20vw",
            left: "75.5vw",
            top: "46.3vw",
            fontFamily: '"Helvetica", sans-serif',
            fontSize: "1vw",
            fontWeight: "normal",
            textAlign: "center",
            color: "#ffffff"
          }}
        >
          LAND, BIOENERGY &amp; WASTE
        </p>
        
        <div id="forestry-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob-1"
                  style="position: absolute; width: 1.46vw; top: 39.81vw; left: 79.51vw; transition: top 0.5s;"> */}
         <Link to="/forestinfopage">
            <div
              id="hover-effect-container-forestry"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "78vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/forestr-icon.webp"
                id="forestry-image"
                style={{
                  position: "absolute",
                  width: "2.5vw",
                  top: "0.95vw",
                  left: "0.9vw",
                  transition: "transform 0.2s"
                }}
                alt=''
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.8vw",
                  left: "0.85vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Forestry
              </p>
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="forestryKnobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "79.8vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="forestryKnobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "79.8vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="forestryKnobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "79.8vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="forestryKnobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "79.8vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-forestry-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "76.8vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
        </div>
       
        
        <div id="bioenergy-section">
          {/* <img src="Assets/Slider_Knob.webp" id="yellow-knob"
                  style="position: absolute; width: 1.46vw; top: 39.81vw; left: 84.9vw; transition: top 0.5s;"> */}
          <Link to="/bioinfopage">
            <div
              id="hover-effect-container-bio"
              style={{
                position: "absolute",
                width: "4.4vw",
                height: "5vw",
                top: "34.2vw",
                left: "83.5vw",
                border: "0.1vw solid white",
                borderRadius: "0.1vw",
                cursor: "pointer"
              }}
            >
              <img
                src="Assets/bio-energy-icon.webp"
                id="bio-image"
                style={{
                  position: "absolute",
                  width: "2vw",
                  top: "0.7vw",
                  left: "1.1vw",
                  transition: "transform 0.2s"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "2.8vw",
                  left: "0.45vw",
                  fontFamily: '"Helvetica", sans-serif',
                  fontSize: "0.7vw",
                  fontWeight: "normal",
                  textAlign: "center",
                  color: "#ffffff"
                }}
              >
                Bio-Energy
              </p>
            </div>
            </Link>
          <div id="button-background">
            <div
              onclick="knobLevel1()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.9vw",
                left: "85.2vw",
                top: "44.45vw",
                backgroundColor: "black",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="knobLevel2()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.8vw",
                left: "85.2vw",
                top: "42.65vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="knobLevel3()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "85.2vw",
                top: "41.4vw",
                backgroundColor: "yellow",
                cursor: "pointer",
                opacity: 0
              }}
            />
            <div
              onclick="knobLevel4()"
              style={{
                position: "absolute",
                width: "0.9vw",
                height: "1.3vw",
                left: "85.2vw",
                top: "40vw",
                backgroundColor: "green",
                cursor: "pointer",
                opacity: 0
              }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={1}
            defaultValue={4}
            className="slider"
            id="myRange-bio-slider"
            style={{
              position: "absolute",
              top: "42.5vw",
              left: "82.1vw",
              transform: "rotate(270deg)",
              zIndex: 100
            }}
          />
        </div>
    
      </div>
    </div>
    <div id="buttons" style={{ position: "absolute", zIndex: 60 }}>
    <Link to="/resultspage">
        <div id="results-button">
          <div id="results-button-style-data" />
          <p id="results-button-text-style">GO TO RESULTS</p>
        </div>
      </Link>
      <div onclick="moveup()" style={{ cursor: "pointer" }}>
        <div id="reset-levers-button">
          <div
            style={{
              position: "absolute",
              width: "6.5vw",
              height: "4vw",
              left: "91vw",
              top: "41.7vw",
              backgroundColor: "white",
              borderRadius: "4%",
              borderStyle: "solid",
              borderColor: "#f0a800",
              borderWidth: "0.15vw"
            }}
          />
          <p
            style={{
              position: "absolute",
              width: "3.1vw",
              top: "42.2vw",
              left: "92.8vw",
              fontFamily: '"Helvetica", sans-serif',
              fontSize: "0.8vw",
              fontWeight: "normal",
              textAlign: "center",
              color: "black"
            }}
          >
            RESET LEVERS
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* <div id="onboarding-screen">
    <div
      id="blue-background"
      onclick="closeForm()"
      style={{
        position: "absolute",
        left: "0vw",
        top: "0vw",
        width: "100vw",
        height: "49vw",
        backgroundColor: "#054170",
        zIndex: 120,
        opacity: "0.6"
      }}
    />
    <div id="floating-card">
      <div
        id="background"
        style={{
          position: "absolute",
          left: "27.8vw",
          top: "16.6vw",
          width: "47vw",
          height: "16.5vw",
          backgroundColor: "#ffffff",
          zIndex: 120,
          borderRadius: "0.5vw"
        }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "5vw",
            marginBottom: "0vw",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: "1.3vw",
            color: "#f0a800",
            lineHeight: "5%"
          }}
        >
          WELCOME TO My2050 Kenya
        </p>
        <p
          style={{
            textAlign: "center",
            marginTop: "1.4vw",
            fontFamily: "Helvetica",
            fontSize: "0.9vw",
            fontStyle: "bold"
          }}
        >
          <br />
          My2050 Kenya is an online tool that allows users to create instances{" "}
          <br />
          that can be used to predict Kenya's CO<sub>2</sub> greenhouse gas
          emissions to inform the necessary <br />
          decisions that will help realise Kenya’s journey to net zero emission
          targets by 2050.
        </p>
        <div
          onclick="closeFoatingCard1()"
          style={{
            position: "absolute",
            left: "23.35vw",
            top: "13.3vw",
            width: "7vw",
            height: "1.65vw",
            borderRadius: "0.2vw",
            backgroundColor: "#054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              color: "white",
              fontSize: "1vw"
            }}
          >
            Next
          </p>
        </div>
        <div
          onclick="closeForm()"
          style={{
            position: "absolute",
            left: "14vw",
            top: "13.3vw",
            width: "7vw",
            height: "1.45vw",
            borderRadius: "0.2vw",
            border: "0.15vw solid #054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              fontSize: "1vw"
            }}
          >
            Skip Tour
          </p>
        </div>
      </div>
    </div>
    <div id="floating-card-2" style={{ display: "none" }}>
      <div
        id="background"
        style={{
          position: "absolute",
          left: "10.5vw",
          top: "14.5vw",
          width: "34vw",
          height: "14.2vw",
          backgroundColor: "#ffffff",
          zIndex: 120,
          borderRadius: "0.5vw"
        }}
      >
        <div
          id="triangle-down"
          style={{
            position: "absolute",
            left: "16.5vw",
            top: "14.2vw",
            width: "0vw",
            height: "0vw",
            borderLeft: "1.5vw solid transparent",
            borderRight: "1.5vw solid transparent",
            borderTop: "3vw solid white"
          }}
        />
        <p
          style={{
            textAlign: "center",
            marginTop: "2.4vw",
            marginBottom: "0vw",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: "1.3vw",
            color: "#f0a800"
          }}
        >
          Find your pathway by:
        </p>
        <ul
          style={{
            marginTop: "1.4vw",
            marginLeft: "0vw",
            fontFamily: "Helvetica",
            fontSize: "0.9vw"
          }}
        >
          <li>
            Choosing your level of ambition from 1 (minimum effort) to 4
            (extreme effort) for each of the levers of decarbonisation at the
            bottom
          </li>
          <li>
            Limiting the number of extreme Level 4s you need to a few you think
            are most important
          </li>
        </ul>
        <div
          onclick="closeFoatingCard2()"
          style={{
            position: "absolute",
            left: "19vw",
            top: "11.3vw",
            width: "7vw",
            height: "1.65vw",
            borderRadius: "0.2vw",
            backgroundColor: "#054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              color: "white",
              fontSize: "1vw"
            }}
          >
            Next
          </p>
        </div>
        <div
          onclick="closeForm()"
          style={{
            position: "absolute",
            left: "10vw",
            top: "11.3vw",
            width: "7vw",
            height: "1.45vw",
            borderRadius: "0.2vw",
            border: "0.15vw solid #054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              fontSize: "1vw"
            }}
          >
            Skip Tour
          </p>
        </div>
      </div>
    </div>
    <div id="floating-card-3" style={{ display: "none" }}>
      <div
        id="background"
        style={{
          position: "absolute",
          left: "51.5vw",
          top: "28.4vw",
          width: "38.4vw",
          height: "14.4vw",
          backgroundColor: "#ffffff",
          zIndex: 120,
          borderRadius: "0.5vw"
        }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "2.5vw",
            marginBottom: "0vw",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: "1.25vw",
            color: "#f0a800"
          }}
        >
          My2050 Kenya
        </p>
        <p
          style={{
            marginTop: "0.8vw",
            marginLeft: "3vw",
            fontFamily: "Helvetica",
            fontSize: "0.9vw",
            lineHeight: "1.3vw"
          }}
        >
          There are 2 online versions of the calculator, a universal version
          called KCERT2050 <br />
          and a detailed Excel version.
        </p>
        <ul
          style={{
            marginLeft: "3vw",
            fontFamily: "Helvetica",
            fontSize: "0.9vw",
            lineHeight: "1.3vw"
          }}
        >
          <li>
            <a href="https://kcert.ilabafrica.ac.ke/" target="_blank">
              KCERT2050 Web Tool
            </a>
          </li>
          <li>
            <a
              href="Assets/kcert-excel/KCERT_2050_V2.34.xlsm"
              download="KCERT2050 carbon calculator (Excel version).xlsm"
              style={{ color: "green" }}
            >
              KCERT2050 carbon calculator (Excel version) (13.4 MB)
            </a>
          </li>
        </ul>
        <div
          onclick="closeFoatingCard3()"
          style={{
            position: "absolute",
            left: "20.35vw",
            top: "11.7vw",
            width: "7vw",
            height: "1.65vw",
            borderRadius: "0.2vw",
            backgroundColor: "#054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              color: "white",
              fontSize: "1vw"
            }}
          >
            Next
          </p>
        </div>
        <div
          onclick="closeForm()"
          style={{
            position: "absolute",
            left: "11vw",
            top: "11.7vw",
            width: "7vw",
            height: "1.45vw",
            borderRadius: "0.2vw",
            border: "0.15vw solid #054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              fontSize: "1vw"
            }}
          >
            Skip Tour
          </p>
        </div>
      </div>
      Roboto
    </div>
    <div id="floating-card-4" style={{ display: "none" }}>
      <div
        id="background"
        style={{
          position: "absolute",
          left: "27.8vw",
          top: "16.6vw",
          width: "44.5vw",
          height: "16.5vw",
          backgroundColor: "#ffffff",
          zIndex: 120,
          borderRadius: "0.5vw"
        }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "3vw",
            marginBottom: "0vw",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: "1.3vw",
            color: "#f0a800"
          }}
        >
          My2050 Kenya
        </p>
        <p
          style={{
            marginTop: "1.4vw",
            marginLeft: "1vw",
            fontFamily: "Helvetica",
            fontSize: "0.85vw",
            textAlign: "center"
          }}
        >
          Both versions contain levers of decarbonisation, 15 in My2050 Kenya
          and 45 in the detailed
          <br />
          version. You select your level of ambition of decarbonisation effort
          using the levers, ranging
          <br />
          from Level 1 - minimal effort, to Level 4 - maximum effort. Popup
          descriptions explain what
          <br />
          the levels represent in terms of behavioural change or infrastructure
          investment.
        </p>
        <div
          onclick="closeFoatingCard4()"
          style={{
            position: "absolute",
            left: "23.35vw",
            top: "13.3vw",
            width: "7vw",
            height: "1.65vw",
            borderRadius: "0.2vw",
            backgroundColor: "#054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              color: "white",
              fontSize: "1vw"
            }}
          >
            Next
          </p>
        </div>
        <div
          onclick="closeForm()"
          style={{
            position: "absolute",
            left: "14vw",
            top: "13.3vw",
            width: "7vw",
            height: "1.45vw",
            borderRadius: "0.2vw",
            border: "0.15vw solid #054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              fontSize: "1vw"
            }}
          >
            Skip Tour
          </p>
        </div>
      </div>
    </div>
    <div id="floating-card-5" style={{ display: "none" }}>
      <div
        id="background"
        style={{
          position: "absolute",
          left: "12vw",
          top: "25vw",
          width: "38.3vw",
          height: "14vw",
          backgroundColor: "#ffffff",
          zIndex: 120,
          borderRadius: "0.5vw"
        }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "3vw",
            marginBottom: "0vw",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: "1.3vw",
            color: "#f0a800"
          }}
        >
          The levels of ambition
        </p>
        <p
          style={{
            marginTop: "1.4vw",
            marginLeft: "0vw",
            fontFamily: "Helvetica",
            fontSize: "0.85vw",
            textAlign: "center",
            position: "absolute"
          }}
        >
          The levels of ambition are based on views expressed by over 100 expert
          stakeholders, including academics, non-government organisations,
          industry bodies, operators and consultants. They don't reflect
          government policy but can be used to represent policy.
        </p>
        <div
          onclick="closeForm()"
          style={{
            position: "absolute",
            left: "16vw",
            top: "11.1vw",
            width: "7vw",
            height: "1.65vw",
            borderRadius: "0.2vw",
            backgroundColor: "#054170",
            cursor: "pointer"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0.9vw",
              lineHeight: "0vw",
              fontFamily: "Helvetica",
              color: "white",
              fontSize: "1vw"
            }}
          >
            Next
          </p>
        </div> */}
        {/* <div onclick="closeForm()" style="position: absolute; left: 14vw; top: 13.3vw; width: 7vw; height: 1.45vw; border-radius: 0.2vw; border: 0.15vw solid #054170; cursor: pointer;">
                  <p style="text-align: center; margin-top: 0.9vw; line-height: 0vw; font-family: Helvetica; font-size: 1vw;">
                      Skip Tour
                  </p>
              </div> */}
      {/* </div>
    </div>
  </div> */}
</>
 );
};

export default CarbonCalculator;
