import React from "react";
const EnergyDemandAndSupply = () => {
    return(


            <>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Energy Demand &amp; Supply</title>
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
              <div
                style={{
                  position: "absolute",
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
                    color: "#F0A800"
                  }}
                >
                  My scenario - results in a glimpse
                </p>
              </div>
              <div
                id="triangle-down"
                style={{
                  position: "absolute",
                  left: "46.6vw",
                  top: "7vw",
                  width: "0vw",
                  height: "0vw",
                  borderLeft: "1.5vw solid transparent",
                  borderRight: "1.5vw solid transparent",
                  borderTop: "3vw solid #054170"
                }}
              ></div>
              <a href="javascript:resultsPage()">
                <div
                  style={{
                    position: "absolute",
                    width: "16.4vw",
                    height: "3.9vw",
                    left: "9.65vw",
                    top: "10.5vw",
                    backgroundColor: "#198BBB",
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
              <div
                style={{
                  position: "absolute",
                  width: "19.1vw",
                  height: "3.9vw",
                  left: "38.7vw",
                  top: "10.5vw",
                  backgroundColor: "#F0A800",
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
              <a href="javascript:detailsPage()">
                <div
                  style={{
                    position: "absolute",
                    width: "19.1vw",
                    height: "3.9vw",
                    left: "68.2vw",
                    top: "10.5vw",
                    backgroundColor: "#198BBB",
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
              </a>
              <div
                id="graph-section-background"
                style={{
                  position: "absolute",
                  left: "0vw",
                  top: "16vw",
                  width: "100vw",
                  height: "48.1vw",
                  backgroundColor: "#000000",
                  opacity: "0.07"
                }}
              ></div>
              <p
                style={{
                  position: "absolute",
                  left: "7.4vw",
                  top: "19vw",
                  fontFamily: "Roboto",
                  fontSize: "1.35vw",
                  lineHeight: "2.7vw",
                  color: "#707070"
                }}
              >
                This graph shows the final energy demand and the energy supply required to
                meet this demand in 2050, relative to 2015.
              </p>
              <div
                id="graph-section-background"
                style={{
                  position: "absolute",
                  left: "0vw",
                  top: "24vw",
                  width: "100vw",
                  height: "48.1vw",
                  backgroundColor: "#ffffff",
                  opacity: 1,
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div style={{ width: "80%", textAlign: "center" }}>
                  <canvas id="myChart" />
                </div>
              </div>
              <img
                src="images/photo-1663593841920-3a627c66381f-cropped.jpg"
                style={{ position: "absolute", width: "100vw", left: "0vw", top: "73vw" }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100vw",
                  height: "11.5vw",
                  backgroundColor: "#054170",
                  top: "73vw",
                  left: "0vw",
                  opacity: "0.77"
                }}
              ></div>
              <a href="index.html">
                <div
                  style={{
                    position: "absolute",
                    width: "14.55vw",
                    height: "4.5vw",
                    left: "14.6vw",
                    top: "66.3vw",
                    backgroundColor: "#198BBB",
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
                    top: "66.3vw",
                    backgroundColor: "#198BBB",
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
                onclick="openForm()"
                style={{
                  position: "absolute",
                  width: "14.55vw",
                  height: "4.5vw",
                  left: "71.2vw",
                  top: "66.3vw",
                  backgroundColor: "#198BBB",
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
                    backgroundColor: "rgba(255, 255, 255, .15)",
                    backdropFilter: "blur(5px)"
                  }}
                ></div>
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
                      border: "0.15vw solid #F0A828",
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
                    <a
                      id="twitter_share"
                      href="mailto:?subject=I wanted you to see this site&body=Check out this site http://www.website.com."
                      title="Share by Email"
                    >
                      <img
                        src="images/twitter.png"
                        style={{
                          position: "absolute",
                          width: "5vw",
                          left: "35.2vw",
                          top: "8.4vw"
                        }}
                      />
                    </a>
                    <a
                      id="mail_share"
                      href="mailto:?subject=I wanted you to see this site&body=Check out this site http://www.website.com."
                      title="Share by Email"
                    >
                      <img
                        src="images/gmail.png"
                        style={{
                          position: "absolute",
                          width: "5vw",
                          left: "44.6vw",
                          top: "8.4vw"
                        }}
                      />
                    </a>
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
                      backgroundColor: "#F0A828",
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
    
    )
};
export default EnergyDemandAndSupply;