import React, { useState } from 'react';
import './App.css';
import CarbonCalculator from './components/CarbonCalculator'; // Adjusted import path
import BehaviourInfoPage from './components/BehaviourInfoPage';
import BioEnergyInfoPage from './components/BioEnergyInfoPage';
import CarbonCaptureInfoPage from './components/CarbonCaptureInfoPage';
import CarbonIntensityInfoPage from './components/CarbonIntensityInfoPage';
import BuildingsPage from './components/BuildingsPage';
import IndustryDetailsPage from './components/IndustryDetailsPage';
import DetailsOfMyScenario from './components/DetailsOfMyScenario';
import DetailsOfMyScenarioLowCarbonElectricityPage from './components/DetailsOfMyScenarioLowCarbonElectricityPage';
import ScenarioDetails from './components/ScenarioDetails';
import EfficiencyInfoPage from './components/EfficiencyInfoPage';
import EnergyDemandAndSupply from './components/EnergyDemandAndSupply';
import ForestryInfoPage from './components/ForestryInfoPage';
import GeotheramlPage from './components/GeothermalPage';
import HeatingSystemsInfoPage from './components/HeatingSystemsInfoPage';
import HeavyVehiclesInfoPage from './components/HeavyVehiclesInfoPage';
import HydroelectricPowerInfoPage from './components/HydroelectricPowerInfoPage';
import HydrogenInfoPage from './components/HydrogenInfoPage';
import LightVehiclesInfoPage from './components/LightVehiclesInfoPage';
import NuclearInfoPage from './components/NuclearInfoPage';
import ResultsPage from './components/ResultsPage';
import SolarInfoPage from './components/SolarInfoPage';
import TravelDemandInfoPage from './components/TravelDemandInfoPage.js';
// import WaveTidalInfoPage from './components/WaveTidalInfoPage';
import WindInfoPage from './components/WindInfoPage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('carbon'); // Default mode is 'carbon' (Carbon Calculator)

  return (
    <>
<BrowserRouter>
<main>
    <div className="App">
<Routes>
 <Route path='/' element={<CarbonCalculator  /> } /> 
  <Route  path='/behaviourinfopage' element={<BehaviourInfoPage /> } />  
  <Route  path='/forestinfopage' element={<ForestryInfoPage />} />  
  <Route  path='/bioinfopage' element={  <BioEnergyInfoPage />} />  
  <Route  path='/carboncaptureinfopage' element={  <CarbonCaptureInfoPage /> } /> 
  <Route  path='/carbonintensityinfopage' element={     <CarbonIntensityInfoPage /> } /> 
  <Route  path='/buildingpage' element={  <BuildingsPage /> } /> 
  {/* <Route  path='/industrydetailspage' element={  <IndustryDetailsPage /> } />  */}
  <Route  path='detailsofmyscenariolowcarbonelectricitypage /> ' element={  <DetailsOfMyScenarioLowCarbonElectricityPage />  } /> 
  {/* <Route  path='/detailsofmyScenario' element={ <DetailsOfMyScenario /> } />  */}
  <Route  path='efficiencyinfopage' element={    <EfficiencyInfoPage />  } /> 
  {/* <Route  path='/energydemandandsupply' element={   <EnergyDemandAndSupply />} />  */}
  <Route  path='/geotheramlpage' element={<GeotheramlPage />} />  
  <Route  path='/solarinfopage' element={   <SolarInfoPage />} />  
  <Route  path='/nuclearinfopage' element={       <NuclearInfoPage/> } />  
  <Route  path='/resultspage' element={       <ResultsPage /> } />  
  <Route  path='/windinfopage' element={         <WindInfoPage /> } />  
  <Route  path='/traveldemandinfopage' element={         <TravelDemandInfoPage /> } />  
  <Route  path='/lightvehiclesinfopage' element={            <LightVehiclesInfoPage /> } />  
  <Route  path='/heatingsystemsinfopage' element={               <HeatingSystemsInfoPage /> } />  
  <Route  path='/hydroelectricpowerinfopage' element={                <HydroelectricPowerInfoPage /> } />  
      {/*  

  
     
  
    

  
      <HeavyVehiclesInfoPage /> 
      <HydroelectricPowerInfoPage /> 
      <HydrogenInfoPage />
    
    
    

      <WaveTidalInfoPage /> 
     */}

      
</Routes>
    </div>
    </main>
    </BrowserRouter>
    </>
  );
}

export default App;
