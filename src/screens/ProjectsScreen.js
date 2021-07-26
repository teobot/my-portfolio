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
} from "semantic-ui-react";

import { ThemeContext } from "../context/ThemeContext";

import useDimensions from "../context/useDimensions";

import {
  email,
  fullname,
  github_link,
  linkedin_link,
  filter_tags,
  projects,
} from "../data/data";

import ProjectDisplayCard from "../components/ProjectDisplayCard";

function App() {
  const { windowWidth, windowHeight } = useDimensions();

  const [filter, setFilter] = useState(filter_tags[0]);
  const [active, setActive] = useState(true);

  const { darkMode, theme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Container style={{ paddingTop: windowHeight / 30 }}>
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
                  basic={filter !== tag}
                  color="blue"
                >
                  {tag}
                </Button>
              );
            })}
          </div>
        </div>

        <Accordion styled fluid inverted={darkMode}>
          <Accordion.Title active={active}>
            <Icon name="dropdown" />
            What is a dog?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.
            </p>
          </Accordion.Content>
        </Accordion>

      </Container>

      <Divider hidden />

      <Container>
        {projects.map((project) => {
          if (!project.tags.includes(filter)) {
            return null;
          }
          return <ProjectDisplayCard project={project} />;
        })}
        <Divider />
        <Segment inverted={darkMode}>
          <Header as="h3" inverted={darkMode}>
            Want to see the smaller projects that didn't get the same attention?
            😧
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
  );
}

export default App;
