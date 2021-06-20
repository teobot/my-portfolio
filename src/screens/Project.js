import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import {
  Container,
  Divider,
  Header,
  Segment,
  Menu,
  Icon,
  Image,
} from "semantic-ui-react";

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
              history.goBack();
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
              history.goBack();
            }}
          >
            <Icon name="close" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Container>
        <ReactMarkdown
          className="project-readme"
          style={{ backgroundColor: "white", minHeight: 10 }}
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
