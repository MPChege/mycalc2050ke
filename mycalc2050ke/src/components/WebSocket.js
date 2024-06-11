// import React from "react";
// const WebSocket = () => {
//     const [websocket, setWebsocket] = useState(null);
//     const [electricityCurrentVal, setElectricityCurrentVal] = useState(0);
//     const [hydrogenCurrentVal, setHydrogenCurrentVal] = useState(0);
//     const [otherEnergyCurrentVal, setOtherEnergyCurrentVal] = useState(0);
//     const [wasteManagementCurrentVal, setWasteManagementCurrentVal] = useState(0);
//     const [agricultureCurrentVal, setAgricultureCurrentVal] = useState(0);
//     const [industryCurrentVal, setIndustryCurrentVal] = useState(0);
//     const [buildingResidentialCurrentVal, setBuildingResidentialCurrentVal] = useState(0);
//     const [buildingNonResidentialCurrentVal, setBuildingNonResidentialCurrentVal] = useState(0);
//     const [transportDomesticCurrentVal, setTransportDomesticCurrentVal] = useState(0);
//     const [transportInternationalCurrentVal, setTransportInternationalCurrentVal] = useState(0);
//     const [totalEmmissionsCurrentVal, setTotalEmmissionsCurrentVal] = useState(0);
//     const [firstLoad, setFirstLoad] = useState(true);
//     const [resultShow, setResultShow] = useState(0);
//     useEffect(() => {
//       const wsUrl =
//         "wss://kcert.ilabafrica.ac.ke/_/ws/?s=429604ac2c1f3440be301977c504df08cefeb66b053ad6572b8e6108fbfc8870=ZXWN3HQNAOLDFZNWDKLAFUH2UONHYU24TYHRVFMIEZKPXFKO";
  
//       const startWebSocket = () => {
//         const websocket = new WebSocket(wsUrl);
  
//         websocket.onopen = (event) => {
//           console.log("Message sent to the server.");
//           getInitValueWb();
//           getValueWb();
//         };
  
//         websocket.onmessage = (event) => {
//           console.log(
//             "Message received from the server:",
//             JSON.parse(event.data).response.output_emissions_sector
//           );
//           const dat = JSON.parse(event.data).response.output_emissions_sector[11];
//           const da = JSON.parse(event.data).response.output_emissions_sector;
//           if (firstLoad) {
//             setElectricityCurrentVal(da[1][8]);
//             setHydrogenCurrentVal(da[2][8]);
//             setOtherEnergyCurrentVal(da[3][8]);
//             setWasteManagementCurrentVal(da[4][8]);
//             setAgricultureCurrentVal(da[5][8]);
//             setIndustryCurrentVal(da[6][8]);
//             setBuildingResidentialCurrentVal(da[7][8]);
//             setBuildingNonResidentialCurrentVal(da[8][8]);
//             setTransportDomesticCurrentVal(da[9][8]);
//             setTransportInternationalCurrentVal(da[10][8]);
//             setTotalEmmissionsCurrentVal(da[11][8]);
//             setFirstLoad(false);
//             return;
//           } else {
//             setElectricityCurrentVal(da[1][8]);
//             setHydrogenCurrentVal(da[2][8]);
//             setOtherEnergyCurrentVal(da[3][8]);
//             setWasteManagementCurrentVal(da[4][8]);
//             setAgricultureCurrentVal(da[5][8]);
//             setIndustryCurrentVal(da[6][8]);
//             setBuildingResidentialCurrentVal(da[7][8]);
//             setBuildingNonResidentialCurrentVal(da[8][8]);
//             setTransportDomesticCurrentVal(da[9][8]);
//             setTransportInternationalCurrentVal(da[10][8]);
//             setTotalEmmissionsCurrentVal(da[11][8]);
//           }
  
//           const max_value = 146.07;
//           console.log(dat[1]);
//           console.log(dat[8]);
  
//           console.log(((dat[8] - dat[1]) / dat[1]) * 100);
//           setResultShow(((dat[8] - dat[1]) / dat[1]) * 100);
//         };
  
//         websocket.onerror = (error) => {
//           console.error("WebSocket Error:", error);
//         };
  
//         websocket.onclose = (event) => {
//           if (event.wasClean) {
//             console.log(
//               `Closed cleanly, code=${event.code}, reason=${event.reason}`
//             );
//           } else {
//             console.error("Connection died");
//             setWebsocket(null);
//             setTimeout(() => {
//               startWebSocket();
//             }, 5000);
//           }
//         };
  
//         setWebsocket(websocket);
//       };
  
