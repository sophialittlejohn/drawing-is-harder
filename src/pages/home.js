import React from "react";

import { useHistory } from "react-router-dom";
import { Container, Grid, Header, Card, Button } from "semantic-ui-react";

export const Home = () => {
  const { push } = useHistory();

  return (
    <Container style={{ paddingTop: "10%" }} text>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Card fluid color="olive">
              <Card.Content>
                <Header as="h1">Drawing Is Hard</Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card fluid raised>
              <Card.Content style={{ fontSize: "20px" }}>
                <p>
                  This game has been modeled off Google's{" "}
                  <a href="https://quickdraw.withgoogle.com/">Quick, Draw!</a>{" "}
                  game and uses a sampling from the Quick, Draw! dataset.
                </p>
                <p>
                  Brought to you by{" "}
                  <a href="https://www.extensionschool.ch/">
                    EPFL Extension School{" "}
                  </a>
                  as part of my capstone project for the UI Development course.
                </p>
                <p>
                  Check out the source code on my{" "}
                  <a href="https://github.com/sophialittlejohn/drawing-is-hard">
                    GitHub profile
                  </a>
                  .
                </p>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button
              onClick={() => push("/game")}
              size="massive"
              primary
              fluid
              color="olive"
            >
              Play
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
