import React from 'react';

const DetailsOfMyScenarioLowCarbonElectricityPage = () => {
  return (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Details of my scenario</title>
          <link rel="icon" type="image/ico" href="Assets/SU_favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      html {\n        scroll-behavior: smooth;\n      }\n\n      html::-webkit-scrollbar {\n        width: 0vw;\n      }\n    "
            }}
          />
          <div
            style={{
              position: "fixed",
              width: "100vw",
              height: "7.5vw",
              left: "0vw",
              top: "0vw",
              backgroundColor: "#054170"
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "2.4vw",
                fontWeight: 500,
                color: "#f0a800"
              }}
            >
              My scenario - results in a glimpse
            </p>
          </div>
          <div
            style={{
              position: "fixed",
              left: "0vw",
              top: "7.5vw",
              width: "100vw",
              height: "8.6vw",
              backgroundColor: "white"
            }}
          />
          <div
            id="triangle-down"
            style={{
              position: "fixed",
              left: "76vw",
              top: "7vw",
              width: "0vw",
              height: "0vw",
              borderLeft: "1.5vw solid transparent",
              borderRight: "1.5vw solid transparent",
              borderTop: "3vw solid #054170"
            }}
          />
          <a href="javascript:resultsPage()">
            <div
              style={{
                position: "fixed",
                width: "16.4vw",
                height: "3.9vw",
                left: "9.65vw",
                top: "10.5vw",
                backgroundColor: "#198bbb",
                borderRadius: "0.5vw"
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "1.3vw",
                  color: "white",
                  lineHeight: "1.5vw"
                }}
              >
                CO <span>2</span> e Emissions
              </p>
            </div>
          </a>
          <a href="javascript:energy();">
            <div
              style={{
                position: "fixed",
                width: "19.1vw",
                height: "3.9vw",
                left: "38.7vw",
                top: "10.5vw",
                backgroundColor: "#198bbb",
                borderRadius: "0.5vw"
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "1.3vw",
                  color: "white",
                  lineHeight: "1.5vw"
                }}
              >
                Energy Demand &amp; Supply
              </p>
            </div>
          </a>
          <div
            style={{
              position: "fixed",
              width: "19.1vw",
              height: "3.9vw",
              left: "68.2vw",
              top: "10.5vw",
              backgroundColor: "#f0a800",
              borderRadius: "0.5vw"
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "1.3vw",
                color: "white",
                lineHeight: "1.5vw"
              }}
            >
              Details of my scenario
            </p>
          </div>
          <div
            id="graph-section-background"
            style={{
              position: "absolute",
              left: "0vw",
              top: "16vw",
              width: "100vw",
              height: "65.8vw",
              backgroundColor: "#000000",
              opacity: "0.07",
              zIndex: -10
            }}
          />
          <img
            src="images/photo-1663593841920-3a627c66381f-cropped.jpg"
            style={{ position: "absolute", width: "100vw", left: "0vw", top: "90vw" }}
          />
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "11.5vw",
              backgroundColor: "#054170",
              top: "90vw",
              left: "0vw",
              opacity: "0.77"
            }}
          />
          <a href="index.html">
            <div
              style={{
                position: "absolute",
                width: "14.55vw",
                height: "4.5vw",
                left: "14.6vw",
                top: "84vw",
                backgroundColor: "#198bbb",
                borderRadius: "0.5vw",
                border: "0.2vw solid white"
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "1.68vw",
                  color: "white",
                  lineHeight: "1.5vw"
                }}
              >
                BACK
              </p>
            </div>
          </a>
          <a href="https://kcert.ilabafrica.ac.ke" target="_blank">
            <div
              style={{
                position: "absolute",
                width: "14.55vw",
                height: "4.5vw",
                left: "42.5vw",
                top: "84vw",
                backgroundColor: "#198bbb",
                borderRadius: "0.5vw",
                border: "0.2vw solid white"
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "1.68vw",
                  color: "white",
                  lineHeight: "1.5vw"
                }}
              >
                KCERT
              </p>
            </div>
          </a>
          <div
            id="side-panel"
            style={{
              position: "absolute",
              width: "20.3vw",
              height: "23.5vw",
              left: "0vw",
              top: "16vw",
              backgroundColor: "#165108",
              zIndex: -10
            }}
          >
            <a href="javascript:detailsTransport()">
              <div
                id="white-background"
                style={{
                  position: "absolute",
                  width: "20.3vw",
                  height: "2.9vw",
                  left: "0vw",
                  top: "4.5vw",
                  backgroundColor: "#165108"
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: "1.6vw",
                    fontFamily: "Roboto",
                    fontSize: "1.3vw",
                    lineHeight: "0.5vw",
                    color: "white"
                  }}
                >
                  Transport
                </p>
              </div>
            </a>
            <a href="javascript:detailsBuildings()">
              <div
                id="white-background"
                style={{
                  position: "absolute",
                  width: "20.3vw",
                  height: "2.9vw",
                  left: "0vw",
                  top: "7.4vw",
                  backgroundColor: "#165108"
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: "1.6vw",
                    fontFamily: "Roboto",
                    fontSize: "1.3vw",
                    lineHeight: "0.5vw",
                    color: "white"
                  }}
                >
                  Buildings
                </p>
              </div>
            </a>
            <a href="javascript:detailsIndustry()">
              <div
                id="white-background"
                style={{
                  position: "absolute",
                  width: "20.3vw",
                  height: "2.9vw",
                  left: "0vw",
                  top: "10.3vw",
                  backgroundColor: "#165108"
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: "1.6vw",
                    fontFamily: "Roboto",
                    fontSize: "1.3vw",
                    lineHeight: "0.5vw",
                    color: "white"
                  }}
                >
                  Industry, CCS &amp; HEP
                </p>
              </div>
            </a>
            <a href="javascript:detailsLowCarbon()">
              <div
                id="white-background"
                style={{
                  position: "absolute",
                  width: "20.3vw",
                  height: "2.9vw",
                  left: "0vw",
                  top: "13.2vw",
                  backgroundColor: "white"
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: "1.6vw",
                    fontFamily: "Roboto",
                    fontSize: "1.3vw",
                    fontWeight: "bold",
                    lineHeight: "0.5vw",
                    color: "black"
                  }}
                >
                  Low Carbon Electricity
                </p>
              </div>
            </a>
            <a href="javascript:detailsLandBioenergy()">
              <div
                id="white-background"
                style={{
                  position: "absolute",
                  width: "20.3vw",
                  height: "2.9vw",
                  left: "0vw",
                  top: "16.1vw",
                  backgroundColor: "#165108"
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: "1.6vw",
                    fontFamily: "Roboto",
                    fontSize: "1.3vw",
                    lineHeight: "0.5vw",
                    color: "white"
                  }}
                >
                  Land, Bioenergy &amp; Waste
                </p>
              </div>
            </a>
          </div>
          <div id="main-content">
            <p
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "16.7vw",
                fontFamily: "Roboto",
                fontSize: "1.8vw",
                fontWeight: "bold",
                zIndex: -10
              }}
            >
              Low Carbon Electricity
            </p>
            <p
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "20.8vw",
                fontFamily: "Roboto",
                fontSize: "1.5vw",
                fontWeight: "bold",
                zIndex: -10,
                color: "#054170"
              }}
            >
              Nuclear:
            </p>
            <p
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "24.4vw",
                fontFamily: "Roboto",
                fontSize: "1.2vw",
                fontWeight: "bold",
                zIndex: -10,
                letterSpacing: "0.05vw"
              }}
            >
              Ambition Level <span id="nuclearambitionlevelinfo" />
            </p>
            <p
              id="nuclearambitionlevelinfocontent"
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "27.1vw",
                fontFamily: "Roboto",
                fontSize: "1.3vw",
                fontWeight: "bold",
                zIndex: -10,
                color: "#707070",
                letterSpacing: "0.05vw",
                lineHeight: "2vw"
              }}
            >
              0.698 GW capacity by 2050 (0.7x the 0 GW capacity in 2015) capable of
              generating up to 5 TWh per year. <br /> Equivalent to 0.2 3 GW plants.
            </p>
            <p
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "34vw",
                fontFamily: "Roboto",
                fontSize: "1.5vw",
                fontWeight: "bold",
                zIndex: -10,
                color: "#054170"
              }}
            >
              Wind:
            </p>
            <p
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "37.6vw",
                fontFamily: "Roboto",
                fontSize: "1.2vw",
                fontWeight: "bold",
                zIndex: -10,
                letterSpacing: "0.05vw"
              }}
            >
              Ambition Level <span id="windambitionlevelinfo" />
            </p>
            <p
              id="windambitionlevelinfocontent"
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "40vw",
                fontFamily: "Roboto",
                fontSize: "1.3vw",
                fontWeight: "bold",
                zIndex: -10,
                color: "#707070",
                letterSpacing: "0.05vw",
                lineHeight: "2.7vw"
              }}
            >
              3.2 GW capacity by 2050, 3.2 GW onshore and 0 GW offshore (10.1x the 0.3
              GW capacity in 2015) capable <br />
              of generating up to 13 TWh per year.
            </p>
            <p
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "46.9vw",
                fontFamily: "Roboto",
                fontSize: "1.5vw",
                fontWeight: "bold",
                zIndex: -10,
                color: "#054170"
              }}
            >
              Solar:
            </p>
            <p
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "50.5vw",
                fontFamily: "Roboto",
                fontSize: "1.2vw",
                fontWeight: "bold",
                zIndex: -10,
                letterSpacing: "0.05vw"
              }}
            >
              Ambition Level <span id="solarambitionlevelinfo" />
            </p>
            <p
              id="solarambitionlevelinfocontent"
              style={{
                position: "absolute",
                left: "24.3vw",
                top: "52.9vw",
                fontFamily: "Roboto",
                fontSize: "1.3vw",
                fontWeight: "bold",
                zIndex: -10,
                color: "#707070",
                letterSpacing: "0.05vw",
                lineHeight: "2.7vw"
              }}
            >
              1.669 GW capacity by 2050 (33.4x the 0.1 GW capacity in 2015) capable of
              generating up to 3 TWh per year.
            </p>
            {/* <img src="images/CarbonMeter_Slide.png" style="position: absolute; left: 84.5vw; top: 30.5vw; width: 11.5vw; z-index: -10;">
            <img src="images/CarbonMeter.png" style="position: absolute; left: 90.3vw; top: 50.8vw; width: 7.8vw; z-index: -10;"> */}
            {/* <div
        id="right-side-meter-lower-version"
        style="position: absolute; z-index: -10"
      >
        <div
          id="yellow-background"
          style="
            position: absolute;
            width: 6.7vw;
            height: 5vw;
            left: 86vw;
            top: 27.5vw;
            background-color: #f0a800;
            border-radius: 8%;
          "
        >
          <div
            style="
              position: absolute;
              width: 6.7vw;
              height: 1.2vw;
              border-radius: 0.5vw 0.5vw 0vw 0vw;
              background-color: #ffffff;
            "
          >
            <p
              style="
                text-align: center;
                font-family: Roboto;
                font-size: 0.75vw;
                font-weight: bold;
                color: #054170;
                line-height: 0vw;
              "
            >
              CO2e METER
            </p>
          </div>
      
          <div
            style="
              position: absolute;
              width: 4vw;
              height: 2vw;
              top: 1.6vw;
              left: 1vw;
              border-radius: 0.5vw;
              background-color: #054170;
              border: 0.1vw solid white;
            "
          >
            <p
              id="co-meter-text"
              style="
                text-align: center;
                margin-top: 0.3vw;
                font-family: Roboto;
                font-size: 1.3vw;
                color: white;
              "
            >
              0%
            </p>
          </div>
      
          <div
            onclick="openFormReset()"
            style="
              position: absolute;
              top: 2.2vw;
              left: 5.3vw;
              width: 0.9vw;
              height: 0.9vw;
              border-radius: 50%;
              background-color: white;
              cursor: pointer;
            "
          >
            <p
              style="
                text-align: center;
                margin-top: 0vw;
                font-family: Roboto;
                font-size: 0.9vw;
              "
            >
              i
            </p>
          </div>
      
          <div
            style="
              margin-top: 3.95vw;
              margin-left: auto;
              margin-right: auto;
              width: 5.35vw;
              height: 0.7vw;
              border-radius: 0.15vw;
              box-shadow: 0.05vw 0.05vw 0.05vw black inset;
              background-color: white;
            "
          ></div>
        </div>
      </div> */}
          </div>
          <div
            onclick="openForm()"
            style={{
              position: "absolute",
              width: "14.55vw",
              height: "4.5vw",
              left: "71.2vw",
              top: "84vw",
              backgroundColor: "#198bbb",
              borderRadius: "0.5vw",
              border: "0.2vw solid white",
              cursor: "pointer"
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "1.2vw",
                color: "white",
                lineHeight: "2.3vw"
              }}
            >
              SHARE MY SCENARIO
            </p>
          </div>
          <div id="share-button-popup" style={{ display: "none" }}>
            <div
              id="background"
              onclick="closeForm()"
              style={{
                position: "absolute",
                left: "0vw",
                top: "0vw",
                width: "100vw",
                height: "100vw",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(5px)"
              }}
            />
            <div
              style={{
                position: "fixed",
                width: "68.4vw",
                height: "26.5vw",
                left: "16vw",
                top: "13.8vw",
                borderRadius: "0.5vw",
                backgroundColor: "white"
              }}
            >
              <div
                id="x-button"
                onclick="closeForm()"
                style={{
                  position: "absolute",
                  width: "3.5vw",
                  height: "3.5vw",
                  left: "62.2vw",
                  top: "1.3vw",
                  backgroundColor: "#054170",
                  borderRadius: "10vw",
                  border: "0.15vw solid #f0a828",
                  cursor: "pointer"
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "0.5vw",
                    fontFamily: "Roboto",
                    fontSize: "2.3vw",
                    fontWeight: "bold",
                    color: "white"
                  }}
                >
                  X
                </p>
              </div>
              <p
                style={{
                  position: "absolute",
                  left: "7.2vw",
                  top: "1.3vw",
                  fontFamily: "Roboto",
                  fontSize: "1.8vw",
                  fontWeight: "bold",
                  letterSpacing: "0.08vw"
                }}
              >
                Share my unique scenario:
              </p>
              <div id="icons">
                <img
                  src="images/facebook.png"
                  style={{
                    position: "absolute",
                    width: "5vw",
                    left: "7vw",
                    top: "8.4vw"
                  }}
                />
                <img
                  src="images/linkedin.png"
                  style={{
                    position: "absolute",
                    width: "5vw",
                    left: "16.4vw",
                    top: "8.4vw"
                  }}
                />
                <img
                  src="images/instagram.png"
                  style={{
                    position: "absolute",
                    width: "5vw",
                    left: "25.8vw",
                    top: "8.4vw"
                  }}
                />
                <img
                  src="images/twitter.png"
                  style={{
                    position: "absolute",
                    width: "5vw",
                    left: "35.2vw",
                    top: "8.4vw"
                  }}
                />
                <img
                  src="images/gmail.png"
                  style={{
                    position: "absolute",
                    width: "5vw",
                    left: "44.6vw",
                    top: "8.4vw"
                  }}
                />
              </div>
              <p
                style={{
                  position: "absolute",
                  left: "6vw",
                  top: "15.5vw",
                  fontFamily: "Roboto",
                  fontSize: "1.2vw",
                  fontWeight: "bold",
                  letterSpacing: "0.08vw",
                  color: "grey"
                }}
              >
                Share this link
              </p>
              <input
                type="text"
                defaultValue=""
                id="buttonnput"
                style={{
                  position: "absolute",
                  left: "6vw",
                  top: "19.5vw",
                  width: "43vw",
                  height: "3.5vw",
                  borderRadius: "0.2vw",
                  border: "0.15vw solid grey",
                  fontFamily: "Roboto",
                  fontSize: "1.2vw",
                  paddingLeft: "2vw"
                }}
              />
              <button
                onclick="myFunction()"
                style={{
                  position: "absolute",
                  width: "10vw",
                  height: "3.8vw",
                  top: "19.5vw",
                  left: "52.5vw",
                  backgroundColor: "#f0a828",
                  border: "none",
                  borderRadius: "0.5vw",
                  fontFamily: "Roboto",
                  fontSize: "1.3vw",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Copy URL
              </button>
            </div>
          </div>
        </>
      
  );
};

export default DetailsOfMyScenarioLowCarbonElectricityPage;