//       startWebSocket();
  
//       return () => {
//         if (websocket) {
//           websocket.close();
//         }
//       };
//     }, []);
  
//     const goToResults = () => {
//       window.location.href =
//         "results-page.html?" +
//         "electricity_current_val=" +
//         electricityCurrentVal +
//         "&hydrogen_current_val =" +
//         hydrogenCurrentVal +
//         "&other_energy_current_val=" +
//         otherEnergyCurrentVal +
//         "&waste_management_current_val=" +
//         wasteManagementCurrentVal +
//         "&agriculture_current_val=" +
//         agricultureCurrentVal +
//         "&industry_current_val=" +
//         industryCurrentVal +
//         "&building_residential_current_val=" +
//         buildingResidentialCurrentVal +
//         "&building_non_residential_current_val=" +
//         buildingNonResidentialCurrentVal +
//         "&transport_domestic_current_val=" +
//         transportDomesticCurrentVal +
//         "&transport_international_current_val=" +
//         transportInternationalCurrentVal +
//         "&total_emmissions_current_val=" +
//         totalEmmissionsCurrentVal +
//         "&electricity_val=" +
//         electricityCurrentVal +
//         "&hydrogen_val=" +
//         hydrogenCurrentVal +
//         "&other_energy_val=" +
//         otherEnergyCurrentVal +
//         "&waste_management_val=" +
//         wasteManagementCurrentVal +
//         "&agriculture_val=" +
//         agricultureCurrentVal +
//         "&industry_val=" +
//         industryCurrentVal +
//         "&building_residential_val=" +
//         buildingResidentialCurrentVal +
//         "&building_non_residential_val=" +
//         buildingNonResidentialCurrentVal +
//         "&transport_domestic_val=" +
//         transportDomesticCurrentVal +
//         "&transport_international_val=" +
//         transportInternationalCurrentVal +
//         "&total_emmissions_val=" +
//         totalEmmissionsCurrentVal +
//         "&ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const travelDemandPage = () => {
//       window.location.href =
//         "travel-demand-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const technologyPage = () => {
//       window.location.href =
//         "light-vehicles-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const housingAppliancesPage = () => {
//       window.location.href =
//         "behaviour-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const lightingAppliancesPage = () => {
//       window.location.href =
//         "efficiency-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const hotWaterPage = () => {
//       window.location.href =
//         "heating-systems-info-page (copy).html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const carbonIntensityPage = () => {
//       window.location.href =
//         "carbon-intensity-systems-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const carbonCapturePage = () => {
//       window.location.href =
//         "carbon-capture-systems-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const hepPage = () => {
//       window.location.href =
//         "hep-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const nuclearPage = () => {
//       window.location.href =
//         "nuclear-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const windPage = () => {
//       window.location.href =
//         "wind-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const solarPage = () => {
//       window.location.href =
//         "solar-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const geoPage = () => {
//       window.location.href =
//         "geothermal-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const forestryPage = () => {
//       window.location.href =
//         "forestry-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
//     };
  
//     const bioPage = () => {
//       window.location.href =
//         "bioenergy-info-page.html?" +
//         "ambitionLeverNumber=" +
//         ambitionLeverNumber +
//         "&techAmbitionLeverNumber=" +
//         techAmbitionLeverNumber +
//         "&houseAmbitionLeverNumber=" +
//         houseAmbitionLeverNumber +
//         "&lightingAmbitionLeverNumber=" +
//         lightingAmbitionLeverNumber +
//         "&hotWaterAmbitionLeverNumber=" +
//         hotWaterAmbitionLeverNumber +
//         "&carbonIntensityAmbitionLeverNumber=" +
//         carbonIntensityAmbitionLeverNumber +
//         "&carbonCaptureAmbitionLeverNumber=" +
//         carbonCaptureAmbitionLeverNumber +
//         "&hepAmbitionLeverNumber=" +
//         hepAmbitionLeverNumber +
//         "&nuclearAmbitionLeverNumber=" +
//         nuclearAmbitionLeverNumber +
//         "&windAmbitionLeverNumber=" +
//         windAmbitionLeverNumber +
//         "&solarAmbitionLeverNumber=" +
//         solarAmbitionLeverNumber +
//         "&geoAmbitionLeverNumber=" +
//         geoAmbitionLeverNumber +
//         "&forestryAmbitionLeverNumber=" +
//         forestryAmbitionLeverNumber +
//         "&bioAmbitionLeverNumber=" +
//         bioAmbitionLeverNumber;
      
//     };

//     export default WebSocket;