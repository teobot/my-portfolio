import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import { Divider, Menu, Icon, Image, Header, List } from "semantic-ui-react";

import { projects } from "../data/data";

import useDimensions from "../context/useDimensions";

import profile from "../img/profile.jpg";

import ReactMarkdown from "react-markdown";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const EXCLUDE_TAGS = ["Netlify Status", "Version"];

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
          margin: "0 auto",
        }}
      >
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => {
              if (EXCLUDE_TAGS.includes(props.alt)) {
                return <Image {...props} spaced />;
              } else {
                console.log(props);

                return (
                  <Image alt="" style={{ maxWidth: "100%" }} {...props} fluid />
                );
              }
            },
            h1: ({ node, ...props }) => <Header {...props} as="h1" />,
            h2: ({ node, ...props }) => <Header {...props} as="h2" dividing />,
            h3: ({ node, ...props }) => <Header {...props} as="h3" />,
            h4: ({ node, ...props }) => <Header {...props} as="h4" />,
            h5: ({ node, ...props }) => <Header {...props} as="h5" />,
            h6: ({ node, ...props }) => <Header {...props} as="h6" />,
            ol: ({ node, ...props }) => {
              return <List as="ol" {...props} ordered />;
            },
            ul: ({ node, ...props }) => {
              return <List as="ul" {...props} bulleted />;
            },
            code: ({ node, ...props }) => {
              if (props.inline) {
                return (
                  <code
                    style={{
                      backgroundColor: "#f6f8fa",
                      color: "black",
                      padding: "2px 5px 2px 5px",
                      margin: "2px 5px 2px 5px",
                      borderRadius: 5,
                    }}
                    {...props}
                  />
                );
              } else {
                return <SyntaxHighlighter {...props} style={docco} />;
              }
            },
          }}
          children={readme}
        />
      </div>
      <Divider hidden />
    </>
  );
}
