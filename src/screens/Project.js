import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import { Divider, Menu, Icon } from "semantic-ui-react";

import { projects } from "../data/data";

import useDimensions from "../context/useDimensions";

import profile from "../img/profile.jpg";

import ReactMarkdown from "react-markdown";

export default function Project() {
  let { id } = useParams();

  const { windowWidth, windowHeight } = useDimensions();

  const project = projects.find((element) => element.slug === id);

  const [readme, setReadme] = useState(null);

  let history = useHistory();

  const loadReadme = async () => {
    await fetch(project.readme)
      .then((r) => r.text())
      .then((text) => {
        setReadme(text);
      });
  };

  useEffect(() => {
    loadReadme();
  }, []);

  return (
    <>
      <Menu stackable>
        <Menu.Menu position="left">
          <Menu.Item
            onClick={() => {
              history.push("/");
            }}
          >
            <img alt="male with short hair wearing a suit" src={profile} />
          </Menu.Item>

          <Menu.Item name="features" style={{ fontWeight: "bolder" }}>
            {project.header}
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item
            name="features"
            onClick={() => {
              history.push("/");
            }}
          >
            <Icon name="close" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          padding: 25,
          backgroundColor: "white",
          width: windowWidth > 1000 ? "75%" : windowWidth > 750 ? "86%" : "98%",
          margin: "0 auto"
        }}
      >
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              <img alt="" style={{ maxWidth: "100%" }} {...props} />
            ),
          }}
          children={readme}
        />
      </div>
      <Divider hidden />
    </>
  );
}
