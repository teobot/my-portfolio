import React, { useContext, useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import { Divider, Menu, Icon, Image, Header, List } from "semantic-ui-react";

import { projects } from "../data/data";

import useDimensions from "../context/useDimensions";

import profile from "../img/profile.jpg";

import ReactMarkdown from "react-markdown";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { ThemeContext } from "../context/ThemeContext";

const EXCLUDE_TAGS = ["Netlify Status", "Version"];

export default function Project() {
  let { id } = useParams();

  const { windowWidth, windowHeight } = useDimensions();

  const { darkMode, theme } = useContext(ThemeContext);

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
      <Menu stackable inverted={darkMode}>
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
          backgroundColor: theme.backgroundColor,
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
                return (
                  <Image alt="" style={{ maxWidth: "100%" }} {...props} fluid />
                );
              }
            },
            h1: ({ node, ...props }) => (
              <Header {...props} as="h1" inverted={darkMode} />
            ),
            h2: ({ node, ...props }) => (
              <Header {...props} as="h2" dividing inverted={darkMode} />
            ),
            h3: ({ node, ...props }) => (
              <Header {...props} as="h3" inverted={darkMode} />
            ),
            h4: ({ node, ...props }) => (
              <Header {...props} as="h4" inverted={darkMode} />
            ),
            h5: ({ node, ...props }) => (
              <Header {...props} as="h5" inverted={darkMode} />
            ),
            h6: ({ node, ...props }) => (
              <Header {...props} as="h6" inverted={darkMode} />
            ),
            ol: ({ node, ...props }) => {
              return (
                <List
                  as="ol"
                  {...props}
                  ordered
                  inverted={darkMode}
                  style={{ color: theme.text }}
                />
              );
            },
            ul: ({ node, ...props }) => {
              return (
                <List
                  as="ul"
                  {...props}
                  bulleted
                  inverted={darkMode}
                  style={{ color: theme.text }}
                />
              );
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
            strong: ({ node, ...props }) => {
              return <strong {...props} style={{ color: theme.text }} />;
            },
            em: ({node, ...props}) => {
                return <em {...props} style={{color: theme.text}}/>
            }
          }}
          children={readme}
        />
      </div>
      <Divider hidden />
    </>
  );
}
