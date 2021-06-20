import React, { useState } from "react";

import { Header, Transition } from "semantic-ui-react";

import useDimensions from "../context/useDimensions";

import Fade from "react-reveal/Fade";

import { useHistory } from "react-router";

export default function ProjectDisplayCard({ project }) {
  const { windowWidth, windowHeight } = useDimensions();

  const [mouseHover, setMouseHover] = useState(false);

  const { image, header, header_sub, slug } = project;

  let history = useHistory();

  const cardDimensions = {
    height: windowWidth > 600 ? windowHeight / 2 : windowHeight / 4,
    width: "100%",
    maxWidth: 1130,
    minWidth: "100%",
    marginBottom: windowWidth > 600 ? 75 : 35,
  };

  return (
    <Fade>
      <div
        className="image-box"
        onMouseEnter={() => {
          setMouseHover(true);
        }}
        onMouseLeave={() => {
          setMouseHover(false);
        }}
        onClick={() => {
          history.push(`/p/${slug}`);
        }}
        style={{
          width: "100%",
          height: cardDimensions.height,
          marginBottom: cardDimensions.marginBottom,
          backgroundColor: "whitesmoke",
          cursor: "pointer",
          borderRadius: 8,
          position: "relative",
        }}
      >
        <img
          src={image}
          alt="Unsplashed Random"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Transition visible={mouseHover} animation="fade up" duration={400}>
          <div
            className="projectcard-sub"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              height: "35%",
              padding: 25,
            }}
          >
            <div style={{ bottom: 25, position: "absolute" }}>
              <Header size="large" inverted>
                <Header.Content>
                  {header}
                  <Header.Subheader>{header_sub}</Header.Subheader>
                </Header.Content>
              </Header>
            </div>
          </div>
        </Transition>
      </div>
    </Fade>
  );
}
