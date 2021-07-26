import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import {
  Container,
  Header,
  List,
  Divider,
  Icon,
  Flag,
  Grid,
  Segment,
  Button,
  Card,
} from "semantic-ui-react";

import { ThemeContext } from "../context/ThemeContext";
import { WindowContext } from "../context/useDimensions";

import { email, fullname, DATA, OPTIONS } from "../data/data";

export default function MainScreen() {
  const { windowWidth, windowHeight } = useContext(WindowContext);
  const { darkMode, theme } = useContext(ThemeContext);

  let history = useHistory();

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Segment basic>
          <Header
            as="h1"
            textAlign="center"
            inverted={darkMode}
            style={{ fontSize: 68 }}
          >
            Hi, I'm{" "}
            <span style={{ color: "#FF5722", textDecoration: "underline" }}>
              {fullname}
            </span>
          </Header>
        </Segment>
        <Divider style={{ width: "100%" }} section />
        <Segment
          basic
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          {DATA.EXTERNAL_LINKS.map(({ text, to, color }) => {
            return (
              <Button
                basic
                color={color}
                size={OPTIONS.BUTTON_SIZE}
                as="a"
                href={to}
              >
                <span style={{ color: theme.text }}>{text}</span>
              </Button>
            );
          })}
        </Segment>
        <Divider style={{ width: "100%" }} hidden />
        <Segment
          basic
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          {DATA.QUICK_INFO.map((text, index) => {
            return (
              <>
                <div
                  style={{
                    ...OPTIONS.SKILL_STYLE_TEXT,
                    color: darkMode ? "#E0E0E0" : "#434850",
                  }}
                >
                  {text}
                </div>
                {index !== DATA.QUICK_INFO.length - 1 ? (
                  <div
                    style={{ fontSize: 32, color: OPTIONS.BULLET_POINT_COLOR }}
                  >
                    •
                  </div>
                ) : null}
              </>
            );
          })}
        </Segment>

        <Divider style={{ width: "100%" }} hidden />

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
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
                    position: "relative",
                    boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.15)",
                    height: OPTIONS.INTERNAL_LINKS_OPTIONS.height,
                    width:
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
      </div>
    </div>
  );
}
