import { useContext, useState } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Header,
  Segment,
  Divider,
  Button,
  Grid,
} from "semantic-ui-react";

import { ThemeContext } from "../context/ThemeContext";
import { WindowContext } from "../context/useDimensions";
import { useData } from "../context/DataContext";

import ProjectDisplayCard from "../components/ProjectDisplayCard";
import NavBar from "../components/NavBar";
import MorphBlob from "../components/MorphBlob";

function App() {
  // useStates
  const [filter, setFilter] = useState("ALL");

  // useContext
  const { darkMode } = useContext(ThemeContext);
  const { windowHeight } = useContext(WindowContext);
  const { portfolioData } = useData();

  // variables
  const filterTagArray = portfolioData?.projects.reduce((acc, curr) => {
    if (curr.tags) {
      curr.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
    }
    return acc;
  }, []);
  const displayProjects = portfolioData?.projects.filter((p) =>
    p.tags.includes(filter)
  );

  if (!portfolioData) {
    // TODO: LOADING
    return (
      <Container textAlign="center">
        <Header as="h1">Loading...</Header>
      </Container>
    );
  } else {
    const halfProjects = Math.ceil(displayProjects.length / 2);

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
              {filterTagArray.map((tag) => {
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
                {displayProjects.slice(0, halfProjects).map((project) => {
                  return <ProjectDisplayCard project={project} />;
                })}
              </Grid.Column>
              <Grid.Column>
                {displayProjects
                  .slice(halfProjects, displayProjects.length)
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
                    href={`${portfolioData.myDetails.githubLink}?tab=repositories`}
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
}

export default App;
