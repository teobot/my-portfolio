import { createContext, useState } from "react";

import "../css/App.css";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Header,
  Flag,
  Segment,
  List,
  Icon,
  Grid,
  Image,
  Divider,
  Button,
} from "semantic-ui-react";

import useDimensions from "../context/useDimensions";

import {
  email,
  fullname,
  github_link,
  linkedin_link,
  filter_tags,
  projects,
} from "../data/data";

import profile from "../img/profile.jpg";
import ProjectDisplayCard from "../components/ProjectDisplayCard";

function App() {
  const { windowWidth, windowHeight } = useDimensions();

  const [filter, setFilter] = useState(filter_tags[0]);

  return (
    <div
      className="App"
      style={{ paddingTop: windowHeight / 30, minHeight: windowHeight }}
    >
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14} verticalAlign="middle">
              <Segment vertical>
                <Header>
                  <Header.Content>
                    {fullname}
                    <Header.Subheader>
                      Software Engineer, Waterpolo Coach/Player, Teacher,
                      Designer, Student - <Flag name="gb" />
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Segment>
              <Segment vertical>
                <List bulleted horizontal={windowWidth > 500}>
                  <List.Item as="a" href={`mailto:${email}`}>
                    <Icon name="mail" />
                    {email}
                  </List.Item>
                  <List.Item as="a" href={github_link}>
                    <Icon name="github" />
                    Github
                  </List.Item>
                  <List.Item as="a" href={linkedin_link}>
                    <Icon name="linkedin" />
                    LinkedIn
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
            {windowWidth > 650 ? (
              <Grid.Column width={2}>
                <Image src={profile} circular />
              </Grid.Column>
            ) : null}
          </Grid.Row>
        </Grid>
      </Container>
      <Divider hidden />

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "0px 50px",
        }}
      >
        {filter_tags.map((tag) => {
          return (
            <Button
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

      <Container style={{ padding: "50px 0px" }}>
        {projects.map((project) => {
          console.log(project);
          if (!project.tags.includes(filter)) {
            return null;
          }
          return <ProjectDisplayCard project={project} />;
        })}
        <Divider />
        <Segment>
          <Header as="h3">
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
      </Container>
    </div>
  );
}

export default App;
