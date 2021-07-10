import React, { useEffect, useRef, useState } from "react";

import "../css/projectDisplayCard.css";

import { Header, Transition } from "semantic-ui-react";

import useDimensions from "../context/useDimensions";

import { useHistory } from "react-router";

import Fade from "react-reveal/Fade";

export default function ProjectDisplayCard({ project }) {
  const { windowWidth, windowHeight } = useDimensions();

  const [mouseHover, setMouseHover] = useState(false);
  const [divHeight, setDivHeight] = useState(window.innerWidth / 3);

  const { image, header, header_sub, slug } = project;

  let history = useHistory();

  const ref = useRef();

  useEffect(() => {
    if (ref.current.clientWidth) {
      setDivHeight(ref.current.clientWidth / 2);
    }
  }, [windowWidth]);

  return (
    <Fade>
      <div
        className="projectDisplayCard"
        ref={ref}
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
          height: divHeight,
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          marginBottom: 50,
          cursor: "pointer",
          borderRadius: 8,
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <Transition visible={mouseHover} animation="fade" duration={400}>
          <div
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
              borderRadius: 8,
              background: `linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.75) 50%,
                rgba(0, 0, 0, 0.95) 75%,
                rgba(0, 0, 0, 1) 100%
              )`,
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
