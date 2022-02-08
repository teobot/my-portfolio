import React, { useEffect, useRef, useState } from "react";

import { useHistory } from "react-router";

import "../css/animate.min.css";
import "../css/projectDisplayCard.css";

import { Header, Transition } from "semantic-ui-react";

import useDimensions from "../context/useDimensions";

export default function ProjectDisplayCard({ project }) {
  const { windowWidth } = useDimensions();

  const [mouseHover, setMouseHover] = useState(false);
  const [divHeight, setDivHeight] = useState(window.innerWidth / 3);

  const { image, header, header_sub, slug } = project;

  let history = useHistory();

  const ref = useRef();

  const StyleSheet = {
    height: divHeight,
    width: "100%",
  };

  useEffect(() => {
    if (ref.current.clientWidth) {
      setDivHeight(ref.current.clientWidth / 2);
    }
  }, [windowWidth]);

  return (
    <div
      ref={ref}
      className="animate__animated animate__fadeIn projectDisplayCard"
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
        height: StyleSheet.height,
        width: StyleSheet.width,
        minWidth: StyleSheet.width,
        maxWidth: StyleSheet.width,
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
  );
}
