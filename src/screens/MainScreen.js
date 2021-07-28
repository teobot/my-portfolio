import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import {
  Container,
  Header,
  Divider,
  Icon,
  Segment,
  Button,
} from "semantic-ui-react";

import MorphBlob from "../components/MorphBlob";

import { WindowContext } from "../context/useDimensions";

import { fullname, DATA, OPTIONS } from "../data/data";

export default function MainScreen() {
  const { windowWidth, windowHeight } = useContext(WindowContext);

  let history = useHistory();

  const mobile = windowWidth < 600;

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <MorphBlob />
      <Container
        style={{
          padding: windowWidth / 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Segment basic>
          <Header
            as="h1"
            textAlign="center"
            style={{ fontSize: mobile ? 48 : 68 }}
          >
            Hi, I'm{" "}
            <span style={{ color: "#FF5722", textDecoration: "underline" }}>
              {fullname}
            </span>
          </Header>
        </Segment>
        <Divider
          style={{ width: "100%", margin: mobile ? "0.5rem" : "1rem" }}
        />
        <Segment
          basic
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: mobile ? "column" : "row",
            padding: 0,
          }}
        >
          {DATA.EXTERNAL_LINKS.map(({ text, to, color }) => {
            return (
              <Button color={color} size={OPTIONS.BUTTON_SIZE} as="a" href={to}>
                {text}
              </Button>
            );
          })}
        </Segment>
        <Divider
          style={{ width: "100%", margin: mobile ? "0.5rem" : "1rem" }}
          hidden
        />
        <Segment
          basic
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
          }}
        >
          {DATA.QUICK_INFO.map((text, index) => {
            return (
              <>
                <div
                  style={{
                    ...OPTIONS.SKILL_STYLE_TEXT,
                    color: "#E0E0E0",
                    textAlign: "center",
                    lineHeight: 1.05,
                  }}
                >
                  {text}
                </div>
                {index !== DATA.QUICK_INFO.length - 1 ? (
                  <div
                    style={{ fontSize: 32, color: "#E0E0E0" }}
                  >
                    •
                  </div>
                ) : null}
              </>
            );
          })}
        </Segment>
        <Divider
          style={{ width: "100%", margin: mobile ? "0.5rem" : "1rem" }}
          hidden
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            ...(!mobile
              ? { justifyContent: "space-between" }
              : { padding: 15, overflowX: "auto" }),
          }}
        >
          {DATA.INTERNAL_LINKS.map(
            ({ color, subColor, text, icon, to, ready }, index) => {
              return (
                <div
                  onClick={
                    ready
                      ? () => {
                          history.push(to);
                        }
                      : null
                  }
                  style={{
                    marginRight: mobile
                      ? OPTIONS.INTERNAL_LINKS_OPTIONS.height / 4
                      : 0,
                    position: "relative",
                    boxShadow: mobile
                      ? null
                      : "0px 0px 15px 15px rgba(0, 0, 0, 0.15)",
                    height: OPTIONS.INTERNAL_LINKS_OPTIONS.height,
                    minWidth:
                      (OPTIONS.INTERNAL_LINKS_OPTIONS.height /
                        OPTIONS.INTERNAL_LINKS_OPTIONS.ratio[1]) *
                      OPTIONS.INTERNAL_LINKS_OPTIONS.ratio[0],
                    backgroundColor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 5,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "80%",
                        width: "80%",
                        backgroundColor: subColor,
                        borderRadius: 15,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon inverted size="huge" name={icon} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 4,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 26,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {text}
                    </span>
                  </div>

                  {/* Not Ready Dimmer */}
                  <div
                    style={{
                      visibility: ready ? "hidden" : "visible",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgb(0,0,0, 0.75)",
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      borderRadius: 15,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 26,
                        color: "white",
                        textAlign: "center",
                        lineHeight: 1.1,
                        wordSpacing: "100vh",
                        fontWeight: "bold",
                      }}
                    >
                      {DATA.NOT_READY_MESSAGE}
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </div>
  );
}
