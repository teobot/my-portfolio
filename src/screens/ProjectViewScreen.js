import React, { useContext, useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import {
  Divider,
  Menu,
  Icon,
  Image,
  Header,
  List,
  Container,
} from "semantic-ui-react";

import { projects } from "../data/data";

import { WindowContext } from "../context/useDimensions";
import { ThemeContext } from "../context/ThemeContext";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Loader from "react-loader-spinner";

import NavBar from "../components/NavBar";

const EXCLUDE_TAGS = ["Netlify Status", "Version"];

export default function Project() {
  let { id } = useParams();

  const { windowWidth, windowHeight } = useContext(WindowContext);
  const { darkMode, theme } = useContext(ThemeContext);

  const project = projects.find((element) => element.slug === id);

  const [readme, setReadme] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (readme) {
      setLoading(false);
    }
  }, [readme]);

  if (loading) {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="Grid"
          color="#00BFFF"
          height={windowWidth / 8}
          width={windowWidth / 8}
        />
      </div>
    );
  }

  return (
    <>
      <NavBar project_title={project.header} />
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          padding: windowWidth / 50,
        }}
      >
        <Container
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            padding: windowWidth / 40,
          }}
        >
          <ReactMarkdown
            remarkPlugins={[gfm]}
            components={{
              img: ({ node, ...props }) => {
                if (EXCLUDE_TAGS.includes(props.alt)) {
                  return <Image {...props} spaced />;
                } else {
                  return (
                    <Image
                      alt=""
                      {...props}
                      fluid
                      size="massive"
                      centered
                      style={{ margin: "10px 0px 10px 0px" }}
                    />
                  );
                }
              },
              h1: ({ node, ...props }) => (
                <>
                  <Header {...props} as="h1" inverted={darkMode} />
                  <Divider />
                </>
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
                return (
                  <strong
                    {...props}
                    style={{
                      color: theme.text,
                      fontSize: "calc(14px + 0.15vw)",
                      fontWeight: "bolder",
                    }}
                  />
                );
              },
              em: ({ node, ...props }) => {
                return <em {...props} style={{ color: theme.text }} />;
              },
              p: ({ node, ...props }) => {
                return (
                  <p
                    {...props}
                    style={{
                      color: theme.text,
                      fontSize: "calc(12px + 0.15vw)",
                    }}
                  />
                );
              },
            }}
            children={readme}
          />
        </Container>
      </div>
    </>
  );
}
