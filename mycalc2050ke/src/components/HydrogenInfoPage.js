import React from "react";

const HydrogenInfoPage = () => {
return(

        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hydrogen Info Page</title>
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
              <a href="travel-demand-info-page.html">
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
                  left: "42.3vw",
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
              <a href="light-vehicles-info-page.html">
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
              </a>
              {/* <img src="Assets/light-vehicles.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 9.4vw; z-index: 10;"> */}
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
              <a href="heavy-vehicles-info-page.html">
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
              </a>
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
              <a href="behaviour-info-page.html">
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
              <a href="efficiency-info-page.html">
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
              <a href="heating-systems-info-page (copy).html">
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
              <a href="carbon-intensity-systems-info-page.html">
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
              <a href="carbon-capture-systems-info-page.html">
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
              <a href="hydrogen-info-page.html">
                <img
                  src="Assets/H2.svg"
                  style={{
                    position: "absolute",
                    width: "2.2vw",
                    top: "1.15vw",
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
              <a href="nuclear-info-page.html">
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
              <a href="wind-info-page.html">
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
              <a href="solar-info-page.html">
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
              <a href="wave-tidal-info-page.html">
                <img
                  src="Assets/wave-tidal-icon.svg"
                  style={{
                    position: "absolute",
                    width: "3.1vw",
                    top: "1.5vw",
                    left: "62.95vw"
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
            {/* <div id="heavy-vehicles-nav-link">
                <img src="Assets/heavy-vehicles.svg" style="position: absolute; width: 2.4vw; top: 1.5vw; left: 13.95vw; z-index: 10;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 12.59vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="behaviour-nav-link">
                <img src="Assets/house-temp-icon.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 19.1vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 17.51vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="efficiency-nav-link">
                <img src="Assets/efficiency.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 24.05vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 22.52vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="heating-system-nav-link">
                <img src="Assets/heating.svg" style="position: absolute; width: 2.7vw; top: 1.5vw; left: 28.65vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 27.44vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="carbon-instesity-nav-link">
                <img src="Assets/carbon-intensity.svg" style="position: absolute; width: 2vw; top: 1.5vw; left: 33.9vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 32.36vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="carbon-capture-nav-link">
                <img src="Assets/carbon-capture.svg" style="position: absolute; width: 2.2vw; top: 1.5vw; left: 38.8vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 37.28vw; background-color: #F0A828;">
                </div>
            </div> */}
            <div id="hydrogen-nav-link">
              <img
                src="Assets/H2.svg"
                style={{
                  position: "absolute",
                  width: "2.2vw",
                  top: "1.15vw",
                  left: "43.77vw"
                }}
              />
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
              <a href="nuclear-info-page.html">
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
              <a href="wind-info-page.html">
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
              <a href="solar-info-page.html">
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
              <a href="wave-tidal-info-page.html">
                <img
                  src="Assets/wave-tidal-icon.svg"
                  style={{
                    position: "absolute",
                    width: "3.1vw",
                    top: "1.5vw",
                    left: "62.95vw"
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
              <a href="forestry-info-page.html">
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
              <a href="bioenergy-info-page.html">
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
            {/* <div id="wind-nav-link">
                <img src="Assets/windmill-icon.svg" style="position: absolute; width: 2.2vw; top: 1.55vw; left: 53.7vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 52.04vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="solar-nav-link">
                <img src="Assets/solar-icon.svg" style="position: absolute; width: 2.2vw; top: 1.5vw; left: 58.4vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 56.96vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="wave-tidal-nav-link">
                <img src="Assets/wave-tidal-icon.svg" style="position: absolute; width: 3.1vw; top: 1.5vw; left: 62.95vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 61.88vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="forestry-nav-link">
                <img src="Assets/forestr-icon.svg" style="position: absolute; width: 2.4vw; top: 1.5vw; left: 68.18vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 66.81vw; background-color: #F0A828;">
                </div>
            </div>
      
            <div id="bio-eneergy-nav-link">
                <img src="Assets/bio-energy-icon.svg" style="position: absolute; width: 1.8vw; top: 1.5vw; left: 73.35vw;">
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 71.73vw; background-color: #F0A828;">
                </div>
      
                <div id="border" style="position: absolute; width: 0.1vw; top: 1vw; height: 3vw; left: 76.65vw; background-color: #F0A828;">
                </div>
            </div> */}
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
              src="images/Bus1.png"
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
              Hydrogen
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
              EV's reduce CO2 emissions from burning fossil fuels associated with many
              other forms of travel
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
                >
                  2
                </p>
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
              This lever allows you to choose how much of our natural gas grid is
              converted to supply hydrogen gas by setting an ambition level for
              hydrogen by 2050, ranging from level 1 (minimum effort) to level 4
              (maximum effort).
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
              Natural gas is widely used for heating and cooking in 85% of UK homes,
              as well as in industrial processes. However, its combustion releases
              carbon dioxide (CO2) emissions. Transitioning the gas grid to hydrogen
              could eliminate emissions, as hydrogen combustion does not release CO2.
              Bulk hydrogen production already exists through steam methane reforming
              (SMR) of natural gas. To reduce greenhouse gas emissions, low carbon
              methods are needed, such as capturing and storing CO2 from SMR (‘blue’
              hydrogen) or producing hydrogen through electrolysis using low carbon
              electricity (‘green’ hydrogen). Hydrogen leakage has a negligible effect
              on climate as it is not considered a greenhouse gas.
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
                None of the gas grid is converted to hydrogen, which remains mostly
                natural gas (a fossil fuel) with a small amount of biomethane.
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
                One third of the gas grid is converted to hydrogen, to serve buildings
                &amp; industry heating needs.
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
                Two thirds of the gas grid is converted to hydrogen, with most
                buildings &amp; industry heating needs met by hydrogen rather than
                natural gas.
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
                All of the gas grid is converted to hydrogen, being the upper limit of
                what is possible.
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
              Low-carbon hydrogen can be produced in a number of ways, such as from
              biomass, from natural gas with carbon capture and storage (CCS), or from
              electrolysis of water. Electrolysis requires electricity, so enough
              low-carbon electricity needs to be generated by the Electricity levers
              for nuclear and renewables. If the Carbon Capture lever is deployed, it
              allows hydrogen produced by steam methane reformation of natural gas to
              be decarbonising. If there is enough biomass supply from the Bioenergy
              lever, then biomass can be combined with carbon capture to generate
              negative CO2 emissions.{" "}
            </p>
          </div>
        </>
      )
};
export default HydrogenInfoPage;