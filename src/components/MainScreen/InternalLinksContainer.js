import React, { useContext, useState } from "react";

import { useHistory } from "react-router-dom";

import { Icon } from "semantic-ui-react";

import { WindowContext } from "../../context/useDimensions";
import { useData } from "../../context/DataContext";

export default function InternalLinksContainer({ link }) {
  const { windowWidth } = useContext(WindowContext);

  const { color, subColor, text, icon, to, ready } = link;

  const mobile = windowWidth < 600;

  let history = useHistory();

  const [hover, setHover] = useState(false);

  const {portfolioData, styleOptions} = useData();

  return (
    <div
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onClick={
        ready
          ? () => {
              history.push(to);
            }
          : null
      }
      style={{
        marginRight: mobile ? styleOptions.INTERNAL_LINKS_OPTIONS.height / 4 : 0,
        position: "relative",
        boxShadow: mobile
          ? null
          : `0px 0px 15px 15px rgba(0, 0, 0, ${hover ? "0.3" : "0.15"})`,
        height: styleOptions.INTERNAL_LINKS_OPTIONS.height,
        minWidth:
          (styleOptions.INTERNAL_LINKS_OPTIONS.height /
            styleOptions.INTERNAL_LINKS_OPTIONS.ratio[1]) *
            styleOptions.INTERNAL_LINKS_OPTIONS.ratio[0],
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
          {portfolioData.homepage.notReadyMessage}
        </span>
      </div>
    </div>
  );
}
