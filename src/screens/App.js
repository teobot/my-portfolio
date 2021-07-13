import { useContext, useState } from "react";

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

import profile from "../img/profile.jpg";
import ProjectDisplayCard from "../components/ProjectDisplayCard";

function App() {
  const { windowWidth, windowHeight } = useDimensions();

  const [filter, setFilter] = useState(filter_tags[0]);

  const { darkMode, theme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        paddingTop: windowHeight / 30,
        minHeight: windowHeight,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Container>
        <Grid inverted={darkMode}>
          <Grid.Row>
            <Grid.Column width={14} verticalAlign="middle">
              <Segment vertical style={{borderBottom: `1px solid ${theme.text}`}}>
                <Header inverted={darkMode}>
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
                <List
                  bulleted
                  horizontal={windowWidth > 500}
                  inverted={darkMode}
                >
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
