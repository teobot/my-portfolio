import React, { useContext } from "react";

import {
  Container,
  Header,
  List,
  Divider,
  Icon,
  Flag,
} from "semantic-ui-react";

import { fullname, email, linkedin_link, github_link } from "../../data/data";

import { ThemeContext } from "../../context/ThemeContext";
import {} from "../../context/useDimensions";

export default function ProfileDetails() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        flex: 2,
        alignItems: "center",
      }}
    >
      <Container
        style={{
          paddingTop: windowHeight / 30,
          paddingBottom: windowHeight / 30,
        }}
      >
        <Header inverted={darkMode}>
          <Header.Content>
            {fullname}
            <Header.Subheader>
              Software Engineer, Waterpolo Coach/Player, Teacher, Designer,
              Student - <Flag name="gb" />
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Divider />
        <List horizontal={windowWidth > 500} inverted={darkMode}>
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
      </Container>
    </div>
  );
}
