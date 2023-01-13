import React from "react";
import {
  Container,
  Content,
  Heading,
  Message,
  Title
} from "../atoms/Container";
import VisibilityMessage from "../atoms/VisibilityMessage";

const ContainerWithVisibleMessage = ({ title, message, children }) => {
  return (
    <Container>
      <Heading>
        <Title>{title}</Title>
        <Message>
          <VisibilityMessage>{message}</VisibilityMessage>
        </Message>
      </Heading>
      <Content>{children}</Content>
    </Container>
  );
};

export default ContainerWithVisibleMessage;
