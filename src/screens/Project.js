import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import { Container, Divider, Menu, Icon } from "semantic-ui-react";

import { projects } from "../data/data";

import profile from "../img/profile.jpg";

import ReactMarkdown from "react-markdown";

export default function Project() {
  let { id } = useParams();

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

      <Container
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          padding: 25,
          backgroundColor: "white",
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
      </Container>
      <Divider hidden />
    </>
  );
}
