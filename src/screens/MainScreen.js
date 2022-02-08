import React, { useContext } from "react";

import { Container, Header, Divider, Segment, Button } from "semantic-ui-react";

import MorphBlob from "../components/MorphBlob";
import InternalLinksContainer from "../components/MainScreen/InternalLinksContainer";

import { WindowContext } from "../context/useDimensions";
import { useData } from "../context/DataContext";

export default function MainScreen() {
  const { windowWidth } = useContext(WindowContext);

  const mobile = windowWidth < 600;

  const { portfolioData, styleOptions } = useData();

  if (!portfolioData) {
    // LOADING
    return (
      <Container textAlign="center">
        <Header as="h1">Loading...</Header>
      </Container>
    );
  } else {
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
                {portfolioData.myDetails.fullname}
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
            {portfolioData.homepage.externalLinks.map(({ text, to, color }) => {
              return (
                <Button
                  color={color}
                  size={styleOptions.BUTTON_SIZE}
                  as="a"
                  href={to}
                >
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
            {portfolioData.homepage.quickInfo.map((text, index) => {
              return (
                <>
                  <div
                    style={{
                      ...styleOptions.SKILL_STYLE_TEXT,
                      color: "#E0E0E0",
                      textAlign: "center",
                      lineHeight: 1.05,
                    }}
                  >
                    {text}
                  </div>
                  {index !== portfolioData.homepage.quickInfo.length - 1 ? (
                    <div style={{ fontSize: 32, color: "#E0E0E0" }}>•</div>
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
            {portfolioData.homepage.internalLinks.map((link, index) => {
              return <InternalLinksContainer link={link} />;
            })}
          </div>
        </Container>
      </div>
    );
  }
}
