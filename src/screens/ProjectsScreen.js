import { useContext, useState } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Header,
  Flag,
  Segment,
  List,
  Icon,
  Divider,
  Button,
  Accordion,
  Grid,
} from "semantic-ui-react";

import { ThemeContext } from "../context/ThemeContext";

import { WindowContext } from "../context/useDimensions";

import {
  email,
  fullname,
  github_link,
  linkedin_link,
  filter_tags,
  projects,
} from "../data/data";

import ProjectDisplayCard from "../components/ProjectDisplayCard";
import NavBar from "../components/NavBar";
import MorphBlob from "../components/MorphBlob";

function App() {
  const { windowWidth, windowHeight } = useContext(WindowContext);

  const [filter, setFilter] = useState(filter_tags[0]);
  const [active, setActive] = useState(true);

  const { darkMode, theme } = useContext(ThemeContext);

  const displayProjects = projects.filter((e) => {
    return e.tags.includes(filter);
  });

  const half = Math.ceil(displayProjects.length / 2);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <NavBar project_title={null} />

      <MorphBlob />

      <Container style={{ paddingTop: windowHeight / 30, zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "0px 50px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            {filter_tags.map((tag) => {
              return (
                <Button
                  style={{ margin: 5 }}
                  onClick={() => {
                    setFilter(tag);
                  }}
                  primary
                  secondary={filter === tag}
                >
                  {tag}
                </Button>
              );
            })}
          </div>
        </div>
      </Container>

      <Divider hidden />

      <div style={{ overflowY: "auto" }}>
        <Container>
          <Grid columns="2" stackable doubling>
            <Grid.Column>
              {displayProjects.slice(0, half).map((project) => {
                return <ProjectDisplayCard project={project} />;
              })}
            </Grid.Column>
            <Grid.Column>
              {displayProjects
                .slice(half, displayProjects.length)
                .map((project) => {
                  return <ProjectDisplayCard project={project} />;
                })}
            </Grid.Column>
          </Grid>

          <Divider />
          <Segment inverted={darkMode}>
            <Header as="h3" inverted={darkMode}>
              Want to see the smaller projects that didn't get the same
              attention? 😧
              <Header.Subheader>
                Take a look{" "}
                <a
                  style={{ fontWeight: "bolder" }}
                  href="https://github.com/teobot?tab=repositories"
                >
                  here 👀
                </a>
                .
              </Header.Subheader>
            </Header>
          </Segment>
          <Divider hidden section />
        </Container>
      </div>
    </div>
  );
}

export default App;
