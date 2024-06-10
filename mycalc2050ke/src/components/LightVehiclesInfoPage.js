import React from "react";

const LightVehiclesInfoPage = () => {
    return (

            <>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Light Vhicles Info Page</title>
              <link rel="icon" type="image/ico" href="Assets/SU_favicon.ico" />
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
                rel="stylesheet"
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n            html{\n                scroll-behavior: smooth;\n            }\n\n            html::-webkit-scrollbar{\n                width: 0vw;\n            }\n        "
                }}
              />
              <nav
                style={{
                  position: "fixed",
                  width: "100vw",
                  height: "5vw",
                  left: "0vw",
                  top: "0vw",
                  backgroundColor: "#054170",
                  zIndex: 100
                }}
              >
                <div id="travel-demand-nav-link">
                  <a href="javascript:travelDemandPage()">
                    <img
                      src="Assets/transport-demand.svg"
                      style={{
                        position: "absolute",
                        width: "3.5vw",
                        top: "1.5vw",
                        left: "3.7vw",
                        zIndex: 10
                      }}
                    />
                  </a>
                  {/* <img src="Assets/transport-demand.svg" style="position: absolute; width: 3.5vw; top: 1.5vw; left: 3.7vw; z-index: 10;"> */}
                  <div
                    id="orange-highlight-background"
                    style={{
                      position: "absolute",
                      width: "4.82vw",
                      top: "0vw",
                      height: "5vw",
                      left: "7.82vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "2.85vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="light-vehicles-nav-link">
                  <img
                    src="Assets/light-vehicles.svg"
                    style={{
                      position: "absolute",
                      width: "2vw",
                      top: "1.5vw",
                      left: "9.4vw",
                      zIndex: 10
                    }}
                  />
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "7.77vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="heavy-vehicles-nav-link">
                  {/* <a href="heavy-vehicles-info-page.html">
                        <img src="Assets/heavy-vehicles.svg" style="position: absolute; width: 2.4vw; top: 1.5vw; left: 13.95vw; z-index: 10;">
                    </a> */}
                  <img
                    src="Assets/heavy-vehicles.svg"
                    style={{
                      position: "absolute",
                      width: "2.4vw",
                      top: "1.5vw",
                      left: "13.95vw",
                      zIndex: 10
                    }}
                  />
                  {/* <img src="Assets/heavy-vehicles.svg" style="position: absolute; width: 2.4vw; top: 1.5vw; left: 13.95vw; z-index: 10;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "12.59vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="behaviour-nav-link">
                  <a href="javascript:housingAppliancesPage()">
                    <img
                      src="Assets/house-temp-icon.svg"
                      style={{
                        position: "absolute",
                        width: "2vw",
                        top: "1.5vw",
                        left: "19.1vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/house-temp-icon.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 19.1vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "17.51vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="efficiency-nav-link">
                  <a href="javascript:lightingAppliancesPage()">
                    <img
                      src="Assets/efficiency.svg"
                      style={{
                        position: "absolute",
                        width: "2vw",
                        top: "1.5vw",
                        left: "24.05vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/efficiency.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 24.05vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "22.52vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="heating-system-nav-link">
                  <a href="javascript:hotWaterPage()">
                    <img
                      src="Assets/heating.svg"
                      style={{
                        position: "absolute",
                        width: "2.7vw",
                        top: "1.5vw",
                        left: "28.65vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/heating.svg" style="position: absolute; width: 2.7vw; top: 1.5vw; left: 28.65vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "27.44vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="carbon-instesity-nav-link">
                  <a href="javascript:carbonIntensityPage()">
                    <img
                      src="Assets/carbon-intensity.svg"
                      style={{
                        position: "absolute",
                        width: "2vw",
                        top: "1.5vw",
                        left: "33.9vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/carbon-intensity.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 33.9vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "32.36vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="carbon-capture-nav-link">
                  <a href="javascript:carbonCapturePage()">
                    <img
                      src="Assets/carbon-capture.svg"
                      style={{
                        position: "absolute",
                        width: "2.2vw",
                        top: "1.5vw",
                        left: "38.8vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/carbon-capture.svg" style="position: absolute; width: 2.2vw; top: 1.5vw; left: 38.8vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "37.28vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="hydrogen-nav-link">
                  <a href="javascript:hepPage()">
                    <img
                      src="Assets/hydro-power-icon.png"
                      style={{
                        position: "absolute",
                        width: "2.2vw",
                        top: "1.5vw",
                        left: "43.77vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/H2.svg" style="position: absolute; width: 2.2vw; top: 1.15vw; left: 43.77vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "42.2vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="nuclear-nav-link">
                  <a href="javascript:nuclearPage()">
                    <img
                      src="Assets/nuclear-icon.svg"
                      style={{
                        position: "absolute",
                        width: "2vw",
                        top: "1.5vw",
                        left: "48.69vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/nuclear-icon.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 48.69vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "47.12vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="wind-nav-link">
                  <a href="javascript:windPage()">
                    <img
                      src="Assets/windmill-icon.svg"
                      style={{
                        position: "absolute",
                        width: "2.2vw",
                        top: "1.55vw",
                        left: "53.7vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/windmill-icon.svg" style="position: absolute; width: 2.2vw; top: 1.55vw; left: 53.7vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "52.04vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="solar-nav-link">
                  <a href="javascript:solarPage()">
                    <img
                      src="Assets/solar-icon.svg"
                      style={{
                        position: "absolute",
                        width: "2.2vw",
                        top: "1.5vw",
                        left: "58.4vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/solar-icon.svg" style="position: absolute; width: 2.2vw; top: 1.5vw; left: 58.4vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "56.96vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="wave-tidal-nav-link">
                  <a href="javascript:geoPage()">
                    <img
                      src="Assets/geothermal-icon.png"
                      style={{
                        position: "absolute",
                        width: "2.1vw",
                        top: "1.5vw",
                        left: "63.3vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/wave-tidal-icon.svg" style="position: absolute; width: 3.1vw; top: 1.5vw; left: 62.95vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "61.88vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="forestry-nav-link">
                  <a href="javascript:forestryPage()">
                    <img
                      src="Assets/forestr-icon.svg"
                      style={{
                        position: "absolute",
                        width: "2.4vw",
                        top: "1.5vw",
                        left: "68.18vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/forestr-icon.svg" style="position: absolute; width: 2.4vw; top: 1.5vw; left: 68.18vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "66.81vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <div id="bio-eneergy-nav-link">
                  <a href="javascript:bioPage()">
                    <img
                      src="Assets/bio-energy-icon.svg"
                      style={{
                        position: "absolute",
                        width: "1.8vw",
                        top: "1.5vw",
                        left: "73.35vw"
                      }}
                    />
                  </a>
                  {/* <img src="Assets/bio-energy-icon.svg" style="position: absolute; width: 1.8vw; top: 1.5vw; left: 73.35vw;"> */}
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "71.73vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                  <div
                    id="border"
                    style={{
                      position: "absolute",
                      width: "0.1vw",
                      top: "1vw",
                      height: "3vw",
                      left: "76.65vw",
                      backgroundColor: "#F0A828"
                    }}
                  ></div>
                </div>
                <a href="index.html">
                  <div id="close-page-button">
                    <div
                      id="background-circle"
                      style={{
                        position: "absolute",
                        width: "2.5vw",
                        height: "2.5vw",
                        top: "1.23vw",
                        right: "4vw",
                        backgroundColor: "white",
                        border: "solid",
                        borderColor: "#F0A828",
                        borderRadius: "50%",
                        borderWidth: "0.15vw"
                      }}
                    ></div>
                    <p
                      style={{
                        position: "absolute",
                        width: "2.5vw",
                        height: "2.5vw",
                        top: "-0.2vw",
                        right: "4.15vw",
                        fontFamily: '"Roboto", sans-serif',
                        fontSize: "1.8vw",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#F0A828"
                      }}
                    >
                      X
                    </p>
                  </div>
                </a>
                {/* <div id="close-page-button">
                    <div id="background-circle" style="position: absolute; width: 2.5vw; height: 2.5vw; top: 1.23vw; right: 4vw; background-color: white; border: solid; border-color: #F0A828; border-radius: 50%; border-width: 0.15vw;">
                    </div>
          
                    <p style="position: absolute; width: 2.5vw; height: 2.5vw; top: -0.2vw; right: 4.15vw; font-family: 'Roboto', sans-serif; font-size: 1.8vw; font-weight: bold; text-align: center; color: #F0A828;">
                        X
                    </p>
                </div> */}
              </nav>
              <div id="section-1">
                <img
                  src="images/light-vehicles-image.jpg"
                  style={{
                    position: "absolute",
                    width: "100vw",
                    top: "5vw",
                    left: "-0.1vw"
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    left: "2.8vw",
                    top: "11vw",
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "2.5vw",
                    fontWeight: 595,
                    textAlign: "center",
                    color: "#F0A828",
                    zIndex: 10
                  }}
                >
                  Technolgy
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "3.5vw",
                    top: "16.1vw",
                    width: "34vw",
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "1.2vw",
                    fontWeight: 550,
                    color: "white",
                    zIndex: 10,
                    lineHeight: "1.5vw"
                  }}
                >
                  EV's reduce CO<sub>2</sub> emissions from burning fossil fuels
                  associated with many other forms of travel
                </p>
                <div
                  id="section-background"
                  style={{
                    position: "absolute",
                    left: "0vw",
                    width: "39.5vw",
                    opacity: "0.8",
                    height: "10vw",
                    top: "12.2vw",
                    backgroundColor: "#054170",
                    borderTopRightRadius: "1vw",
                    borderBottomRightRadius: "1vw"
                  }}
                ></div>
              </div>
              <div id="section-2">
                <div id="left-side">
                  <p
                    style={{
                      position: "absolute",
                      left: "13vw",
                      top: "37.5vw",
                      width: "15vw",
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "1.8vw",
                      fontWeight: 550,
                      color: "black",
                      zIndex: 10,
                      lineHeight: "2.3vw"
                    }}
                  >
                    This lever is set at AMBITION LEVEL:
                  </p>
                  <div id="number-2">
                    <div
                      id="number-2-background"
                      style={{
                        position: "absolute",
                        left: "28.2vw",
                        width: "4.4vw",
                        height: "2.6vw",
                        top: "41.5vw",
                        backgroundColor: "#054170",
                        borderRadius: "0.2vw"
                      }}
                    ></div>
                    <p
                      id="ambitionlevelinfo"
                      style={{
                        position: "absolute",
                        left: "29.85vw",
                        top: "39.8vw",
                        width: "54vw",
                        fontFamily: '"Roboto", sans-serif',
                        fontSize: "1.9vw",
                        fontWeight: 600,
                        color: "#F0A828",
                        zIndex: 10,
                        lineHeight: "2.4vw"
                      }}
                    ></p>
                  </div>
                </div>
                <p
                  style={{
                    position: "absolute",
                    left: "42vw",
                    top: "37vw",
                    width: "54vw",
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "1.4vw",
                    fontWeight: 550,
                    color: "#707070",
                    zIndex: 10,
                    lineHeight: "2.4vw"
                  }}
                >
                  This lever allows you to the decide how our cars and vans are powered by
                  setting an ambition level for light vehicle technology by 2050, ranging
                  from level 1 (minimum effort) to level 4 (maximum effort).
                </p>
              </div>
              <div id="section-3">
                <div
                  id="light-background"
                  style={{
                    position: "absolute",
                    width: "100vw",
                    left: 0,
                    height: "30.9vw",
                    top: "52.5vw",
                    backgroundColor: "#054170",
                    opacity: "0.3"
                  }}
                ></div>
                <img
                  src="images/graph.png"
                  style={{
                    position: "absolute",
                    width: "53.5vw",
                    top: "53.5vw",
                    left: "42.5vw"
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    left: "3.3vw",
                    top: "55.5vw",
                    width: "38vw",
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "1vw",
                    fontWeight: 550,
                    color: "black",
                    zIndex: 10,
                    lineHeight: "2.95vw"
                  }}
                >
                  Kenya primarily relies on petrol and diesel for its vehicles, resulting
                  in significant carbon dioxide emissions. Electric cars offer a more
                  energy-efficient option, but they are currently pricier and face limited
                  charging infrastructure. Nevertheless, electric cars produce zero
                  emissions at the tailpipe and have lower overall emissions if charged
                  with renewable energy. Besides electrification, alternative methods to
                  reduce emissions include hydrogen-powered vehicles (emitting only water)
                  and hybrid engines (combining fossil fuels and electrically charged
                  batteries). However, hybrid engines offer a smaller decarbonization
                  benefit.
                </p>
              </div>
              <div id="section-4">
                <div id="level-1">
                  <img
                    src="images/Level1.svg"
                    style={{
                      position: "absolute",
                      top: "85.8vw",
                      left: "18vw",
                      width: "11vw"
                    }}
                  />
                  <p
                    style={{
                      position: "absolute",
                      left: "7vw",
                      top: "95vw",
                      width: "36vw",
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "1vw",
                      fontWeight: 550,
                      color: "black",
                      zIndex: 10,
                      lineHeight: "1.38vw"
                    }}
                  >
                    Almost no electric cars are used. The majority of cars continue to be
                    fuelled by fossil fuels.
                  </p>
                </div>
                <div id="level-2">
                  <img
                    src="images/Level2.svg"
                    style={{
                      position: "absolute",
                      top: "85.8vw",
                      left: "63vw",
                      width: "11vw"
                    }}
                  />
                  <p
                    style={{
                      position: "absolute",
                      left: "51.5vw",
                      top: "95vw",
                      width: "36vw",
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "1vw",
                      fontWeight: 550,
                      color: "black",
                      zIndex: 10,
                      lineHeight: "1.38vw"
                    }}
                  >
                    Around half of cars are electric, with part of society transitioning
                    over to electric vehicles and strong investment in electric vehicle
                    infrastructure including charge points.
                  </p>
                </div>
                <div id="level-3">
                  <img
                    src="images/Level3.svg"
                    style={{
                      position: "absolute",
                      top: "106vw",
                      left: "18vw",
                      width: "11vw"
                    }}
                  />
                  <p
                    style={{
                      position: "absolute",
                      left: "7vw",
                      top: "115vw",
                      width: "36vw",
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "1vw",
                      fontWeight: 550,
                      color: "black",
                      zIndex: 10,
                      lineHeight: "1.38vw"
                    }}
                  >
                    Around 95% of cars are electric, with the large majority of car owners
                    switching to electric.
                  </p>
                </div>
                <div id="level-4">
                  <img
                    src="images/Level4.svg"
                    style={{
                      position: "absolute",
                      top: "106vw",
                      left: "63vw",
                      width: "11vw"
                    }}
                  />
                  <p
                    style={{
                      position: "absolute",
                      left: "51.5vw",
                      top: "115vw",
                      width: "38vw",
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: "1vw",
                      fontWeight: 550,
                      color: "black",
                      zIndex: 10,
                      lineHeight: "1.38vw"
                    }}
                  >
                    All cars are electric, with scrappage schemes to remove remaining
                    petrol and diesel cars from the road.
                  </p>
                </div>
              </div>
              <div id="section-5">
                <div id="background-image">
                  <img
                    src="images/Bus-Blue-tint.png"
                    style={{
                      position: "absolute",
                      width: "100vw",
                      left: "-0.32vw",
                      top: "127.3vw"
                    }}
                  />
                </div>
                <p
                  style={{
                    position: "absolute",
                    left: "9vw",
                    top: "131vw",
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "2.6vw",
                    fontWeight: 595,
                    textAlign: "center",
                    color: "#F0A828",
                    zIndex: 10
                  }}
                >
                  Interaction with other levers
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "9vw",
                    top: "137.4vw",
                    width: "45vw",
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "1.2vw",
                    fontWeight: 550,
                    color: "white",
                    zIndex: 10,
                    lineHeight: "2vw"
                  }}
                >
                  For electric vehicles to have the greatest effect in reducing carbon
                  dioxide emissions, they must use low-carbon electricity which needs to
                  be generated using the Electricity levers for nuclear and renewables, or
                  the Carbon Capture lever to decarbonise electricity produced from fossil
                  fuels.
                </p>
              </div>
            </>
          )
          
};
export default  LightVehiclesInfoPage;